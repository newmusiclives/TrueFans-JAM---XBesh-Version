import { create } from 'zustand'
import { supabase } from '../lib/supabase'
import type { User, Session } from '@supabase/supabase-js'

interface Profile {
  id: string
  email: string
  user_type: 'artist' | 'host' | 'admin'
  display_name: string
  phone_number?: string
  profile_image_url?: string
  email_verified: boolean
  phone_verified: boolean
  onboarding_completed: boolean
  created_at: string
  updated_at: string
  last_active_at?: string
  total_tours_created: number
  total_revenue_earned: number
}

interface AuthState {
  user: User | null
  session: Session | null
  profile: Profile | null
  loading: boolean
  error: string | null
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, metadata?: any) => Promise<void>
  signOut: () => Promise<void>
  updateProfile: (updates: Partial<Profile>) => Promise<void>
  fetchProfile: () => Promise<void>
  clearError: () => void
}

// Demo profiles for testing
const DEMO_PROFILES: Record<string, Profile> = {
  'demo.artist@truefansjam.com': {
    id: '550e8400-e29b-41d4-a716-446655440001',
    email: 'demo.artist@truefansjam.com',
    user_type: 'artist',
    display_name: 'Luna Rivers',
    phone_number: '+1-555-0101',
    profile_image_url: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    email_verified: true,
    phone_verified: true,
    onboarding_completed: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    last_active_at: new Date().toISOString(),
    total_tours_created: 3,
    total_revenue_earned: 2450.00
  },
  'demo.host@truefansjam.com': {
    id: '550e8400-e29b-41d4-a716-446655440002',
    email: 'demo.host@truefansjam.com',
    user_type: 'host',
    display_name: 'Marcus Rodriguez',
    phone_number: '+1-555-0102',
    profile_image_url: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    email_verified: true,
    phone_verified: true,
    onboarding_completed: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    last_active_at: new Date().toISOString(),
    total_tours_created: 0,
    total_revenue_earned: 0
  },
  'demo.admin@truefansjam.com': {
    id: '550e8400-e29b-41d4-a716-446655440003',
    email: 'demo.admin@truefansjam.com',
    user_type: 'admin',
    display_name: 'Sarah Chen',
    phone_number: '+1-555-0103',
    profile_image_url: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    email_verified: true,
    phone_verified: true,
    onboarding_completed: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    last_active_at: new Date().toISOString(),
    total_tours_created: 0,
    total_revenue_earned: 0
  }
}

const isDemoAccount = (email: string): boolean => {
  return email.startsWith('demo.') && email.endsWith('@truefansjam.com')
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  session: null,
  profile: null,
  loading: false,
  error: null,

  signIn: async (email: string, password: string) => {
    set({ loading: true, error: null })
    
    try {
      // Check if this is a demo account
      if (isDemoAccount(email) && password === 'DemoPass123!') {
        const demoProfile = DEMO_PROFILES[email]
        if (demoProfile) {
          // Create a mock user object for demo
          const mockUser: User = {
            id: demoProfile.id,
            email: demoProfile.email,
            email_confirmed_at: new Date().toISOString(),
            phone: demoProfile.phone_number || '',
            created_at: demoProfile.created_at,
            updated_at: demoProfile.updated_at,
            last_sign_in_at: new Date().toISOString(),
            app_metadata: {},
            user_metadata: { user_type: demoProfile.user_type },
            aud: 'authenticated',
            role: 'authenticated'
          }

          const mockSession: Session = {
            access_token: 'demo-access-token',
            refresh_token: 'demo-refresh-token',
            expires_in: 3600,
            expires_at: Math.floor(Date.now() / 1000) + 3600,
            token_type: 'bearer',
            user: mockUser
          }

          set({ 
            user: mockUser, 
            session: mockSession, 
            profile: demoProfile, 
            loading: false 
          })
          return
        }
      }

      // Regular authentication for non-demo accounts
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) throw error

      if (data.user) {
        await get().fetchProfile()
      }

      set({ user: data.user, session: data.session, loading: false })
    } catch (error: any) {
      set({ error: error.message, loading: false })
      throw error
    }
  },

  signUp: async (email: string, password: string, metadata = {}) => {
    set({ loading: true, error: null })
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: metadata
        }
      })

      if (error) throw error

      set({ user: data.user, session: data.session, loading: false })
    } catch (error: any) {
      set({ error: error.message, loading: false })
      throw error
    }
  },

  signOut: async () => {
    set({ loading: true })
    
    try {
      // Check if this is a demo session
      const { user } = get()
      if (user && isDemoAccount(user.email || '')) {
        // Just clear the demo session
        set({ user: null, session: null, profile: null, loading: false })
        return
      }

      // Regular sign out for non-demo accounts
      const { error } = await supabase.auth.signOut()
      if (error) throw error

      set({ user: null, session: null, profile: null, loading: false })
    } catch (error: any) {
      set({ error: error.message, loading: false })
      throw error
    }
  },

  updateProfile: async (updates: Partial<Profile>) => {
    set({ loading: true, error: null })
    
    try {
      const { profile } = get()
      if (!profile) throw new Error('No profile found')

      // For demo accounts, just update the local state
      if (isDemoAccount(profile.email)) {
        const updatedProfile = { ...profile, ...updates, updated_at: new Date().toISOString() }
        set({ profile: updatedProfile, loading: false })
        return
      }

      // Regular profile update for non-demo accounts
      const { data, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', profile.id)
        .select()
        .single()

      if (error) throw error

      set({ profile: data, loading: false })
    } catch (error: any) {
      set({ error: error.message, loading: false })
      throw error
    }
  },

  fetchProfile: async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (session?.user) {
        // Check if this is a demo account
        if (isDemoAccount(session.user.email || '')) {
          const demoProfile = DEMO_PROFILES[session.user.email || '']
          if (demoProfile) {
            set({ user: session.user, session, profile: demoProfile })
            return
          }
        }

        // Regular profile fetch for non-demo accounts
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single()

        if (error && error.code !== 'PGRST116') {
          console.error('Error fetching profile:', error)
        }

        set({ user: session.user, session, profile })
      } else {
        set({ user: null, session: null, profile: null })
      }
    } catch (error) {
      console.error('Error in fetchProfile:', error)
      set({ user: null, session: null, profile: null })
    }
  },

  clearError: () => set({ error: null })
}))

// Listen for auth changes
supabase.auth.onAuthStateChange(async (event, session) => {
  const { fetchProfile } = useAuthStore.getState()
  
  if (event === 'SIGNED_IN' && session?.user) {
    await fetchProfile()
  } else if (event === 'SIGNED_OUT') {
    useAuthStore.setState({ user: null, session: null, profile: null })
  }
})
