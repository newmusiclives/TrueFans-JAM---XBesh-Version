import { useAuthStore } from '../stores/authStore'

export const useAuth = () => {
  const { user, session, profile, loading, error, signIn, signUp, signOut, updateProfile, clearError } = useAuthStore()

  return {
    user,
    session,
    profile,
    loading,
    error,
    signIn,
    signUp,
    signOut,
    updateProfile,
    clearError,
    isAuthenticated: !!user
  }
}
