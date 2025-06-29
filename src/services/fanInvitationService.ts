import { supabase } from '../lib/supabase'
import { Database } from '../types/database'

type Tour = Database['public']['Tables']['tours']['Row']
type HostProfile = Database['public']['Tables']['host_profiles']['Row']

interface FanInvitation {
  tourId: string
  hostId: string
  invitationMessage: string
  tourDetails: Tour
  artistInfo: {
    stageName: string
    bio: string
    genre: string
    profileImage: string
  }
}

export class FanInvitationService {
  /**
   * Send invitations to fans in target locations for a new tour
   */
  static async sendTourInvitations(tour: Tour): Promise<{
    invitationsSent: number
    eligibleHosts: HostProfile[]
    errors: string[]
  }> {
    try {
      // Get artist information
      const { data: artistProfile, error: artistError } = await supabase
        .from('artist_profiles')
        .select('stage_name, bio, genre_primary, profile_image_url')
        .eq('id', tour.artist_id)
        .single()

      if (artistError) {
        throw new Error(`Failed to fetch artist profile: ${artistError.message}`)
      }

      // Find eligible hosts in target locations
      const eligibleHosts = await this.findEligibleHosts(tour)

      if (eligibleHosts.length === 0) {
        return {
          invitationsSent: 0,
          eligibleHosts: [],
          errors: ['No eligible hosts found in target locations']
        }
      }

      // Generate personalized invitation messages
      const invitations = eligibleHosts.map(host => ({
        tourId: tour.id,
        hostId: host.id,
        invitationMessage: this.generateInvitationMessage(tour, artistProfile, host),
        tourDetails: tour,
        artistInfo: {
          stageName: artistProfile.stage_name,
          bio: artistProfile.bio || '',
          genre: artistProfile.genre_primary || '',
          profileImage: artistProfile.profile_image_url || ''
        }
      }))

      // Send invitations (in batches to avoid overwhelming the system)
      const batchSize = 50
      let invitationsSent = 0
      const errors: string[] = []

      for (let i = 0; i < invitations.length; i += batchSize) {
        const batch = invitations.slice(i, i + batchSize)
        
        try {
          await this.sendInvitationBatch(batch)
          invitationsSent += batch.length
        } catch (error) {
          errors.push(`Failed to send batch ${Math.floor(i / batchSize) + 1}: ${error}`)
        }
      }

      // Create notification records for tracking
      await this.createInvitationNotifications(invitations)

      return {
        invitationsSent,
        eligibleHosts,
        errors
      }

    } catch (error) {
      console.error('Error sending tour invitations:', error)
      return {
        invitationsSent: 0,
        eligibleHosts: [],
        errors: [error instanceof Error ? error.message : 'Unknown error occurred']
      }
    }
  }

  /**
   * Find hosts eligible for the tour based on location and preferences
   */
  private static async findEligibleHosts(tour: Tour): Promise<HostProfile[]> {
    let query = supabase
      .from('host_profiles')
      .select('*')
      .gte('max_capacity', tour.min_capacity)
      .lte('preferred_capacity', tour.max_capacity)

    // Filter by target states
    if (tour.target_states && tour.target_states.length > 0) {
      query = query.in('state', tour.target_states)
    }

    // Filter by target cities if specified
    if (tour.target_cities && tour.target_cities.length > 0) {
      query = query.in('city', tour.target_cities)
    }

    // Filter by genre preferences if host has specified them
    if (tour.genre_requirements && tour.genre_requirements.length > 0) {
      query = query.overlaps('preferred_genres', tour.genre_requirements)
    }

    // Filter by venue type preferences
    if (tour.venue_type_preferences && tour.venue_type_preferences.length > 0) {
      query = query.in('venue_type', tour.venue_type_preferences)
    }

    const { data: hosts, error } = await query

    if (error) {
      throw new Error(`Failed to fetch eligible hosts: ${error.message}`)
    }

    // Additional filtering for hosts who are active and responsive
    return (hosts || []).filter(host => 
      host.response_rate >= 0.7 && // 70% response rate minimum
      host.response_time_hours <= 48 && // Responds within 48 hours
      host.total_shows_hosted >= 0 // Include new hosts too
    )
  }

  /**
   * Generate personalized invitation message for each host
   */
  private static generateInvitationMessage(
    tour: Tour,
    artist: any,
    host: HostProfile
  ): string {
    const tourDuration = this.calculateTourDuration(tour.start_date, tour.end_date)
    const venueTypeDisplay = host.venue_type.replace('_', ' ').toLowerCase()

    return `Hi ${host.display_name}!

${artist.stage_name} is planning an exciting ${tourDuration}-day tour called "${tour.title}" and would love to perform at your ${venueTypeDisplay}!

Tour Details:
📅 ${new Date(tour.start_date).toLocaleDateString()} - ${new Date(tour.end_date).toLocaleDateString()}
🎵 Genre: ${artist.genre_primary || 'Various'}
👥 Expected Audience: ${tour.min_capacity}-${tour.max_capacity} people
💰 Base Guarantee: $${tour.base_guarantee}
🎫 Suggested Ticket Price: $${tour.ticket_price_suggested}

About ${artist.stage_name}:
${artist.bio ? artist.bio.substring(0, 200) + '...' : 'An amazing artist ready to bring great music to your venue!'}

Your ${venueTypeDisplay} in ${host.city}, ${host.state} would be perfect for this tour! We'd love to work with you to create an unforgettable evening of music.

What's included:
✅ Professional sound setup assistance
✅ ${tour.revenue_split_percentage}% revenue split for you
✅ Marketing support for the event
✅ Direct communication with the artist

Interested? Click below to view the full tour details and submit your available dates. Our smart scheduling system will work out the optimal tour route and let you know if you're selected!

Looking forward to potentially hosting ${artist.stage_name} at your venue!

Best regards,
The TrueFans JAM Team`
  }

  /**
   * Calculate tour duration in days
   */
  private static calculateTourDuration(startDate: string, endDate: string): number {
    const start = new Date(startDate)
    const end = new Date(endDate)
    const diffTime = Math.abs(end.getTime() - start.getTime())
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  /**
   * Send a batch of invitations
   */
  private static async sendInvitationBatch(invitations: FanInvitation[]): Promise<void> {
    // In a real implementation, this would integrate with:
    // - Email service (SendGrid, Mailgun, etc.)
    // - Push notification service
    // - In-app notification system
    
    // For now, we'll create database records to track invitations
    const invitationRecords = invitations.map(invitation => ({
      tour_id: invitation.tourId,
      host_id: invitation.hostId,
      message: invitation.invitationMessage,
      status: 'sent',
      sent_at: new Date().toISOString()
    }))

    // This would be a custom table for tracking invitations
    // For demo purposes, we'll log the invitations
    console.log(`Sending ${invitations.length} tour invitations:`, invitationRecords)

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 100))
  }

  /**
   * Create notification records for tracking
   */
  private static async createInvitationNotifications(invitations: FanInvitation[]): Promise<void> {
    // Create notification records in the database
    // This would integrate with your notification system
    
    const notifications = invitations.map(invitation => ({
      recipient_id: invitation.hostId,
      type: 'tour_invitation',
      title: `New Tour Invitation: ${invitation.tourDetails.title}`,
      message: `${invitation.artistInfo.stageName} wants to perform at your venue!`,
      data: {
        tour_id: invitation.tourId,
        artist_name: invitation.artistInfo.stageName
      },
      created_at: new Date().toISOString()
    }))

    console.log(`Created ${notifications.length} invitation notifications`)
  }

  /**
   * Process host responses to tour invitations
   */
  static async processHostResponse(
    tourId: string,
    hostId: string,
    response: {
      interested: boolean
      availableDates: string[]
      proposedCapacity: number
      specialRequirements?: string
      message?: string
    }
  ): Promise<void> {
    try {
      if (response.interested) {
        // Create a show application
        const { error } = await supabase
          .from('show_applications')
          .insert({
            tour_id: tourId,
            host_id: hostId,
            proposed_date: response.availableDates[0], // Primary date
            expected_attendance: response.proposedCapacity,
            message: response.message || '',
            special_requirements: response.specialRequirements || '',
            status: 'pending'
          })

        if (error) {
          throw new Error(`Failed to create show application: ${error.message}`)
        }

        // Update tour application count
        await supabase
          .from('tours')
          .update({ 
            total_applications: supabase.sql`total_applications + 1`
          })
          .eq('id', tourId)

      } else {
        // Log the decline for analytics
        console.log(`Host ${hostId} declined tour ${tourId}`)
      }

    } catch (error) {
      console.error('Error processing host response:', error)
      throw error
    }
  }

  /**
   * Get invitation statistics for a tour
   */
  static async getInvitationStats(tourId: string): Promise<{
    totalInvited: number
    totalResponses: number
    totalInterested: number
    responseRate: number
  }> {
    try {
      // This would query your invitation tracking tables
      // For demo purposes, return mock data
      return {
        totalInvited: 150,
        totalResponses: 45,
        totalInterested: 32,
        responseRate: 0.3
      }
    } catch (error) {
      console.error('Error fetching invitation stats:', error)
      return {
        totalInvited: 0,
        totalResponses: 0,
        totalInterested: 0,
        responseRate: 0
      }
    }
  }
}

/**
 * Main function to initiate the tour invitation process
 */
export async function initiateTourInvitations(tourId: string): Promise<void> {
  try {
    // Fetch tour details
    const { data: tour, error } = await supabase
      .from('tours')
      .select('*')
      .eq('id', tourId)
      .single()

    if (error || !tour) {
      throw new Error('Tour not found')
    }

    // Send invitations
    const result = await FanInvitationService.sendTourInvitations(tour)
    
    console.log(`Tour invitations sent: ${result.invitationsSent} to ${result.eligibleHosts.length} hosts`)
    
    if (result.errors.length > 0) {
      console.warn('Invitation errors:', result.errors)
    }

    // Update tour status
    await supabase
      .from('tours')
      .update({ status: 'seeking_hosts' })
      .eq('id', tourId)

  } catch (error) {
    console.error('Error initiating tour invitations:', error)
    throw error
  }
}
