interface Location {
  city: string
  state: string
  latitude: number
  longitude: number
}

interface HostOffer {
  id: string
  hostId: string
  location: Location
  availableDates: string[]
  capacity: number
  venueType: string
  guaranteedAmount: number
}

interface TourStop {
  hostOfferId: string
  location: Location
  date: string
  arrivalTime: string
  drivingDistance: number
  drivingTime: number
  isRestDay: boolean
}

interface TourPlan {
  stops: TourStop[]
  totalDistance: number
  totalDrivingTime: number
  restDays: number
  feasible: boolean
  violations: string[]
}

export class TourAlgorithm {
  private static readonly MAX_DAILY_DRIVE = 300 // miles
  private static readonly REST_DAY_FREQUENCY = 3 // every 3rd show
  private static readonly ARRIVAL_DEADLINE = 16 // 4 PM in 24-hour format
  private static readonly DRIVING_SPEED_AVG = 60 // mph average including stops

  /**
   * Calculate distance between two coordinates using Haversine formula
   */
  private static calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 3959 // Earth's radius in miles
    const dLat = this.toRadians(lat2 - lat1)
    const dLon = this.toRadians(lon2 - lon1)
    
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2)
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }

  private static toRadians(degrees: number): number {
    return degrees * (Math.PI / 180)
  }

  /**
   * Calculate driving time in hours
   */
  private static calculateDrivingTime(distance: number): number {
    return distance / this.DRIVING_SPEED_AVG
  }

  /**
   * Check if arrival time meets the 4 PM deadline
   */
  private static canArriveOnTime(drivingTime: number, departureHour: number = 8): boolean {
    const arrivalHour = departureHour + drivingTime
    return arrivalHour <= this.ARRIVAL_DEADLINE
  }

  /**
   * Generate optimal tour plan using genetic algorithm approach
   */
  static async generateTourPlan(
    startLocation: Location,
    endLocation: Location,
    hostOffers: HostOffer[],
    tourDates: { start: string; end: string },
    expectedShows: number
  ): Promise<TourPlan> {
    
    // Filter offers by date availability
    const availableOffers = this.filterOffersByDateRange(hostOffers, tourDates)
    
    if (availableOffers.length < expectedShows) {
      return {
        stops: [],
        totalDistance: 0,
        totalDrivingTime: 0,
        restDays: 0,
        feasible: false,
        violations: ['Insufficient host offers for expected number of shows']
      }
    }

    // Generate multiple tour route candidates
    const candidates = await this.generateRouteCandidates(
      startLocation,
      endLocation,
      availableOffers,
      tourDates,
      expectedShows
    )

    // Evaluate and select best candidate
    const bestPlan = this.selectBestPlan(candidates)
    
    return bestPlan
  }

  /**
   * Filter host offers by tour date range
   */
  private static filterOffersByDateRange(
    offers: HostOffer[],
    tourDates: { start: string; end: string }
  ): HostOffer[] {
    const startDate = new Date(tourDates.start)
    const endDate = new Date(tourDates.end)

    return offers.filter(offer => {
      return offer.availableDates.some(dateStr => {
        const date = new Date(dateStr)
        return date >= startDate && date <= endDate
      })
    }).map(offer => ({
      ...offer,
      availableDates: offer.availableDates.filter(dateStr => {
        const date = new Date(dateStr)
        return date >= startDate && date <= endDate
      })
    }))
  }

  /**
   * Generate multiple route candidates using different strategies
   */
  private static async generateRouteCandidates(
    startLocation: Location,
    endLocation: Location,
    offers: HostOffer[],
    tourDates: { start: string; end: string },
    expectedShows: number
  ): Promise<TourPlan[]> {
    
    const candidates: TourPlan[] = []

    // Strategy 1: Nearest neighbor with date constraints
    candidates.push(await this.generateNearestNeighborRoute(
      startLocation, endLocation, offers, tourDates, expectedShows
    ))

    // Strategy 2: Geographic clustering
    candidates.push(await this.generateClusteredRoute(
      startLocation, endLocation, offers, tourDates, expectedShows
    ))

    // Strategy 3: Date-priority routing
    candidates.push(await this.generateDatePriorityRoute(
      startLocation, endLocation, offers, tourDates, expectedShows
    ))

    return candidates.filter(plan => plan.feasible)
  }

  /**
   * Nearest neighbor algorithm with constraints
   */
  private static async generateNearestNeighborRoute(
    startLocation: Location,
    endLocation: Location,
    offers: HostOffer[],
    tourDates: { start: string; end: string },
    expectedShows: number
  ): Promise<TourPlan> {
    
    const stops: TourStop[] = []
    const usedOffers = new Set<string>()
    let currentLocation = startLocation
    let currentDate = new Date(tourDates.start)
    let showCount = 0
    let violations: string[] = []

    while (showCount < expectedShows && currentDate <= new Date(tourDates.end)) {
      // Find nearest available offer for current date or nearby dates
      const nearestOffer = this.findNearestAvailableOffer(
        currentLocation,
        offers,
        usedOffers,
        currentDate
      )

      if (!nearestOffer) {
        // No available offers, move to next day
        currentDate.setDate(currentDate.getDate() + 1)
        continue
      }

      const distance = this.calculateDistance(
        currentLocation.latitude,
        currentLocation.longitude,
        nearestOffer.location.latitude,
        nearestOffer.location.longitude
      )

      const drivingTime = this.calculateDrivingTime(distance)

      // Check constraints
      if (distance > this.MAX_DAILY_DRIVE) {
        // Need a rest/driving day
        const restStop: TourStop = {
          hostOfferId: '',
          location: currentLocation,
          date: currentDate.toISOString().split('T')[0],
          arrivalTime: '',
          drivingDistance: distance,
          drivingTime: drivingTime,
          isRestDay: true
        }
        stops.push(restStop)
        currentDate.setDate(currentDate.getDate() + 1)
        
        // Check if we can still arrive on time the next day
        if (!this.canArriveOnTime(drivingTime)) {
          violations.push(`Cannot arrive by 4 PM for show at ${nearestOffer.location.city}`)
        }
      }

      // Add the show stop
      const showStop: TourStop = {
        hostOfferId: nearestOffer.id,
        location: nearestOffer.location,
        date: currentDate.toISOString().split('T')[0],
        arrivalTime: this.calculateArrivalTime(drivingTime),
        drivingDistance: distance,
        drivingTime: drivingTime,
        isRestDay: false
      }

      stops.push(showStop)
      usedOffers.add(nearestOffer.id)
      currentLocation = nearestOffer.location
      showCount++

      // Check if we need a rest day (every 3rd show)
      if (showCount % this.REST_DAY_FREQUENCY === 0 && showCount < expectedShows) {
        currentDate.setDate(currentDate.getDate() + 2) // Show day + rest day
      } else {
        currentDate.setDate(currentDate.getDate() + 1)
      }
    }

    const totalDistance = stops.reduce((sum, stop) => sum + stop.drivingDistance, 0)
    const totalDrivingTime = stops.reduce((sum, stop) => sum + stop.drivingTime, 0)
    const restDays = stops.filter(stop => stop.isRestDay).length

    return {
      stops,
      totalDistance,
      totalDrivingTime,
      restDays,
      feasible: violations.length === 0 && showCount >= expectedShows * 0.8, // 80% success rate
      violations
    }
  }

  /**
   * Geographic clustering approach
   */
  private static async generateClusteredRoute(
    startLocation: Location,
    endLocation: Location,
    offers: HostOffer[],
    tourDates: { start: string; end: string },
    expectedShows: number
  ): Promise<TourPlan> {
    
    // Group offers by geographic clusters
    const clusters = this.createGeographicClusters(offers, 3) // 3 clusters
    
    // Plan route through clusters
    const orderedClusters = this.orderClustersByProximity(clusters, startLocation, endLocation)
    
    // Generate route through ordered clusters
    return this.generateRouteThoughClusters(
      startLocation,
      endLocation,
      orderedClusters,
      tourDates,
      expectedShows
    )
  }

  /**
   * Date-priority routing (prioritize hosts with limited availability)
   */
  private static async generateDatePriorityRoute(
    startLocation: Location,
    endLocation: Location,
    offers: HostOffer[],
    tourDates: { start: string; end: string },
    expectedShows: number
  ): Promise<TourPlan> {
    
    // Sort offers by availability scarcity (fewer available dates = higher priority)
    const prioritizedOffers = offers.sort((a, b) => 
      a.availableDates.length - b.availableDates.length
    )

    return this.generateNearestNeighborRoute(
      startLocation,
      endLocation,
      prioritizedOffers,
      tourDates,
      expectedShows
    )
  }

  /**
   * Helper methods
   */
  private static findNearestAvailableOffer(
    currentLocation: Location,
    offers: HostOffer[],
    usedOffers: Set<string>,
    targetDate: Date
  ): HostOffer | null {
    
    const targetDateStr = targetDate.toISOString().split('T')[0]
    
    // Filter available offers for the target date
    const availableOffers = offers.filter(offer => 
      !usedOffers.has(offer.id) && 
      offer.availableDates.includes(targetDateStr)
    )

    if (availableOffers.length === 0) {
      // Try nearby dates (±2 days)
      const nearbyDates = this.getNearbyDates(targetDate, 2)
      const nearbyOffers = offers.filter(offer =>
        !usedOffers.has(offer.id) &&
        offer.availableDates.some(date => nearbyDates.includes(date))
      )
      
      if (nearbyOffers.length === 0) return null
      
      // Find nearest among nearby offers
      return nearbyOffers.reduce((nearest, offer) => {
        const distance = this.calculateDistance(
          currentLocation.latitude,
          currentLocation.longitude,
          offer.location.latitude,
          offer.location.longitude
        )
        
        const nearestDistance = this.calculateDistance(
          currentLocation.latitude,
          currentLocation.longitude,
          nearest.location.latitude,
          nearest.location.longitude
        )
        
        return distance < nearestDistance ? offer : nearest
      })
    }

    // Find nearest available offer
    return availableOffers.reduce((nearest, offer) => {
      const distance = this.calculateDistance(
        currentLocation.latitude,
        currentLocation.longitude,
        offer.location.latitude,
        offer.location.longitude
      )
      
      const nearestDistance = this.calculateDistance(
        currentLocation.latitude,
        currentLocation.longitude,
        nearest.location.latitude,
        nearest.location.longitude
      )
      
      return distance < nearestDistance ? offer : nearest
    })
  }

  private static getNearbyDates(date: Date, dayRange: number): string[] {
    const dates: string[] = []
    for (let i = -dayRange; i <= dayRange; i++) {
      const nearbyDate = new Date(date)
      nearbyDate.setDate(date.getDate() + i)
      dates.push(nearbyDate.toISOString().split('T')[0])
    }
    return dates
  }

  private static calculateArrivalTime(drivingTime: number, departureHour: number = 8): string {
    const arrivalHour = departureHour + drivingTime
    const hour = Math.floor(arrivalHour)
    const minute = Math.floor((arrivalHour - hour) * 60)
    
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
  }

  private static createGeographicClusters(offers: HostOffer[], numClusters: number): HostOffer[][] {
    // Simple k-means clustering implementation
    // This is a simplified version - in production, you'd use a more sophisticated algorithm
    
    if (offers.length <= numClusters) {
      return offers.map(offer => [offer])
    }

    // Initialize centroids randomly
    const centroids = offers.slice(0, numClusters).map(offer => ({
      lat: offer.location.latitude,
      lon: offer.location.longitude
    }))

    const clusters: HostOffer[][] = Array(numClusters).fill(null).map(() => [])

    // Assign each offer to nearest centroid
    offers.forEach(offer => {
      let nearestCluster = 0
      let minDistance = Infinity

      centroids.forEach((centroid, index) => {
        const distance = this.calculateDistance(
          offer.location.latitude,
          offer.location.longitude,
          centroid.lat,
          centroid.lon
        )
        
        if (distance < minDistance) {
          minDistance = distance
          nearestCluster = index
        }
      })

      clusters[nearestCluster].push(offer)
    })

    return clusters.filter(cluster => cluster.length > 0)
  }

  private static orderClustersByProximity(
    clusters: HostOffer[][],
    startLocation: Location,
    endLocation: Location
  ): HostOffer[][] {
    
    // Calculate cluster centers
    const clusterCenters = clusters.map(cluster => {
      const avgLat = cluster.reduce((sum, offer) => sum + offer.location.latitude, 0) / cluster.length
      const avgLon = cluster.reduce((sum, offer) => sum + offer.location.longitude, 0) / cluster.length
      return { lat: avgLat, lon: avgLon, cluster }
    })

    // Order clusters by distance from start location
    const orderedCenters = clusterCenters.sort((a, b) => {
      const distanceA = this.calculateDistance(startLocation.latitude, startLocation.longitude, a.lat, a.lon)
      const distanceB = this.calculateDistance(startLocation.latitude, startLocation.longitude, b.lat, b.lon)
      return distanceA - distanceB
    })

    return orderedCenters.map(center => center.cluster)
  }

  private static async generateRouteThoughClusters(
    startLocation: Location,
    endLocation: Location,
    orderedClusters: HostOffer[][],
    tourDates: { start: string; end: string },
    expectedShows: number
  ): Promise<TourPlan> {
    
    // Distribute shows across clusters
    const showsPerCluster = Math.floor(expectedShows / orderedClusters.length)
    const remainingShows = expectedShows % orderedClusters.length

    const allStops: TourStop[] = []
    let currentLocation = startLocation
    let currentDate = new Date(tourDates.start)
    let violations: string[] = []

    for (let i = 0; i < orderedClusters.length; i++) {
      const cluster = orderedClusters[i]
      const showsForThisCluster = showsPerCluster + (i < remainingShows ? 1 : 0)

      // Generate route within cluster
      const clusterPlan = await this.generateNearestNeighborRoute(
        currentLocation,
        i === orderedClusters.length - 1 ? endLocation : currentLocation,
        cluster,
        {
          start: currentDate.toISOString().split('T')[0],
          end: tourDates.end
        },
        showsForThisCluster
      )

      allStops.push(...clusterPlan.stops)
      violations.push(...clusterPlan.violations)

      // Update current location and date
      if (clusterPlan.stops.length > 0) {
        const lastStop = clusterPlan.stops[clusterPlan.stops.length - 1]
        currentLocation = lastStop.location
        currentDate = new Date(lastStop.date)
        currentDate.setDate(currentDate.getDate() + 1)
      }
    }

    const totalDistance = allStops.reduce((sum, stop) => sum + stop.drivingDistance, 0)
    const totalDrivingTime = allStops.reduce((sum, stop) => sum + stop.drivingTime, 0)
    const restDays = allStops.filter(stop => stop.isRestDay).length

    return {
      stops: allStops,
      totalDistance,
      totalDrivingTime,
      restDays,
      feasible: violations.length === 0 && allStops.filter(s => !s.isRestDay).length >= expectedShows * 0.8,
      violations
    }
  }

  /**
   * Select the best plan from candidates
   */
  private static selectBestPlan(candidates: TourPlan[]): TourPlan {
    if (candidates.length === 0) {
      return {
        stops: [],
        totalDistance: 0,
        totalDrivingTime: 0,
        restDays: 0,
        feasible: false,
        violations: ['No feasible tour plans could be generated']
      }
    }

    // Score each plan based on multiple criteria
    const scoredPlans = candidates.map(plan => ({
      plan,
      score: this.scoreTourPlan(plan)
    }))

    // Return the highest scoring plan
    const bestPlan = scoredPlans.reduce((best, current) => 
      current.score > best.score ? current : best
    )

    return bestPlan.plan
  }

  /**
   * Score a tour plan based on multiple criteria
   */
  private static scoreTourPlan(plan: TourPlan): number {
    if (!plan.feasible) return 0

    let score = 100 // Base score

    // Penalize for violations
    score -= plan.violations.length * 20

    // Reward shorter total distance
    score -= plan.totalDistance * 0.01

    // Reward appropriate number of rest days
    const showCount = plan.stops.filter(stop => !stop.isRestDay).length
    const expectedRestDays = Math.floor(showCount / this.REST_DAY_FREQUENCY)
    score -= Math.abs(plan.restDays - expectedRestDays) * 5

    // Reward efficient routing (fewer total stops for same number of shows)
    const efficiency = showCount / plan.stops.length
    score += efficiency * 20

    return Math.max(0, score)
  }
}

/**
 * Service function to generate tour plan for a tour
 */
export async function generateTourPlan(
  tourId: string,
  hostOffers: HostOffer[],
  tourDetails: {
    startDate: string
    endDate: string
    expectedShows: number
    startLocation?: Location
    endLocation?: Location
  }
): Promise<TourPlan> {
  
  // Default locations if not provided
  const defaultStart: Location = {
    city: 'Portland',
    state: 'OR',
    latitude: 45.5152,
    longitude: -122.6784
  }

  const defaultEnd: Location = {
    city: 'Seattle',
    state: 'WA', 
    latitude: 47.6062,
    longitude: -122.3321
  }

  return TourAlgorithm.generateTourPlan(
    tourDetails.startLocation || defaultStart,
    tourDetails.endLocation || defaultEnd,
    hostOffers,
    { start: tourDetails.startDate, end: tourDetails.endDate },
    tourDetails.expectedShows
  )
}
