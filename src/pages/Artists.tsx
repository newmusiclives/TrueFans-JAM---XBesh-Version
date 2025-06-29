import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { 
  Music, 
  Users, 
  DollarSign, 
  Calendar, 
  MapPin, 
  Star, 
  ArrowRight, 
  CheckCircle,
  TrendingUp,
  Globe,
  Heart,
  Mic,
  Guitar,
  Piano,
  Headphones,
  Award,
  Target,
  Zap
} from 'lucide-react'

const Artists: React.FC = () => {
  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Direct Fan Connection",
      description: "Build deeper relationships with your audience through intimate performances and personal interactions.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Higher Revenue Per Show",
      description: "Earn 80-90% of ticket sales with premium pricing for exclusive intimate experiences.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Smart Tour Planning",
      description: "Our AI algorithm creates optimal tour routes based on fan demand and geographic efficiency.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Reach",
      description: "Access passionate fans worldwide who are eager to host intimate shows in their communities.",
      color: "bg-orange-100 text-orange-600"
    }
  ]

  const features = [
    {
      title: "Tour Creation Wizard",
      description: "Easy 4-step process to plan your perfect tour",
      icon: <MapPin className="h-6 w-6" />
    },
    {
      title: "Fan Invitation System",
      description: "Let fans invite you to their cities and venues",
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: "Intelligent Routing",
      description: "AI-powered tour optimization for maximum efficiency",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Revenue Analytics",
      description: "Track earnings, fan engagement, and tour performance",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "Host Verification",
      description: "All venues are verified for safety and quality",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Marketing Support",
      description: "Promotional tools to maximize show attendance",
      icon: <Zap className="h-6 w-6" />
    }
  ]

  const artistTypes = [
    {
      icon: <Mic className="h-12 w-12" />,
      title: "Singer-Songwriters",
      description: "Perfect for acoustic performances and storytelling",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Guitar className="h-12 w-12" />,
      title: "Indie Bands",
      description: "Small ensembles that thrive in intimate settings",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Piano className="h-12 w-12" />,
      title: "Classical Musicians",
      description: "Bring classical music to living rooms worldwide",
      image: "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Headphones className="h-12 w-12" />,
      title: "Electronic Artists",
      description: "Create unique electronic experiences in small venues",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Indie Folk Artist",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "TrueFans JAM transformed my touring experience. I've connected with fans in ways I never thought possible and my revenue per show has tripled.",
      rating: 5
    },
    {
      name: "Marcus Rivera",
      role: "Classical Guitarist",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "The intimate setting allows my music to truly shine. Every show feels special, and the hosts become part of my extended music family.",
      rating: 5
    },
    {
      name: "Luna Thompson",
      role: "Electronic Producer",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "I was skeptical about electronic music in house concerts, but the energy is incredible. Fans are so engaged and appreciative.",
      rating: 5
    }
  ]

  const stats = [
    { number: "2,500+", label: "Active Artists", description: "Growing community of performers" },
    { number: "$2.8M+", label: "Artist Earnings", description: "Total revenue generated" },
    { number: "15,000+", label: "Shows Performed", description: "Intimate concerts hosted" },
    { number: "4.9/5", label: "Artist Rating", description: "Average satisfaction score" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-white">
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
                  <span className="text-primary-600 block">Artists</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your touring experience with intimate performances that create deeper 
                  connections, higher revenue, and unforgettable musical moments.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Start Your Tour
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo
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
                  src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Artist performing intimate concert"
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
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
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
              Why Artists Choose TrueFans JAM
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of artists who are revolutionizing their touring experience 
              with intimate, profitable, and meaningful performances.
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

      {/* Artist Types Section */}
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
              Perfect for Every Artist
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a solo performer or part of a small ensemble, 
              intimate venues bring out the best in every musical style.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {artistTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full text-center">
                  <CardContent className="pt-6">
                    <img
                      src={type.image}
                      alt={type.title}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <div className="text-primary-600 mb-4 flex justify-center">
                      {type.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-sm text-gray-600">{type.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Powerful Tools for Artists
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to plan, promote, and perform successful intimate tours.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      {feature.icon}
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
              What Artists Are Saying
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from artists who have transformed their touring experience with TrueFans JAM.
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
              Ready to Transform Your Tours?
            </h2>
            <p className="text-xl text-primary-100">
              Join thousands of artists creating meaningful connections and earning more 
              through intimate performances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Artists
