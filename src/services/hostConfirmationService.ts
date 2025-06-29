import { supabase } from '../lib/supabase'
import { Database } from '../types/database'

type Tour = Database['public']['Tables']['tours']['Row']
type ShowApplication = Database['public']['Tables']['show_applications']['Row']
type HostProfile = Database['public']['Tables']['host_profiles']['Row']

interface ConfirmationDetails {
  tourId: string
  showApplicationId: string
  hostId: string
  artistName: string
  tourTitle: string
  showDate: string
  showTime: string
  guaranteedAmount: number
  expectedAttendance: number
  setupRequirements: string
  contactInfo: string
}

export class HostConfirmationService {
  /**
   * Send confirmation requests to all accepted hosts for a tour
   */
  static async sendTourConfirmations(tourId: string): Promise<{
    confirmationsSent: number
    errors: string[]
  }> {
    try {
      // Get tour details
      const { data: tour, error: tourError } = await supabase
        .from('tours')
        .select(`
          *,
          artist_profiles!inner(
            stage_name,
            profile_image_url,
            bio
          )
        `)
        .eq('id', tourId)
        .single()

      if (tourError || !tour) {
        throw new Error('Tour not found')
      }

      // Get all accepted show applications for this tour
      const { data: applications, error: appsError } = await supabase
        .from('show_applications')
        .select(`
          *,
          host_profiles!inner(
            display_name,
            city,
            state,
            venue_type,
            venue_name
          )
        `)
        .eq('tour_id', tourId)
        .eq('status', 'accepted')

      if (appsError) {
        throw new Error(`Failed to fetch show applications: ${appsError.message}`)
      }

      if (!applications || applications.length === 0) {
        return {
          confirmationsSent: 0,
          errors: ['No accepted show applications found for this tour']
        }
      }

      // Generate confirmation details for each show
      const confirmations = applications.map(app => ({
        tourId: tour.id,
        showApplicationId: app.id,
        hostId: app.host_id,
        artistName: (tour as any).artist_profiles.stage_name,
        tourTitle: tour.title,
        showDate: app.proposed_date,
        showTime: app.proposed_time || '8:00 PM',
        guaranteedAmount: app.guaranteed_amount || tour.base_guarantee,
        expectedAttendance: app.expected_attendance || tour.min_capacity,
        setupRequirements: app.special_requirements || '',
        contactInfo: 'Contact details will be shared upon confirmation'
      }))

      // Send confirmations in batches
      const batchSize = 25
      let confirmationsSent = 0
      const errors: string[] = []

      for (let i = 0; i < confirmations.length; i += batchSize) {
        const batch = confirmations.slice(i, i + batchSize)
        
        try {
          await this.sendConfirmationBatch(batch)
          confirmationsSent += batch.length
        } catch (error) {
          errors.push(`Failed to send batch ${Math.floor(i / batchSize) + 1}: ${error}`)
        }
      }

      // Update tour status
      if (confirmationsSent > 0) {
        await supabase
          .from('tours')
          .update({ status: 'confirmed' })
          .eq('id', tourId)
      }

      return {
        confirmationsSent,
        errors
      }

    } catch (error) {
      console.error('Error sending tour confirmations:', error)
      return {
        confirmationsSent: 0,
        errors: [error instanceof Error ? error.message : 'Unknown error occurred']
      }
    }
  }

  /**
   * Send a batch of confirmation requests
   */
  private static async sendConfirmationBatch(confirmations: ConfirmationDetails[]): Promise<void> {
    // Generate confirmation messages
    const confirmationMessages = confirmations.map(confirmation => ({
      hostId: confirmation.hostId,
      subject: `🎵 Confirm Your Show: ${confirmation.artistName} - ${confirmation.tourTitle}`,
      message: this.generateConfirmationMessage(confirmation)
    }))

    // In a real implementation, this would integrate with:
    // - Email service for detailed confirmation emails
    // - SMS service for urgent notifications
    // - In-app notification system
    
    // For demo purposes, we'll create database records
    const confirmationRecords = confirmationMessages.map(msg => ({
      recipient_id: msg.hostId,
      type: 'show_confirmation',
      title: msg.subject,
      message: msg.message,
      data: {
        tour_id: confirmations[0].tourId,
        show_application_id: confirmations.find(c => c.hostId === msg.hostId)?.showApplicationId
      },
      status: 'sent',
      sent_at: new Date().toISOString()
    }))

    console.log(`Sending ${confirmations.length} show confirmations:`, confirmationRecords)

    // Simulate sending delay
    await new Promise(resolve => setTimeout(resolve, 200))

    // Update show applications status to 'confirmed'
    for (const confirmation of confirmations) {
      await supabase
        .from('show_applications')
        .update({ status: 'confirmed' })
        .eq('id', confirmation.showApplicationId)
    }
  }

  /**
   * Generate personalized confirmation message
   */
  private static generateConfirmationMessage(confirmation: ConfirmationDetails): string {
    return `🎉 Congratulations! Your venue has been selected for ${confirmation.artistName}'s tour!

SHOW CONFIRMED ✅

Tour: ${confirmation.tourTitle}
Artist: ${confirmation.artistName}
Date: ${new Date(confirmation.showDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })}
Time: ${confirmation.showTime}
Expected Attendance: ${confirmation.expectedAttendance} people
Guaranteed Payment: $${confirmation.guaranteedAmount}

NEXT STEPS:
1. ✅ Your show is officially confirmed
2. 📋 Complete the final venue preparation checklist (link below)
3. 📞 Artist will contact you 48 hours before the show
4. 🎵 Get ready for an amazing evening of music!

IMPORTANT DETAILS:
• Setup begins 2 hours before show time
• Sound check will be conducted 1 hour before
• Artist arrival time: 4:00 PM (or earlier)
• Payment will be processed within 24 hours after the show

${confirmation.setupRequirements ? `
SPECIAL REQUIREMENTS:
${confirmation.setupRequirements}
` : ''}

VENUE PREPARATION CHECKLIST:
□ Clear performance space (minimum 8x8 feet)
□ Ensure adequate lighting for performance area
□ Test electrical outlets near performance space
□ Prepare seating arrangement for expected attendance
□ Clear parking space for artist vehicle
□ Have contact person available day of show

CONTACT INFORMATION:
• Emergency contact: [Phone number will be provided]
• Artist management: [Email will be provided]
• TrueFans JAM support: support@truefansjam.com

Thank you for being part of this incredible tour! Your venue is helping create unforgettable musical experiences.

Questions? Reply to this message or contact our support team.

Rock on! 🎸
The TrueFans JAM Team

---
Need to make changes? Contact us immediately at support@truefansjam.com`
  }

  /**
   * Process host confirmation response
   */
  static async processHostConfirmation(
    showApplicationId: string,
    hostResponse: {
      confirmed: boolean
      message?: string
      alternativeDate?: string
      specialRequests?: string
    }
  ): Promise<void> {
    try {
      if (hostResponse.confirmed) {
        // Update show application to confirmed
        await supabase
          .from('show_applications')
          .update({
            status: 'confirmed',
            host_response: hostResponse.message || 'Confirmed',
            special_requirements: hostResponse.specialRequests || null
          })
          .eq('id', showApplicationId)

        // Create confirmation notification for artist
        const { data: application } = await supabase
          .from('show_applications')
          .select(`
            *,
            tours!inner(artist_id, title),
            host_profiles!inner(display_name, city, state)
          `)
          .eq('id', showApplicationId)
          .single()

        if (application) {
          // Notify artist of confirmation
          console.log(`Host confirmed show: ${(application as any).host_profiles.display_name} for ${(application as any).tours.title}`)
        }

      } else {
        // Handle declined confirmation
        await supabase
          .from('show_applications')
          .update({
            status: 'declined',
            host_response: hostResponse.message || 'Declined confirmation',
            decline_reason: hostResponse.message || 'Host declined confirmation'
          })
          .eq('id', showApplicationId)

        // Notify artist and potentially find replacement
        console.log(`Host declined confirmation for show application ${showApplicationId}`)
      }

    } catch (error) {
      console.error('Error processing host confirmation:', error)
      throw error
    }
  }

  /**
   * Get confirmation statistics for a tour
   */
  static async getConfirmationStats(tourId: string): Promise<{
    totalSent: number
    totalConfirmed: number
    totalDeclined: number
    pendingConfirmations: number
    confirmationRate: number
  }> {
    try {
      const { data: applications, error } = await supabase
        .from('show_applications')
        .select('status')
        .eq('tour_id', tourId)
        .in('status', ['confirmed', 'declined', 'accepted'])

      if (error) {
        throw new Error(`Failed to fetch confirmation stats: ${error.message}`)
      }

      const totalSent = applications?.length || 0
      const totalConfirmed = applications?.filter(app => app.status === 'confirmed').length || 0
      const totalDeclined = applications?.filter(app => app.status === 'declined').length || 0
      const pendingConfirmations = applications?.filter(app => app.status === 'accepted').length || 0

      return {
        totalSent,
        totalConfirmed,
        totalDeclined,
        pendingConfirmations,
        confirmationRate: totalSent > 0 ? totalConfirmed / totalSent : 0
      }

    } catch (error) {
      console.error('Error fetching confirmation stats:', error)
      return {
        totalSent: 0,
        totalConfirmed: 0,
        totalDeclined: 0,
        pendingConfirmations: 0,
        confirmationRate: 0
      }
    }
  }

  /**
   * Send reminder to hosts who haven't confirmed
   */
  static async sendConfirmationReminders(tourId: string): Promise<{
    remindersSent: number
    errors: string[]
  }> {
    try {
      // Get pending confirmations
      const { data: pendingApplications, error } = await supabase
        .from('show_applications')
        .select(`
          *,
          host_profiles!inner(display_name),
          tours!inner(title, artist_profiles!inner(stage_name))
        `)
        .eq('tour_id', tourId)
        .eq('status', 'accepted')

      if (error) {
        throw new Error(`Failed to fetch pending confirmations: ${error.message}`)
      }

      if (!pendingApplications || pendingApplications.length === 0) {
        return {
          remindersSent: 0,
          errors: ['No pending confirmations found']
        }
      }

      // Send reminders
      let remindersSent = 0
      const errors: string[] = []

      for (const application of pendingApplications) {
        try {
          const reminderMessage = this.generateReminderMessage(application as any)
          
          // Send reminder (in real implementation, this would be email/SMS)
          console.log(`Sending confirmation reminder to host ${(application as any).host_profiles.display_name}`)
          
          remindersSent++
        } catch (error) {
          errors.push(`Failed to send reminder for application ${application.id}: ${error}`)
        }
      }

      return {
        remindersSent,
        errors
      }

    } catch (error) {
      console.error('Error sending confirmation reminders:', error)
      return {
        remindersSent: 0,
        errors: [error instanceof Error ? error.message : 'Unknown error occurred']
      }
    }
  }

  /**
   * Generate reminder message for pending confirmations
   */
  private static generateReminderMessage(application: any): string {
    return `⏰ Confirmation Reminder: ${application.tours.artist_profiles.stage_name} Show

Hi ${application.host_profiles.display_name},

This is a friendly reminder that your show confirmation is still pending for:

🎵 ${application.tours.title}
📅 ${new Date(application.proposed_date).toLocaleDateString()}
🏠 Your venue

We're excited to finalize the details for this amazing show! Please confirm your availability as soon as possible to secure your spot on the tour.

👆 Click here to confirm your show: [Confirmation Link]

If you have any questions or concerns, please don't hesitate to reach out to our support team.

Thanks for being part of the TrueFans JAM community!

Best regards,
The TrueFans JAM Team`
  }
}

/**
 * Main function to initiate host confirmations for a tour
 */
export async function initiateHostConfirmations(tourId: string): Promise<void> {
  try {
    const result = await HostConfirmationService.sendTourConfirmations(tourId)
    
    console.log(`Host confirmations sent: ${result.confirmationsSent}`)
    
    if (result.errors.length > 0) {
      console.warn('Confirmation errors:', result.errors)
    }

  } catch (error) {
    console.error('Error initiating host confirmations:', error)
    throw error
  }
}
