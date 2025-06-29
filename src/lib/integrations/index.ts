import { supabase } from '../supabase'

// Base API client with error handling and retries
class BaseAPIClient {
  protected baseURL: string
  protected headers: Record<string, string>
  protected rateLimitDelay = 1000
  
  constructor(baseURL: string, defaultHeaders: Record<string, string> = {}) {
    this.baseURL = baseURL
    this.headers = {
      'Content-Type': 'application/json',
      ...defaultHeaders
    }
  }

  protected async request<T>(
    endpoint: string,
    options: RequestInit = {},
    retries = 3
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`
    
    try {
      const response = await fetch(url, {
        ...options,
        headers: { ...this.headers, ...options.headers }
      })

      // Log API call
      await this.logAPICall(endpoint, options.method || 'GET', response.status)

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      if (retries > 0) {
        await new Promise(resolve => setTimeout(resolve, this.rateLimitDelay))
        return this.request<T>(endpoint, options, retries - 1)
      }
      throw error
    }
  }

  private async logAPICall(endpoint: string, method: string, status: number) {
    try {
      await supabase
        .from('api_integration_logs')
        .insert({
          service_name: this.constructor.name.toLowerCase().replace('client', ''),
          endpoint,
          method,
          response_status: status,
          response_time_ms: Date.now() // Simplified
        })
    } catch (error) {
      console.warn('Failed to log API call:', error)
    }
  }
}

// Manifest Financial API Client
export class ManifestClient extends BaseAPIClient {
  constructor() {
    super('https://api.manifest.com/v1', {
      'Authorization': `Bearer ${import.meta.env.VITE_MANIFEST_API_KEY}`,
      'X-API-Version': '2024-01-01'
    })
  }

  async createAccount(userData: {
    email: string
    type: 'individual' | 'business'
    metadata?: Record<string, any>
  }) {
    return this.request('/accounts', {
      method: 'POST',
      body: JSON.stringify({
        email: userData.email,
        type: userData.type,
        metadata: {
          platform: 'truefans_jam',
          ...userData.metadata
        }
      })
    })
  }

  async createPayment(paymentData: {
    amount: number
    currency: string
    description: string
    splits: Array<{
      account_id: string
      amount: number
      metadata?: Record<string, any>
    }>
    metadata?: Record<string, any>
  }) {
    return this.request('/payments', {
      method: 'POST',
      body: JSON.stringify(paymentData)
    })
  }

  async getBalance(accountId: string) {
    return this.request(`/accounts/${accountId}/balance`)
  }

  async createPayout(payoutData: {
    account_id: string
    amount: number
    currency: string
    method: 'ach' | 'wire' | 'check'
    metadata?: Record<string, any>
  }) {
    return this.request('/payouts', {
      method: 'POST',
      body: JSON.stringify(payoutData)
    })
  }
}

// Spotify API Client
export class SpotifyClient extends BaseAPIClient {
  private accessToken: string | null = null
  private tokenExpiry = 0

  constructor() {
    super('https://api.spotify.com/v1')
  }

  async authenticate() {
    if (this.accessToken && Date.now() < this.tokenExpiry) {
      return this.accessToken
    }

    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa(`${import.meta.env.VITE_SPOTIFY_CLIENT_ID}:${import.meta.env.VITE_SPOTIFY_CLIENT_SECRET}`)}`
      },
      body: 'grant_type=client_credentials'
    })

    if (!response.ok) {
      throw new Error('Spotify authentication failed')
    }

    const data = await response.json()
    this.accessToken = data.access_token
    this.tokenExpiry = Date.now() + (data.expires_in * 1000) - 60000 // 1 minute buffer
    
    this.headers['Authorization'] = `Bearer ${this.accessToken}`
    return this.accessToken
  }

  async getArtist(artistId: string) {
    await this.authenticate()
    return this.request(`/artists/${artistId}`)
  }

  async getArtistAlbums(artistId: string, options: { limit?: number; market?: string } = {}) {
    await this.authenticate()
    const params = new URLSearchParams({
      limit: (options.limit || 20).toString(),
      market: options.market || 'US'
    })
    return this.request(`/artists/${artistId}/albums?${params}`)
  }

  async getArtistTopTracks(artistId: string, market = 'US') {
    await this.authenticate()
    return this.request(`/artists/${artistId}/top-tracks?market=${market}`)
  }

  async searchArtists(query: string, limit = 20) {
    await this.authenticate()
    const params = new URLSearchParams({
      q: query,
      type: 'artist',
      limit: limit.toString()
    })
    return this.request(`/search?${params}`)
  }

  async getArtistAnalytics(artistId: string) {
    await this.authenticate()
    
    const [artist, albums, topTracks, relatedArtists] = await Promise.all([
      this.getArtist(artistId),
      this.getArtistAlbums(artistId, { limit: 50 }),
      this.getArtistTopTracks(artistId),
      this.request(`/artists/${artistId}/related-artists`)
    ])

    return {
      artist,
      albums: albums.items,
      topTracks: topTracks.tracks,
      relatedArtists: relatedArtists.artists,
      analytics: {
        followers: artist.followers.total,
        popularity: artist.popularity,
        genres: artist.genres,
        monthlyListeners: this.estimateMonthlyListeners(artist),
        marketPresence: this.analyzeMarketPresence(artist, relatedArtists.artists)
      }
    }
  }

  private estimateMonthlyListeners(artist: any): number {
    // Estimation based on followers and popularity
    return Math.round(artist.followers.total * (artist.popularity / 100) * 1.5)
  }

  private analyzeMarketPresence(artist: any, relatedArtists: any[]): any {
    const avgPopularity = relatedArtists.reduce((sum, a) => sum + a.popularity, 0) / relatedArtists.length
    const marketPosition = artist.popularity / avgPopularity
    
    return {
      competitivePosition: marketPosition > 1 ? 'above_average' : 'below_average',
      genreStrength: artist.genres.length > 2 ? 'diverse' : 'focused',
      growthPotential: artist.popularity < 50 ? 'high' : 'moderate'
    }
  }
}

// BandsInTown API Client
export class BandsInTownClient extends BaseAPIClient {
  constructor() {
    super('https://rest.bandsintown.com', {
      'app_id': import.meta.env.VITE_BANDSINTOWN_APP_ID!
    })
  }

  async getArtistEvents(artistName: string) {
    return this.request(`/artists/${encodeURIComponent(artistName)}/events?date=upcoming`)
  }

  async getArtistInfo(artistName: string) {
    return this.request(`/artists/${encodeURIComponent(artistName)}`)
  }

  async searchVenues(location: string, radius = 25) {
    return this.request(`/venues?location=${encodeURIComponent(location)}&radius=${radius}`)
  }

  async createEvent(eventData: {
    artist: string
    venue: string
    city: string
    region: string
    country: string
    datetime: string
    description?: string
    ticket_url?: string
  }) {
    return this.request('/events', {
      method: 'POST',
      body: JSON.stringify(eventData)
    })
  }

  async analyzeMarketPresence(artistName: string, region?: string) {
    try {
      const [artistInfo, events] = await Promise.all([
        this.getArtistInfo(artistName),
        this.getArtistEvents(artistName)
      ])

      const filteredEvents = region 
        ? events.filter((event: any) => 
            event.venue.region?.toLowerCase().includes(region.toLowerCase())
          )
        : events

      return {
        artist: artistInfo,
        totalEvents: filteredEvents.length,
        upcomingEvents: filteredEvents,
        marketAnalysis: this.calculateMarketMetrics(filteredEvents),
        recommendations: this.generateRecommendations(filteredEvents, region)
      }
    } catch (error) {
      console.error('BandsInTown analysis error:', error)
      return null
    }
  }

  private calculateMarketMetrics(events: any[]) {
    const cities = new Set(events.map(event => event.venue.city))
    const venues = new Set(events.map(event => event.venue.name))
    
    return {
      uniqueCities: cities.size,
      uniqueVenues: venues.size,
      avgEventsPerCity: events.length / Math.max(1, cities.size),
      marketPenetration: cities.size > 5 ? 'high' : cities.size > 2 ? 'medium' : 'low'
    }
  }

  private generateRecommendations(events: any[], region?: string) {
    const cities = events.map(event => event.venue.city)
    const mostPopularCities = this.getMostFrequent(cities)
    
    return {
      expandTo: ['Austin', 'Nashville', 'Portland'].filter(city => !cities.includes(city)),
      focusOn: mostPopularCities.slice(0, 3),
      timing: 'Spring and Fall typically have higher attendance'
    }
  }

  private getMostFrequent(arr: string[]): string[] {
    const counts = arr.reduce((acc, city) => {
      acc[city] = (acc[city] || 0) + 1
      return acc
    }, {} as Record<string, number>)
    
    return Object.entries(counts)
      .sort(([,a], [,b]) => b - a)
      .map(([city]) => city)
  }
}

// Initialize API clients
export const manifestAPI = new ManifestClient()
export const spotifyAPI = new SpotifyClient()
export const bandsInTownAPI = new BandsInTownClient()
