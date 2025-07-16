import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Music, Globe, Mail, Phone } from 'lucide-react'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const FooterLink = ({ to, children, className = "" }) => {
  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  return (
    <Link 
      to={to} 
      className={`hover:text-white transition-colors ${className}`}
      onClick={handleClick}
    >
      {children}
    </Link>
  )
}

const Layout = ({ children, title, description }) => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center flex-shrink-0">
              <Music className="w-8 h-8 text-purple-600 mr-2 flex-shrink-0" />
              <span className="text-xl font-bold text-gray-900 whitespace-nowrap">TrueFans JAM</span>
            </Link>
            <div className="hidden md:flex space-x-8 flex-shrink-0">
              <Link to="/how-it-works" className="text-gray-700 hover:text-purple-600 transition-colors whitespace-nowrap">How It Works</Link>
              <Link to="/success-stories" className="text-gray-700 hover:text-purple-600 transition-colors whitespace-nowrap">Stories</Link>
              <Link to="/about" className="text-gray-700 hover:text-purple-600 transition-colors whitespace-nowrap">About</Link>
              <Link to="/admin" className="text-gray-700 hover:text-purple-600 transition-colors whitespace-nowrap">Admin</Link>
            </div>
            <div className="flex items-center space-x-4 flex-shrink-0">
              <button className="text-gray-700 hover:text-purple-600 transition-colors whitespace-nowrap">Sign In</button>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors whitespace-nowrap">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="pt-16 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            {description && (
              <p className="text-xl text-purple-200 max-w-3xl mx-auto">{description}</p>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Music className="w-8 h-8 text-purple-400 mr-2" />
                <span className="text-xl font-bold">TrueFans JAM</span>
              </div>
              <p className="text-gray-400 mb-4">
                Connecting independent artists with their true fans through intimate, authentic musical experiences.
              </p>
              <div className="flex space-x-4">
                <Globe className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Mail className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Phone className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Artists</h4>
              <ul className="space-y-2 text-gray-400">
                <li><FooterLink to="/how-it-works">How It Works</FooterLink></li>
                <li><FooterLink to="/success-stories">Success Stories</FooterLink></li>
                <li><FooterLink to="/revenue-calculator">Revenue Calculator</FooterLink></li>
                <li><FooterLink to="/artist-resources">Artist Resources</FooterLink></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Hosts</h4>
              <ul className="space-y-2 text-gray-400">
                <li><FooterLink to="/become-host">Become a Host</FooterLink></li>
                <li><FooterLink to="/vetted-hosts">Vetted Hosts Program</FooterLink></li>
                <li><FooterLink to="/host-guidelines">Host Guidelines</FooterLink></li>
                <li><FooterLink to="/venue-requirements">Venue Requirements</FooterLink></li>
                <li><FooterLink to="/host-community">Host Community</FooterLink></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><FooterLink to="/help">Help Center</FooterLink></li>
                <li><FooterLink to="/contact">Contact Us</FooterLink></li>
                <li><FooterLink to="/privacy">Privacy Policy</FooterLink></li>
                <li><FooterLink to="/terms">Terms of Service</FooterLink></li>
                <li><FooterLink to="/admin">Admin Portal</FooterLink></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TrueFans JAM. All rights reserved. Built for independent artists, by music lovers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
