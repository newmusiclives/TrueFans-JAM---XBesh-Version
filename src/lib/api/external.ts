import { supabase } from '../supabase'

// Spotify API Integration
export class SpotifyAPI {
  private static readonly BASE_URL = 'https://api.spotify.com/v1'
  
  static async getArtistProfile(artistId: string, accessToken: string) {
    try {
      const response = await fetch(`${this.BASE_URL}/artists/${artistId}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      
      if (!response.ok) {
        throw new Error(`Spotify API error: ${response.status}`)
      }
      
      const data = await response.json()
      
      // Log API call
      await this.logAPICall('spotify', `/artists/${artistId}`, 'GET', response.status)
      
      return data
    } catch (error) {
      await this.logAPICall('spotify', `/artists/${artistId}`, 'GET', 0, error.message)
      throw error
    }
  }
  
  static async createPlaylist(userId: string, name: string, description: string, accessToken: string) {
    try {
      const response = await fetch(`${this.BASE_URL}/users/${userId}/playlists`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          description,
          public: true
        })
      })
      
      if (!response.ok) {
        throw new Error(`Spotify API error: ${response.status}`)
      }
      
      const data = await response.json()
      
      await this.logAPICall('spotify', `/users/${userId}/playlists`, 'POST', response.status)
      
      return data
    } catch (error) {
      await this.logAPICall('spotify', `/users/${userId}/playlists`, 'POST', 0, error.message)
      throw error
    }
  }
  
  private static async logAPICall(
    service: string, 
    endpoint: string, 
    method: string, 
    status: number, 
    error?: string
  ) {
    const { data: { user } } = await supabase.auth.getUser()
    
    await supabase.from('api_integration_logs').insert({
      service_name: service,
      endpoint,
      request_type: method,
      response_status: status,
      error_message: error,
      user_id: user?.id,
      response_time_ms: 0 // Would be calculated in real implementation
    })
  }
}

// BandsInTown API Integration
export class BandsInTownAPI {
  private static readonly BASE_URL = 'https://rest.bandsintown.com'
  private static readonly APP_ID = import.meta.env.VITE_BANDSINTOWN_APP_ID
  
  static async getArtistEvents(artistName: string) {
    try {
      const response = await fetch(
        `${this.BASE_URL}/artists/${encodeURIComponent(artistName)}/events?app_id=${this.APP_ID}`
      )
      
      if (!response.ok) {
        throw new Error(`BandsInTown API error: ${response.status}`)
      }
      
      const data = await response.json()
      
      await this.logAPICall('bandsintown', `/artists/${artistName}/events`, 'GET', response.status)
      
      return data
    } catch (error) {
      await this.logAPICall('bandsintown', `/artists/${artistName}/events`, 'GET', 0, error.message)
      throw error
    }
  }
  
  static async createEvent(eventData: any) {
    try {
      const response = await fetch(`${this.BASE_URL}/events?app_id=${this.APP_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData)
      })
      
      if (!response.ok) {
        throw new Error(`BandsInTown API error: ${response.status}`)
      }
      
      const data = await response.json()
      
      await this.logAPICall('bandsintown', '/events', 'POST', response.status)
      
      return data
    } catch (error) {
      await this.logAPICall('bandsintown', '/events', 'POST', 0, error.message)
      throw error
    }
  }
  
  private static async logAPICall(
    service: string, 
    endpoint: string, 
    method: string, 
    status: number, 
    error?: string
  ) {
    const { data: { user } } = await supabase.auth.getUser()
    
    await supabase.from('api_integration_logs').insert({
      service_name: service,
      endpoint,
      request_type: method,
      response_status: status,
      error_message: error,
      user_id: user?.id,
      response_time_ms: 0
    })
  }
}

// Manifest Financial API Integration
export class ManifestAPI {
  private static readonly BASE_URL = 'https://api.manifest.com/v1'
  private static readonly API_KEY = import.meta.env.VITE_MANIFEST_API_KEY
  
  static async createCustomer(customerData: {
    email: string
    name: string
    phone?: string
  }) {
    try {
      const response = await fetch(`${this.BASE_URL}/customers`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(customerData)
      })
      
      if (!response.ok) {
        throw new Error(`Manifest API error: ${response.status}`)
      }
      
      const data = await response.json()
      
      await this.logAPICall('manifest', '/customers', 'POST', response.status)
      
      return data
    } catch (error) {
      await this.logAPICall('manifest', '/customers', 'POST', 0, error.message)
      throw error
    }
  }
  
  static async createPaymentLink(paymentData: {
    amount: number
    currency: string
    description: string
    customer_id: string
  }) {
    try {
      const response = await fetch(`${this.BASE_URL}/payment-links`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(paymentData)
      })
      
      if (!response.ok) {
        throw new Error(`Manifest API error: ${response.status}`)
      }
      
      const data = await response.json()
      
      await this.logAPICall('manifest', '/payment-links', 'POST', response.status)
      
      return data
    } catch (error) {
      await this.logAPICall('manifest', '/payment-links', 'POST', 0, error.message)
      throw error
    }
  }
  
  private static async logAPICall(
    service: string, 
    endpoint: string, 
    method: string, 
    status: number, 
    error?: string
  ) {
    const { data: { user } } = await supabase.auth.getUser()
    
    await supabase.from('api_integration_logs').insert({
      service_name: service,
      endpoint,
      request_type: method,
      response_status: status,
      error_message: error,
      user_id: user?.id,
      response_time_ms: 0
    })
  }
}

// Google Maps Geocoding API
export class GoogleMapsAPI {
  private static readonly BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json'
  private static readonly API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  
  static async geocodeAddress(address: string) {
    try {
      const response = await fetch(
        `${this.BASE_URL}?address=${encodeURIComponent(address)}&key=${this.API_KEY}`
      )
      
      if (!response.ok) {
        throw new Error(`Google Maps API error: ${response.status}`)
      }
      
      const data = await response.json()
      
      await this.logAPICall('google_maps', '/geocode', 'GET', response.status)
      
      if (data.status === 'OK' && data.results.length > 0) {
        const location = data.results[0].geometry.location
        return {
          latitude: location.lat,
          longitude: location.lng,
          formatted_address: data.results[0].formatted_address
        }
      }
      
      throw new Error('No geocoding results found')
    } catch (error) {
      await this.logAPICall('google_maps', '/geocode', 'GET', 0, error.message)
      throw error
    }
  }
  
  private static async logAPICall(
    service: string, 
    endpoint: string, 
    method: string, 
    status: number, 
    error?: string
  ) {
    const { data: { user } } = await supabase.auth.getUser()
    
    await supabase.from('api_integration_logs').insert({
      service_name: service,
      endpoint,
      request_type: method,
      response_status: status,
      error_message: error,
      user_id: user?.id,
      response_time_ms: 0
    })
  }
}
