import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Music, 
  Users, 
  MapPin, 
  Calendar, 
  DollarSign,
  Route,
  CheckCircle,
  Star,
  Car,
  Home,
  Phone,
  Mail,
  ArrowRight,
  Play,
  Shield,
  Zap,
  Crown,
  Heart,
  Sparkles,
  TrendingUp,
  Award,
  Globe,
  Headphones,
  Volume2,
  Mic,
  Coffee,
  Camera,
  ChevronDown,
  Upload
} from 'lucide-react'

const FooterLink = ({ to, children, className = "" }) => {
  const handleClick = () => {
    // Small delay to ensure navigation happens first
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

const TrueFansHomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [showSignupModal, setShowSignupModal] = useState(false)
  const [signupType, setSignupType] = useState(null) // 'existing' or 'new'

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'Portland, OR',
      genre: 'Indie Folk',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'The AI tour planner mapped a perfect 3-week route through my fan base. I earned $12,000 and connected with 400+ new fans.',
      stats: { tours: 3, earnings: 47000, cities: 18 }
    },
    {
      name: 'Marcus Rodriguez',
      location: 'Austin, TX',
      genre: 'Singer-Songwriter',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'I uploaded my email list and TrueFans JAM created a perfect tour route. My fans became hosts, and I played to packed rooms every night.',
      stats: { tours: 2, earnings: 31200, cities: 14 }
    },
    {
      name: 'Luna Chen',
      location: 'San Francisco, CA',
      genre: 'Acoustic Pop',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'The fan email integration is genius. My supporters became my tour hosts, creating the most authentic and profitable tour of my career.',
      stats: { tours: 4, earnings: 68400, cities: 23 }
    }
  ]

  const features = [
    {
      icon: Route,
      title: 'AI Tour Planning',
      description: 'Upload your fan email list and let our AI create optimized tour routes connecting you with supporters who want to host shows.',
      color: 'from-purple-600 to-blue-600'
    },
    {
      icon: Users,
      title: 'Fan-to-Host Network',
      description: 'Transform your existing fans into venue hosts. Our system identifies supporters willing to open their homes for intimate concerts.',
      color: 'from-blue-600 to-teal-600'
    },
    {
      icon: DollarSign,
      title: 'Maximize Earnings',
      description: 'Artists average $560 per show with 70% of donations going directly to you. Build sustainable touring income through your fan base.',
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: Shield,
      title: 'Vetted & Safe',
      description: 'All hosts are background-checked and verified. Travel with confidence knowing every venue is pre-screened for artist safety.',
      color: 'from-orange-600 to-red-600'
    }
  ]

  const stats = [
    { number: '$327K+', label: 'Artist Earnings', icon: DollarSign },
    { number: '19', label: 'AI Tours Completed', icon: Route },
    { number: '121', label: 'Cities Reached', icon: MapPin },
    { number: '7.1K+', label: 'New Fan Connections', icon: Users }
  ]

  const howItWorks = [
    {
      step: 1,
      title: 'Upload Your Fan Data',
      description: 'Import your email list, social media followers, and streaming data to identify your geographic fan base.',
      icon: Upload,
      color: 'bg-purple-600'
    },
    {
      step: 2,
      title: 'AI Creates Your Route',
      description: 'Our algorithm analyzes fan density, travel preferences, and venue availability to design your optimal tour.',
      icon: Route,
      color: 'bg-blue-600'
    },
    {
      step: 3,
      title: 'Fans Become Hosts',
      description: 'We reach out to your supporters in each city, connecting you with fans excited to host intimate concerts.',
      icon: Home,
      color: 'bg-green-600'
    },
    {
      step: 4,
      title: 'Tour & Earn',
      description: 'Perform for engaged audiences who already love your music, earning an average of $560 per show.',
      icon: Music,
      color: 'bg-orange-600'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleSignupClick = (type) => {
    setSignupType(type)
    setShowSignupModal(true)
  }

  const SignupModal = () => (
    <AnimatePresence>
      {showSignupModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowSignupModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-md w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Join TrueFans JAM™</h3>
              <p className="text-gray-600">Choose your signup path below</p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => window.location.href = '/artist-signup?type=existing'}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-4 rounded-lg font-bold hover:from-green-700 hover:to-emerald-700 transition-all flex items-center justify-between"
              >
                <div className="text-left">
                  <div className="font-bold">I have TrueFans CONNECT™</div>
                  <div className="text-sm text-green-100">Link my existing account</div>
                </div>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => window.location.href = '/artist-signup?type=new'}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-4 rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-between"
              >
                <div className="text-left">
                  <div className="font-bold">I need TrueFans CONNECT™</div>
                  <div className="text-sm text-purple-100">Create account & join JAM™</div>
                </div>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">What is TrueFans CONNECT™?</h4>
              <p className="text-sm text-blue-800">
                Your unified fan relationship platform that powers all TrueFans services. 
                CONNECT™ manages your fan data, email lists, and supporter relationships across our entire ecosystem.
              </p>
            </div>

            <button
              onClick={() => setShowSignupModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
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

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            {/* Brand Logo/Icon */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
            >
              <Route className="w-12 h-12 text-white" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              TrueFans JAM™
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              AI-Powered Tour Planning That Transforms Your Fans Into Venues
            </motion.p>

            {/* Value Proposition */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-purple-200 mb-12 max-w-3xl mx-auto"
            >
              Upload your fan email list and let our AI create profitable tour routes connecting you 
              with supporters who want to host intimate concerts in their homes.
            </motion.div>

            {/* CONNECT Account Requirement */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 mb-12 max-w-2xl mx-auto border border-white border-opacity-20"
            >
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-yellow-400 mr-3" />
                <span className="text-yellow-400 font-bold text-lg">TrueFans CONNECT™ Required</span>
              </div>
              <p className="text-purple-100 text-sm leading-relaxed">
                TrueFans JAM™ integrates with your TrueFans CONNECT™ account to access your fan data and manage tour bookings. 
                New to TrueFans? We'll help you create your CONNECT™ account as part of the JAM™ signup process.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <button
                onClick={() => handleSignupClick('artist')}
                className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:from-yellow-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-2xl flex items-center"
              >
                Join as Artist <ArrowRight className="w-6 h-6 ml-3" />
              </button>
              
              <a
                href="/tour-planner"
                className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-opacity-30 transition-all border-2 border-white border-opacity-30 flex items-center"
              >
                Plan AI Tour <Route className="w-6 h-6 ml-3" />
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                    <div className="text-purple-200 text-sm">{stat.label}</div>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How TrueFans JAM™ Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary AI technology that turns your existing fan base into a profitable touring network
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">From Fan List to Tour Success</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered system transforms your supporter data into profitable touring opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 relative`}>
                    <Icon className="w-10 h-10 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-gray-900">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Artists Are Transforming Their Careers</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Real independent artists sharing their AI tour planning success stories
            </p>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white border-opacity-20"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full mr-6"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">{testimonials[currentTestimonial].name}</h3>
                    <p className="text-purple-200">{testimonials[currentTestimonial].genre}</p>
                    <p className="text-purple-300 text-sm flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                </div>
                
                <blockquote className="text-xl text-white italic mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{testimonials[currentTestimonial].stats.tours}</div>
                    <div className="text-purple-200 text-sm">AI Tours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">${(testimonials[currentTestimonial].stats.earnings / 1000).toFixed(0)}K</div>
                    <div className="text-purple-200 text-sm">Total Earned</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{testimonials[currentTestimonial].stats.cities}</div>
                    <div className="text-purple-200 text-sm">Cities Reached</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-yellow-400' : 'bg-white bg-opacity-30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Touring Career?
          </h2>
          <p className="text-xl text-orange-100 mb-12 max-w-3xl mx-auto">
            Join TrueFans JAM™ and let AI turn your fan base into a profitable touring network. 
            Start with your TrueFans CONNECT™ account or create one during signup.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => handleSignupClick('artist')}
              className="bg-white text-orange-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center"
            >
              Start Your JAM™ Journey <ArrowRight className="w-6 h-6 ml-3" />
            </button>
            
            <a
              href="/success-stories"
              className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-opacity-30 transition-all border-2 border-white border-opacity-30 flex items-center"
            >
              View Success Stories <Star className="w-6 h-6 ml-3" />
            </a>
          </div>

          <div className="mt-12 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white border-opacity-20">
            <p className="text-orange-100 text-sm">
              <strong>New to TrueFans?</strong> No problem! We'll guide you through creating your TrueFans CONNECT™ account 
              as part of joining JAM™. Existing CONNECT™ users can link their account instantly.
            </p>
          </div>
        </div>
      </section>

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
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TrueFans JAM. All rights reserved. Built for independent artists, by music lovers.</p>
          </div>
        </div>
      </footer>

      {/* Signup Modal */}
      <SignupModal />
    </div>
  )
}

export default TrueFansHomePage
