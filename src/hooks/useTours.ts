import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '../lib/supabase'
import { Database } from '../types/database'
import { useAuth } from './useAuth'

type Tour = Database['public']['Tables']['tours']['Row']
type ShowApplication = Database['public']['Tables']['show_applications']['Row']

export function useTours(filters?: {
  status?: string[]
  visibility?: string
  artistId?: string
}) {
  return useQuery({
    queryKey: ['tours', filters],
    queryFn: async () => {
      let query = supabase
        .from('tours')
        .select(`
          *,
          artist_profiles!inner(
            stage_name,
            profile_image_url,
            genre_primary,
            genre_tags
          )
        `)
        .order('created_at', { ascending: false })
      
      if (filters?.status) {
        query = query.in('status', filters.status)
      }
      
      if (filters?.visibility) {
        query = query.eq('visibility', filters.visibility)
      }
      
      if (filters?.artistId) {
        query = query.eq('artist_id', filters.artistId)
      }
      
      const { data, error } = await query
      
      if (error) throw error
      return data
    }
  })
}

export function useTour(tourId: string) {
  return useQuery({
    queryKey: ['tour', tourId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('tours')
        .select(`
          *,
          artist_profiles!inner(
            stage_name,
            profile_image_url,
            genre_primary,
            genre_tags,
            bio,
            experience_level,
            social_media_links
          ),
          tour_media(*)
        `)
        .eq('id', tourId)
        .single()
      
      if (error) throw error
      return data
    },
    enabled: !!tourId
  })
}

export function useMyTours() {
  const { user } = useAuth()
  
  return useQuery({
    queryKey: ['my_tours', user?.id],
    queryFn: async () => {
      if (!user?.id) throw new Error('No user')
      
      const { data, error } = await supabase
        .from('tours')
        .select(`
          *,
          artist_profiles!inner(
            stage_name,
            profile_image_url
          )
        `)
        .eq('artist_profiles.user_id', user.id)
        .order('created_at', { ascending: false })
      
      if (error) throw error
      return data
    },
    enabled: !!user?.id
  })
}

export function useCreateTour() {
  const queryClient = useQueryClient()
  const { user } = useAuth()
  
  return useMutation({
    mutationFn: async (tourData: Database['public']['Tables']['tours']['Insert']) => {
      if (!user?.id) throw new Error('No user')
      
      // Get artist profile ID
      const { data: artistProfile, error: artistError } = await supabase
        .from('artist_profiles')
        .select('id')
        .eq('user_id', user.id)
        .single()
      
      if (artistError) throw artistError
      
      const { data, error } = await supabase
        .from('tours')
        .insert({ ...tourData, artist_id: artistProfile.id })
        .select()
        .single()
      
      if (error) throw error
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tours'] })
      queryClient.invalidateQueries({ queryKey: ['my_tours'] })
    }
  })
}

export function useUpdateTour() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async ({ 
      tourId, 
      updates 
    }: { 
      tourId: string
      updates: Database['public']['Tables']['tours']['Update'] 
    }) => {
      const { data, error } = await supabase
        .from('tours')
        .update(updates)
        .eq('id', tourId)
        .select()
        .single()
      
      if (error) throw error
      return data
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['tours'] })
      queryClient.invalidateQueries({ queryKey: ['tour', data.id] })
      queryClient.invalidateQueries({ queryKey: ['my_tours'] })
    }
  })
}

export function useDeleteTour() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (tourId: string) => {
      const { error } = await supabase
        .from('tours')
        .delete()
        .eq('id', tourId)
      
      if (error) throw error
      return tourId
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tours'] })
      queryClient.invalidateQueries({ queryKey: ['my_tours'] })
    }
  })
}

export function useShowApplications(tourId?: string, hostId?: string) {
  return useQuery({
    queryKey: ['show_applications', tourId, hostId],
    queryFn: async () => {
      let query = supabase
        .from('show_applications')
        .select(`
          *,
          tours!inner(
            title,
            artist_profiles!inner(
              stage_name,
              profile_image_url
            )
          ),
          host_profiles!inner(
            display_name,
            city,
            state,
            venue_type
          )
        `)
        .order('created_at', { ascending: false })
      
      if (tourId) {
        query = query.eq('tour_id', tourId)
      }
      
      if (hostId) {
        query = query.eq('host_id', hostId)
      }
      
      const { data, error } = await query
      
      if (error) throw error
      return data
    },
    enabled: !!(tourId || hostId)
  })
}

export function useCreateShowApplication() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (applicationData: Database['public']['Tables']['show_applications']['Insert']) => {
      const { data, error } = await supabase
        .from('show_applications')
        .insert(applicationData)
        .select()
        .single()
      
      if (error) throw error
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['show_applications'] })
      queryClient.invalidateQueries({ queryKey: ['tours'] })
    }
  })
}

export function useUpdateShowApplication() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async ({ 
      applicationId, 
      updates 
    }: { 
      applicationId: string
      updates: Database['public']['Tables']['show_applications']['Update'] 
    }) => {
      const { data, error } = await supabase
        .from('show_applications')
        .update(updates)
        .eq('id', applicationId)
        .select()
        .single()
      
      if (error) throw error
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['show_applications'] })
      queryClient.invalidateQueries({ queryKey: ['tours'] })
    }
  })
}
