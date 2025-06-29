import React from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { Music, Home, Users, Star, ArrowRight, Play, MapPin, Calendar } from 'lucide-react'

const LandingPage: React.FC = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: <Music className="h-8 w-8" />,
      title: "For Artists",
      description: "Connect with intimate audiences, build your fanbase, and earn fair compensation for your performances.",
      benefits: ["Direct fan connection", "Fair revenue splits", "Music platform integration", "Performance analytics"]
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "For Hosts",
      description: "Transform your space into a music venue and bring incredible live performances to your community.",
      benefits: ["Curated artist selection", "Easy booking system", "Community building", "Flexible scheduling"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "For Music Lovers",
      description: "Discover emerging artists in intimate settings and be part of exclusive musical experiences.",
      benefits: ["Intimate performances", "Meet the artists", "Discover new music", "Support local talent"]
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Indie Folk Artist",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "TrueFans JAM has revolutionized how I connect with my audience. The intimate settings create magical moments that traditional venues can't match."
    },
    {
      name: "Marcus Rodriguez",
      role: "Host & Music Enthusiast",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "Hosting shows in my living room has brought our community together in ways I never imagined. It's like having a private concert series."
    },
    {
      name: "Emma Thompson",
      role: "Singer-Songwriter",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "The platform's integration with music services and fair payment system makes it easy to focus on what I love most - making music."
    }
  ]

  const stats = [
    { number: "2,500+", label: "Artists Connected" },
    { number: "1,200+", label: "Intimate Venues" },
    { number: "15,000+", label: "Shows Hosted" },
    { number: "98%", label: "Satisfaction Rate" }
  ]

  const handleComingSoon = (e: React.MouseEvent, feature: string) => {
    e.preventDefault()
    alert(`${feature} - Coming Soon! This feature is currently in development.`)
  }

  const handleGetStarted = () => {
    navigate('/auth')
  }

  const handleJoinAsArtist = () => {
    navigate('/auth')
  }

  const handleBecomeHost = () => {
    navigate('/auth')
  }

  const handleWatchDemo = () => {
    alert('Demo video - Coming Soon! This feature is currently in development.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Music className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-display font-bold text-gray-900">TrueFans JAM</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/auth" className="text-gray-600 hover:text-gray-900 transition-colors">
                Sign In
              </Link>
              <Button onClick={handleGetStarted}>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
                  Intimate Music
                  <span className="text-primary-600 block">Experiences</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Connect artists with passionate hosts for unforgettable house concerts. 
                  Where music meets community in the most intimate settings.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group" onClick={handleGetStarted}>
                  Start Your Journey
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="group" onClick={handleWatchDemo}>
                  <Play className="h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-primary-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Intimate house concert"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">Portland, OR</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">Tonight at 8:00 PM</span>
                  </div>
                </div>
              </div>
              
              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -right-4 top-8 bg-white rounded-lg shadow-lg p-4 max-w-xs"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
                    alt="Artist"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-medium text-sm">Luna Rivers</div>
                    <div className="text-xs text-gray-500">Indie Folk • 2.3k followers</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -left-4 bottom-8 bg-white rounded-lg shadow-lg p-4"
              >
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-medium text-sm">4.9</span>
                  <span className="text-xs text-gray-500">(127 reviews)</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              Built for Everyone in Music
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're an artist looking to connect with fans, a host wanting to bring music to your community, 
              or a music lover seeking intimate experiences, we've got you covered.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full">
                  <CardHeader>
                    <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              Loved by Artists & Hosts
            </h2>
            <p className="text-xl text-gray-600">
              See what our community has to say about their TrueFans JAM experience.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white">
              Ready to Transform Your Music Experience?
            </h2>
            <p className="text-xl text-primary-100">
              Join thousands of artists and hosts creating unforgettable musical moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={handleJoinAsArtist}>
                Join as Artist
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600" onClick={handleBecomeHost}>
                Become a Host
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-6 gap-8 mb-12">
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="bg-primary-600 p-2 rounded-lg">
                  <Music className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-display font-bold">TrueFans JAM</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Connecting artists and hosts for intimate music experiences that matter. 
                Building communities through the power of live music in personal spaces.
              </p>
              <div className="space-y-2">
                <p className="text-sm font-medium">Follow Us</p>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Twitter
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Facebook
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">For Artists</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/artists/find-venues" className="hover:text-white transition-colors">Find Venues</Link></li>
                <li><Link to="/dashboard" className="hover:text-white transition-colors">Artist Dashboard</Link></li>
                <li><a href="#" onClick={(e) => handleComingSoon(e, 'Artist Resources')} className="hover:text-white transition-colors">Artist Resources</a></li>
                <li><a href="#" onClick={(e) => handleComingSoon(e, 'Success Stories')} className="hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">For Hosts</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/dashboard" className="hover:text-white transition-colors">Host Dashboard</Link></li>
                <li><a href="#" onClick={(e) => handleComingSoon(e, 'Browse Artists')} className="hover:text-white transition-colors">Browse Artists</a></li>
                <li><a href="#" onClick={(e) => handleComingSoon(e, 'Host Resources')} className="hover:text-white transition-colors">Host Resources</a></li>
                <li><a href="#" onClick={(e) => handleComingSoon(e, 'Safety Guidelines')} className="hover:text-white transition-colors">Safety Guidelines</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">For Fans</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" onClick={(e) => handleComingSoon(e, 'Browse Shows')} className="hover:text-white transition-colors">Browse Shows</a></li>
                <li><a href="#" onClick={(e) => handleComingSoon(e, 'Event Calendar')} className="hover:text-white transition-colors">Event Calendar</a></li>
                <li><a href="#" onClick={(e) => handleComingSoon(e, 'Artist Discovery')} className="hover:text-white transition-colors">Artist Discovery</a></li>
                <li><a href="#" onClick={(e) => handleComingSoon(e, 'Local Events')} className="hover:text-white transition-colors">Local Events</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">Support</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" onClick={(e) => handleComingSoon(e, 'Help Center')} className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" onClick={(e) => handleComingSoon(e, 'Contact Support')} className="hover:text-white transition-colors">Contact Support</a></li>
                <li><a href="#" onClick={(e) => handleComingSoon(e, 'Privacy Policy')} className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" onClick={(e) => handleComingSoon(e, 'Terms of Service')} className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-8 border-t border-gray-800">
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <span>&copy; 2024 TrueFans JAM. All rights reserved.</span>
              <span>Made with ❤️ for the music community</span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Available on:</span>
              <a 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                iOS App Store
              </a>
              <a 
                href="https://play.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                Google Play
              </a>
              <a 
                href="#" 
                onClick={(e) => handleComingSoon(e, 'Web App')} 
                className="hover:text-white transition-colors"
              >
                Web App
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
