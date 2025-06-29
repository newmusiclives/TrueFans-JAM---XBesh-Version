import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '../lib/supabase'
import { Database } from '../types/database'
import { useAuth } from './useAuth'

type Profile = Database['public']['Tables']['profiles']['Row']
type ArtistProfile = Database['public']['Tables']['artist_profiles']['Row']
type HostProfile = Database['public']['Tables']['host_profiles']['Row']

export function useProfile() {
  const { user } = useAuth()
  
  return useQuery({
    queryKey: ['profile', user?.id],
    queryFn: async () => {
      if (!user?.id) throw new Error('No user')
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()
      
      if (error) throw error
      return data as Profile
    },
    enabled: !!user?.id
  })
}

export function useArtistProfile() {
  const { user } = useAuth()
  
  return useQuery({
    queryKey: ['artist_profile', user?.id],
    queryFn: async () => {
      if (!user?.id) throw new Error('No user')
      
      const { data, error } = await supabase
        .from('artist_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single()
      
      if (error && error.code !== 'PGRST116') throw error
      return data as ArtistProfile | null
    },
    enabled: !!user?.id
  })
}

export function useHostProfile() {
  const { user } = useAuth()
  
  return useQuery({
    queryKey: ['host_profile', user?.id],
    queryFn: async () => {
      if (!user?.id) throw new Error('No user')
      
      const { data, error } = await supabase
        .from('host_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single()
      
      if (error && error.code !== 'PGRST116') throw error
      return data as HostProfile | null
    },
    enabled: !!user?.id
  })
}

export function useUpdateProfile() {
  const queryClient = useQueryClient()
  const { user } = useAuth()
  
  return useMutation({
    mutationFn: async (updates: Partial<Profile>) => {
      if (!user?.id) throw new Error('No user')
      
      const { data, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', user.id)
        .select()
        .single()
      
      if (error) throw error
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile', user?.id] })
    }
  })
}

export function useCreateArtistProfile() {
  const queryClient = useQueryClient()
  const { user } = useAuth()
  
  return useMutation({
    mutationFn: async (profileData: Database['public']['Tables']['artist_profiles']['Insert']) => {
      if (!user?.id) throw new Error('No user')
      
      const { data, error } = await supabase
        .from('artist_profiles')
        .insert({ ...profileData, user_id: user.id })
        .select()
        .single()
      
      if (error) throw error
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['artist_profile', user?.id] })
    }
  })
}

export function useCreateHostProfile() {
  const queryClient = useQueryClient()
  const { user } = useAuth()
  
  return useMutation({
    mutationFn: async (profileData: Database['public']['Tables']['host_profiles']['Insert']) => {
      if (!user?.id) throw new Error('No user')
      
      const { data, error } = await supabase
        .from('host_profiles')
        .insert({ ...profileData, user_id: user.id })
        .select()
        .single()
      
      if (error) throw error
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['host_profile', user?.id] })
    }
  })
}

export function useUpdateArtistProfile() {
  const queryClient = useQueryClient()
  const { user } = useAuth()
  
  return useMutation({
    mutationFn: async (updates: Database['public']['Tables']['artist_profiles']['Update']) => {
      if (!user?.id) throw new Error('No user')
      
      const { data, error } = await supabase
        .from('artist_profiles')
        .update(updates)
        .eq('user_id', user.id)
        .select()
        .single()
      
      if (error) throw error
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['artist_profile', user?.id] })
    }
  })
}

export function useUpdateHostProfile() {
  const queryClient = useQueryClient()
  const { user } = useAuth()
  
  return useMutation({
    mutationFn: async (updates: Database['public']['Tables']['host_profiles']['Update']) => {
      if (!user?.id) throw new Error('No user')
      
      const { data, error } = await supabase
        .from('host_profiles')
        .update(updates)
        .eq('user_id', user.id)
        .select()
        .single()
      
      if (error) throw error
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['host_profile', user?.id] })
    }
  })
}
