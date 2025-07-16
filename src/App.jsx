import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TrueFansHomePage from './components/TrueFansHomePage'
import AboutPage from './pages/AboutPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import ContactPage from './pages/ContactPage'
import HelpCenterPage from './pages/HelpCenterPage'
import HowItWorksPage from './pages/HowItWorksPage'
import SuccessStoriesPage from './pages/SuccessStoriesPage'
import RevenueCalculatorPage from './pages/RevenueCalculatorPage'
import ArtistResourcesPage from './pages/ArtistResourcesPage'
import BecomeHostPage from './pages/BecomeHostPage'
import HostGuidelinesPage from './pages/HostGuidelinesPage'
import VenueRequirementsPage from './pages/VenueRequirementsPage'
import HostCommunityPage from './pages/HostCommunityPage'
import ArtistSignupPage from './pages/ArtistSignupPage'
import TourPlannerPage from './pages/TourPlannerPage'
import VettedHostsPage from './pages/VettedHostsPage'
import AdminPortalPage from './pages/AdminPortalPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TrueFansHomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/help" element={<HelpCenterPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/revenue-calculator" element={<RevenueCalculatorPage />} />
        <Route path="/artist-resources" element={<ArtistResourcesPage />} />
        <Route path="/become-host" element={<BecomeHostPage />} />
        <Route path="/host-guidelines" element={<HostGuidelinesPage />} />
        <Route path="/venue-requirements" element={<VenueRequirementsPage />} />
        <Route path="/host-community" element={<HostCommunityPage />} />
        <Route path="/artist-signup" element={<ArtistSignupPage />} />
        <Route path="/tour-planner" element={<TourPlannerPage />} />
        <Route path="/vetted-hosts" element={<VettedHostsPage />} />
        <Route path="/admin" element={<AdminPortalPage />} />
      </Routes>
    </Router>
  )
}

export default App
