import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { 
  Home, 
  Users, 
  DollarSign, 
  Shield, 
  Heart, 
  Star, 
  ArrowRight, 
  CheckCircle,
  Music,
  Coffee,
  Sofa,
  TreePine,
  Building,
  MapPin,
  Calendar,
  Award,
  UserPlus,
  Globe
} from 'lucide-react'

const Hosts: React.FC = () => {
  const benefits = [
    {
      icon: <Music className="h-8 w-8" />,
      title: "Bring Live Music Home",
      description: "Transform your space into an intimate concert venue and experience music like never before.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Earn Extra Income",
      description: "Generate revenue by hosting shows while sharing your love of music with your community.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Build Community",
      description: "Connect with fellow music lovers and create lasting friendships through shared musical experiences.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safe & Secure",
      description: "All artists are verified, and we provide comprehensive safety guidelines and support.",
      color: "bg-red-100 text-red-600"
    }
  ]

  const venueTypes = [
    {
      icon: <Sofa className="h-12 w-12" />,
      title: "Living Rooms",
      description: "Cozy indoor spaces perfect for acoustic performances",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400",
      capacity: "15-30 guests"
    },
    {
      icon: <TreePine className="h-12 w-12" />,
      title: "Backyards",
      description: "Outdoor spaces ideal for larger intimate gatherings",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400",
      capacity: "20-50 guests"
    },
    {
      icon: <Coffee className="h-12 w-12" />,
      title: "Cafes & Shops",
      description: "Small businesses creating unique musical experiences",
      image: "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=400",
      capacity: "25-40 guests"
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Community Spaces",
      description: "Churches, libraries, and community centers",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400",
      capacity: "30-75 guests"
    }
  ]

  const hostingSteps = [
    {
      step: "1",
      title: "Create Your Venue Profile",
      description: "Tell us about your space, capacity, and hosting preferences",
      icon: <Home className="h-6 w-6" />
    },
    {
      step: "2",
      title: "Get Matched with Artists",
      description: "Our algorithm connects you with artists looking to perform in your area",
      icon: <UserPlus className="h-6 w-6" />
    },
    {
      step: "3",
      title: "Plan the Show",
      description: "Work with artists to set dates, pricing, and show details",
      icon: <Calendar className="h-6 w-6" />
    },
    {
      step: "4",
      title: "Host & Enjoy",
      description: "Welcome guests and enjoy an unforgettable musical experience",
      icon: <Star className="h-6 w-6" />
    }
  ]

  const testimonials = [
    {
      name: "Jennifer Walsh",
      role: "Living Room Host",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "Hosting shows has brought so much joy to our home. We've met incredible artists and made lifelong friends through music.",
      shows: 12,
      rating: 5
    },
    {
      name: "David Kim",
      role: "Backyard Venue Host",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "Our backyard concerts have become the highlight of our neighborhood. The artists are amazing and the atmosphere is magical.",
      shows: 8,
      rating: 5
    },
    {
      name: "Maria Santos",
      role: "Cafe Owner",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "TrueFans JAM has transformed our cafe into a cultural hub. Our customers love the intimate performances and we've seen great business growth.",
      shows: 25,
      rating: 5
    }
  ]

  const safetyFeatures = [
    {
      title: "Artist Verification",
      description: "All artists undergo background checks and identity verification"
    },
    {
      title: "Insurance Coverage",
      description: "Comprehensive liability insurance for all hosted events"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support team for any issues or emergencies"
    },
    {
      title: "Guest Screening",
      description: "Verified attendees with ratings and reviews system"
    },
    {
      title: "Safety Guidelines",
      description: "Comprehensive hosting guidelines and best practices"
    },
    {
      title: "Emergency Protocols",
      description: "Clear procedures for handling any safety concerns"
    }
  ]

  const stats = [
    { number: "1,200+", label: "Active Hosts", description: "Passionate music lovers" },
    { number: "$450", label: "Average Earnings", description: "Per show hosted" },
    { number: "15,000+", label: "Shows Hosted", description: "Magical moments created" },
    { number: "4.8/5", label: "Host Rating", description: "Average satisfaction score" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-green-50 to-white">
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
                  For
                  <span className="text-green-600 block">Hosts</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Open your space to incredible artists and create unforgettable musical experiences 
                  while earning income and building community connections.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group bg-green-600 hover:bg-green-700">
                  Become a Host
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Host with TrueFans JAM
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a community of passionate hosts who are bringing live music to their neighborhoods 
              and creating magical experiences for artists and fans alike.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full">
                  <CardHeader>
                    <div className={`${benefit.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Types Section */}
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
              Every Space Can Be a Venue
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From cozy living rooms to spacious backyards, we help you transform any space 
              into the perfect intimate concert venue.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {venueTypes.map((venue, index) => (
              <motion.div
                key={venue.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full text-center">
                  <CardContent className="pt-6">
                    <img
                      src={venue.image}
                      alt={venue.title}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <div className="text-green-600 mb-4 flex justify-center">
                      {venue.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{venue.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{venue.description}</p>
                    <p className="text-xs text-green-600 font-medium">{venue.capacity}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
              How Hosting Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started as a host is simple. Follow these four easy steps to begin 
              hosting incredible musical experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hostingSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.step}
                    </div>
                    <div className="bg-green-100 text-green-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                      {step.icon}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
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
              Your Safety is Our Priority
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built comprehensive safety measures to ensure every hosting experience 
              is secure, enjoyable, and worry-free.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full">
                  <CardHeader>
                    <div className="bg-red-100 text-red-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
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
              What Hosts Are Saying
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from hosts who have transformed their spaces into magical music venues.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-600 mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4 object-cover"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.role}</div>
                        </div>
                      </div>
                      <div className="text-sm text-green-600 font-medium">
                        {testimonial.shows} shows hosted
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
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white">
              Ready to Open Your Space?
            </h2>
            <p className="text-xl text-green-100">
              Join our community of hosts and start creating unforgettable musical experiences 
              while earning income and building connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Become a Host
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                Host Guidelines
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Hosts
