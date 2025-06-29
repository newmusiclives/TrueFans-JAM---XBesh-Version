import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

// Layout Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import HowItWorks from './pages/HowItWorks'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Support from './pages/Support'
import Login from './pages/Login'
import Register from './pages/Register'

// New Footer Pages
import Artists from './pages/Artists'
import Hosts from './pages/Hosts'
import SuccessStories from './pages/SuccessStories'
import Careers from './pages/Careers'
import Press from './pages/Press'
import Blog from './pages/Blog'
import Safety from './pages/Safety'

// Dashboard Pages
import ArtistDashboard from './pages/ArtistDashboard'
import HostDashboard from './pages/HostDashboard'
import AdminDashboard from './pages/AdminDashboard'

// Admin Pages
import UserManagement from './pages/admin/UserManagement'
import TourManagement from './pages/admin/TourManagement'
import FinancialReports from './pages/admin/FinancialReports'
import SystemSettings from './pages/admin/SystemSettings'
import SupportTickets from './pages/admin/SupportTickets'
import PlatformAnalytics from './pages/admin/PlatformAnalytics'

// Artist Pages
import CreateTour from './pages/artists/CreateTour'
import TourPlanReview from './pages/artists/TourPlanReview'
import ArtistProfile from './pages/artists/ArtistProfile'
import MusicUpload from './pages/artists/MusicUpload'
import ArtistAnalytics from './pages/artists/ArtistAnalytics'
import RevenueTracking from './pages/artists/RevenueTracking'
import FanEngagement from './pages/artists/FanEngagement'
import FindVenues from './pages/artists/FindVenues'
import ArtistResources from './pages/artists/ArtistResources'

// Hooks
import { useAuthStore } from './stores/authStore'

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  const { user, profile } = useAuthStore()

  const getDashboardRoute = () => {
    if (!user || !profile) return '/login'
    
    switch (profile.user_type) {
      case 'artist':
        return '/artist/dashboard'
      case 'host':
        return '/host/dashboard'
      case 'admin':
        return '/admin/dashboard'
      default:
        return '/login'
    }
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <Navbar />
          
          <main className="flex-1">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/support" element={<Support />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Footer Pages */}
              <Route path="/artists" element={<Artists />} />
              <Route path="/hosts" element={<Hosts />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/press" element={<Press />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/safety" element={<Safety />} />

              {/* Dashboard Routes */}
              <Route 
                path="/dashboard" 
                element={<Navigate to={getDashboardRoute()} replace />} 
              />
              <Route path="/artist/dashboard" element={<ArtistDashboard />} />
              <Route path="/host/dashboard" element={<HostDashboard />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />

              {/* Admin Routes */}
              <Route path="/admin/users" element={<UserManagement />} />
              <Route path="/admin/tours" element={<TourManagement />} />
              <Route path="/admin/reports" element={<FinancialReports />} />
              <Route path="/admin/settings" element={<SystemSettings />} />
              <Route path="/admin/support" element={<SupportTickets />} />
              <Route path="/admin/analytics" element={<PlatformAnalytics />} />

              {/* Artist Routes */}
              <Route path="/artist/create-tour" element={<CreateTour />} />
              <Route path="/artist/tour/:tourId/review" element={<TourPlanReview />} />
              <Route path="/artist/profile" element={<ArtistProfile />} />
              <Route path="/artist/music" element={<MusicUpload />} />
              <Route path="/artist/analytics" element={<ArtistAnalytics />} />
              <Route path="/artist/revenue" element={<RevenueTracking />} />
              <Route path="/artist/fans" element={<FanEngagement />} />
              <Route path="/artist/find-venues" element={<FindVenues />} />
              <Route path="/artist/resources" element={<ArtistResources />} />

              {/* Catch all route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />
          
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#10B981',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 5000,
                iconTheme: {
                  primary: '#EF4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
