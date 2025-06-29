export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          user_type: 'artist' | 'host' | 'admin'
          full_name: string | null
          phone_number: string | null
          profile_image_url: string | null
          email_verified: boolean
          phone_verified: boolean
          onboarding_completed: boolean
          manifest_customer_id: string | null
          stripe_customer_id: string | null
          payout_preferences: Record<string, any>
          last_active_at: string
          total_tours_created: number
          total_revenue_earned: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          user_type: 'artist' | 'host' | 'admin'
          full_name?: string | null
          phone_number?: string | null
          profile_image_url?: string | null
          email_verified?: boolean
          phone_verified?: boolean
          onboarding_completed?: boolean
          manifest_customer_id?: string | null
          stripe_customer_id?: string | null
          payout_preferences?: Record<string, any>
          last_active_at?: string
          total_tours_created?: number
          total_revenue_earned?: number
        }
        Update: {
          email?: string
          user_type?: 'artist' | 'host' | 'admin'
          full_name?: string | null
          phone_number?: string | null
          profile_image_url?: string | null
          email_verified?: boolean
          phone_verified?: boolean
          onboarding_completed?: boolean
          manifest_customer_id?: string | null
          stripe_customer_id?: string | null
          payout_preferences?: Record<string, any>
          last_active_at?: string
          total_tours_created?: number
          total_revenue_earned?: number
        }
      }
      artist_profiles: {
        Row: {
          id: string
          user_id: string
          stage_name: string
          bio: string | null
          genre_primary: string | null
          genre_tags: string[]
          spotify_artist_id: string | null
          spotify_access_token: string | null
          spotify_refresh_token: string | null
          spotify_token_expires_at: string | null
          bandsintown_artist_id: string | null
          experience_level: 'beginner' | 'intermediate' | 'experienced' | 'professional'
          average_performance_rating: number
          total_shows_performed: number
          monthly_listeners: number
          profile_image_url: string | null
          banner_image_url: string | null
          sample_tracks: Record<string, any>[]
          social_media_links: Record<string, any>
          technical_requirements: Record<string, any>
          created_at: string
          updated_at: string
        }
        Insert: {
          user_id: string
          stage_name: string
          bio?: string | null
          genre_primary?: string | null
          genre_tags?: string[]
          spotify_artist_id?: string | null
          spotify_access_token?: string | null
          spotify_refresh_token?: string | null
          spotify_token_expires_at?: string | null
          bandsintown_artist_id?: string | null
          experience_level?: 'beginner' | 'intermediate' | 'experienced' | 'professional'
          average_performance_rating?: number
          total_shows_performed?: number
          monthly_listeners?: number
          profile_image_url?: string | null
          banner_image_url?: string | null
          sample_tracks?: Record<string, any>[]
          social_media_links?: Record<string, any>
          technical_requirements?: Record<string, any>
        }
        Update: {
          stage_name?: string
          bio?: string | null
          genre_primary?: string | null
          genre_tags?: string[]
          spotify_artist_id?: string | null
          spotify_access_token?: string | null
          spotify_refresh_token?: string | null
          spotify_token_expires_at?: string | null
          bandsintown_artist_id?: string | null
          experience_level?: 'beginner' | 'intermediate' | 'experienced' | 'professional'
          average_performance_rating?: number
          total_shows_performed?: number
          monthly_listeners?: number
          profile_image_url?: string | null
          banner_image_url?: string | null
          sample_tracks?: Record<string, any>[]
          social_media_links?: Record<string, any>
          technical_requirements?: Record<string, any>
        }
      }
      host_profiles: {
        Row: {
          id: string
          user_id: string
          display_name: string
          bio: string | null
          address_line1: string
          address_line2: string | null
          city: string
          state: string
          zip_code: string
          country: string
          coordinates: any | null
          location_accuracy: 'exact' | 'approximate' | 'city_only'
          venue_name: string | null
          venue_type: 'living_room' | 'backyard' | 'basement' | 'garage' | 'studio' | 'barn' | 'rooftop' | 'patio' | 'music_room' | 'other'
          venue_description: string | null
          max_capacity: number
          preferred_capacity: number
          venue_amenities: string[]
          venue_images: Record<string, any>[]
          technical_specs: Record<string, any>
          preferred_genres: string[]
          hosting_frequency: 'weekly' | 'monthly' | 'quarterly' | 'occasionally'
          max_volume_level: number
          house_rules: Record<string, any>
          availability_calendar: Record<string, any>
          total_shows_hosted: number
          average_host_rating: number
          response_rate: number
          response_time_hours: number
          created_at: string
          updated_at: string
        }
        Insert: {
          user_id: string
          display_name: string
          bio?: string | null
          address_line1: string
          address_line2?: string | null
          city: string
          state: string
          zip_code: string
          country?: string
          coordinates?: any | null
          location_accuracy?: 'exact' | 'approximate' | 'city_only'
          venue_name?: string | null
          venue_type?: 'living_room' | 'backyard' | 'basement' | 'garage' | 'studio' | 'barn' | 'rooftop' | 'patio' | 'music_room' | 'other'
          venue_description?: string | null
          max_capacity?: number
          preferred_capacity?: number
          venue_amenities?: string[]
          venue_images?: Record<string, any>[]
          technical_specs?: Record<string, any>
          preferred_genres?: string[]
          hosting_frequency?: 'weekly' | 'monthly' | 'quarterly' | 'occasionally'
          max_volume_level?: number
          house_rules?: Record<string, any>
          availability_calendar?: Record<string, any>
          total_shows_hosted?: number
          average_host_rating?: number
          response_rate?: number
          response_time_hours?: number
        }
        Update: {
          display_name?: string
          bio?: string | null
          address_line1?: string
          address_line2?: string | null
          city?: string
          state?: string
          zip_code?: string
          country?: string
          coordinates?: any | null
          location_accuracy?: 'exact' | 'approximate' | 'city_only'
          venue_name?: string | null
          venue_type?: 'living_room' | 'backyard' | 'basement' | 'garage' | 'studio' | 'barn' | 'rooftop' | 'patio' | 'music_room' | 'other'
          venue_description?: string | null
          max_capacity?: number
          preferred_capacity?: number
          venue_amenities?: string[]
          venue_images?: Record<string, any>[]
          technical_specs?: Record<string, any>
          preferred_genres?: string[]
          hosting_frequency?: 'weekly' | 'monthly' | 'quarterly' | 'occasionally'
          max_volume_level?: number
          house_rules?: Record<string, any>
          availability_calendar?: Record<string, any>
          total_shows_hosted?: number
          average_host_rating?: number
          response_rate?: number
          response_time_hours?: number
        }
      }
      tours: {
        Row: {
          id: string
          artist_id: string
          title: string
          description: string | null
          start_date: string
          end_date: string
          geographic_center: any | null
          max_radius_miles: number
          target_cities: string[]
          target_states: string[]
          min_capacity: number
          max_capacity: number
          expected_shows: number
          max_daily_miles: number
          preferred_show_duration_minutes: number
          base_guarantee: number
          revenue_split_percentage: number
          ticket_price_suggested: number
          merchandise_split_percentage: number
          spotify_playlist_id: string | null
          bandsintown_tour_id: string | null
          manifest_payment_link: string | null
          status: 'planning' | 'seeking_hosts' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled'
          visibility: 'private' | 'public' | 'unlisted'
          genre_requirements: string[]
          venue_type_preferences: string[]
          special_requirements: string | null
          total_applications: number
          confirmed_shows: number
          total_projected_revenue: number
          total_actual_revenue: number
          created_at: string
          updated_at: string
        }
        Insert: {
          artist_id: string
          title: string
          description?: string | null
          start_date: string
          end_date: string
          geographic_center?: any | null
          max_radius_miles?: number
          target_cities?: string[]
          target_states?: string[]
          min_capacity?: number
          max_capacity?: number
          expected_shows?: number
          max_daily_miles?: number
          preferred_show_duration_minutes?: number
          base_guarantee?: number
          revenue_split_percentage?: number
          ticket_price_suggested?: number
          merchandise_split_percentage?: number
          spotify_playlist_id?: string | null
          bandsintown_tour_id?: string | null
          manifest_payment_link?: string | null
          status?: 'planning' | 'seeking_hosts' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled'
          visibility?: 'private' | 'public' | 'unlisted'
          genre_requirements?: string[]
          venue_type_preferences?: string[]
          special_requirements?: string | null
          total_applications?: number
          confirmed_shows?: number
          total_projected_revenue?: number
          total_actual_revenue?: number
        }
        Update: {
          title?: string
          description?: string | null
          start_date?: string
          end_date?: string
          geographic_center?: any | null
          max_radius_miles?: number
          target_cities?: string[]
          target_states?: string[]
          min_capacity?: number
          max_capacity?: number
          expected_shows?: number
          max_daily_miles?: number
          preferred_show_duration_minutes?: number
          base_guarantee?: number
          revenue_split_percentage?: number
          ticket_price_suggested?: number
          merchandise_split_percentage?: number
          spotify_playlist_id?: string | null
          bandsintown_tour_id?: string | null
          manifest_payment_link?: string | null
          status?: 'planning' | 'seeking_hosts' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled'
          visibility?: 'private' | 'public' | 'unlisted'
          genre_requirements?: string[]
          venue_type_preferences?: string[]
          special_requirements?: string | null
          total_applications?: number
          confirmed_shows?: number
          total_projected_revenue?: number
          total_actual_revenue?: number
        }
      }
      show_applications: {
        Row: {
          id: string
          tour_id: string
          host_id: string
          proposed_date: string
          proposed_time: string
          message: string | null
          expected_attendance: number | null
          ticket_price: number | null
          special_requirements: string | null
          catering_offered: boolean
          accommodation_offered: boolean
          status: 'pending' | 'accepted' | 'declined' | 'cancelled' | 'completed'
          artist_response: string | null
          host_response: string | null
          decline_reason: string | null
          setup_time: string
          show_start_time: string
          show_end_time: string
          breakdown_time: string
          load_in_notes: string | null
          parking_details: string | null
          contact_day_of_show: string | null
          guaranteed_amount: number
          revenue_split_agreed: number
          merchandise_allowed: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          tour_id: string
          host_id: string
          proposed_date: string
          proposed_time?: string
          message?: string | null
          expected_attendance?: number | null
          ticket_price?: number | null
          special_requirements?: string | null
          catering_offered?: boolean
          accommodation_offered?: boolean
          status?: 'pending' | 'accepted' | 'declined' | 'cancelled' | 'completed'
          artist_response?: string | null
          host_response?: string | null
          decline_reason?: string | null
          setup_time?: string
          show_start_time?: string
          show_end_time?: string
          breakdown_time?: string
          load_in_notes?: string | null
          parking_details?: string | null
          contact_day_of_show?: string | null
          guaranteed_amount?: number
          revenue_split_agreed?: number
          merchandise_allowed?: boolean
        }
        Update: {
          proposed_date?: string
          proposed_time?: string
          message?: string | null
          expected_attendance?: number | null
          ticket_price?: number | null
          special_requirements?: string | null
          catering_offered?: boolean
          accommodation_offered?: boolean
          status?: 'pending' | 'accepted' | 'declined' | 'cancelled' | 'completed'
          artist_response?: string | null
          host_response?: string | null
          decline_reason?: string | null
          setup_time?: string
          show_start_time?: string
          show_end_time?: string
          breakdown_time?: string
          load_in_notes?: string | null
          parking_details?: string | null
          contact_day_of_show?: string | null
          guaranteed_amount?: number
          revenue_split_agreed?: number
          merchandise_allowed?: boolean
        }
      }
      financial_transactions: {
        Row: {
          id: string
          show_application_id: string
          tour_id: string
          payer_profile_id: string | null
          payee_profile_id: string | null
          transaction_type: 'show_payment' | 'platform_fee' | 'artist_payout' | 'host_tip' | 'refund' | 'merchandise_sale'
          amount_cents: number
          currency: string
          description: string | null
          manifest_transaction_id: string | null
          stripe_payment_intent_id: string | null
          stripe_transfer_id: string | null
          status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled' | 'refunded'
          processed_at: string | null
          failed_reason: string | null
          gross_amount_cents: number | null
          artist_amount_cents: number | null
          platform_fee_cents: number | null
          host_tip_cents: number
          processing_fee_cents: number
          metadata: Record<string, any>
          created_at: string
        }
        Insert: {
          show_application_id: string
          tour_id: string
          payer_profile_id?: string | null
          payee_profile_id?: string | null
          transaction_type: 'show_payment' | 'platform_fee' | 'artist_payout' | 'host_tip' | 'refund' | 'merchandise_sale'
          amount_cents: number
          currency?: string
          description?: string | null
          manifest_transaction_id?: string | null
          stripe_payment_intent_id?: string | null
          stripe_transfer_id?: string | null
          status?: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled' | 'refunded'
          processed_at?: string | null
          failed_reason?: string | null
          gross_amount_cents?: number | null
          artist_amount_cents?: number | null
          platform_fee_cents?: number | null
          host_tip_cents?: number
          processing_fee_cents?: number
          metadata?: Record<string, any>
        }
        Update: {
          payer_profile_id?: string | null
          payee_profile_id?: string | null
          transaction_type?: 'show_payment' | 'platform_fee' | 'artist_payout' | 'host_tip' | 'refund' | 'merchandise_sale'
          amount_cents?: number
          currency?: string
          description?: string | null
          manifest_transaction_id?: string | null
          stripe_payment_intent_id?: string | null
          stripe_transfer_id?: string | null
          status?: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled' | 'refunded'
          processed_at?: string | null
          failed_reason?: string | null
          gross_amount_cents?: number | null
          artist_amount_cents?: number | null
          platform_fee_cents?: number | null
          host_tip_cents?: number
          processing_fee_cents?: number
          metadata?: Record<string, any>
        }
      }
    }
  }
}
