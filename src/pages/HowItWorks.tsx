import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { 
  Music, 
  Home as HomeIcon, 
  Users, 
  Calendar, 
  MapPin, 
  Heart, 
  Star, 
  ArrowRight, 
  CheckCircle,
  UserPlus,
  Mail,
  Guitar,
  Mic,
  Clock,
  DollarSign,
  Shield,
  Headphones
} from 'lucide-react'

const HowItWorks: React.FC = () => {
  const userTypes = [
    {
      title: "For Artists",
      icon: <Music className="h-8 w-8" />,
      color: "bg-blue-500",
      steps: [
        {
          number: "1",
          title: "Create Your Profile",
          description: "Set up your artist profile with music samples, photos, and tour preferences.",
          icon: <UserPlus className="h-6 w-6" />
        },
        {
          number: "2",
          title: "Plan Your Tour",
          description: "Use our intelligent routing system to plan optimal tour dates and locations.",
          icon: <MapPin className="h-6 w-6" />
        },
        {
          number: "3",
          title: "Connect with Fans",
          description: "Our platform matches you with passionate fans willing to host intimate shows.",
          icon: <Heart className="h-6 w-6" />
        },
        {
          number: "4",
          title: "Perform & Earn",
          description: "Play intimate shows, build your fanbase, and earn fair compensation.",
          icon: <DollarSign className="h-6 w-6" />
        }
      ]
    },
    {
      title: "For Hosts",
      icon: <HomeIcon className="h-8 w-8" />,
      color: "bg-green-500",
      steps: [
        {
          number: "1",
          title: "Open Your Home",
          description: "Register as a host and tell us about your space and music preferences.",
          icon: <HomeIcon className="h-6 w-6" />
        },
        {
          number: "2",
          title: "Get Matched",
          description: "Receive invitations from artists whose music and tour dates align with your preferences.",
          icon: <Mail className="h-6 w-6" />
        },
        {
          number: "3",
          title: "Confirm Details",
          description: "Work with artists to finalize show details, capacity, and logistics.",
          icon: <CheckCircle className="h-6 w-6" />
        },
        {
          number: "4",
          title: "Host the Magic",
          description: "Welcome artists and guests for an unforgettable intimate music experience.",
          icon: <Star className="h-6 w-6" />
        }
      ]
    },
    {
      title: "For Music Lovers",
      icon: <Headphones className="h-8 w-8" />,
      color: "bg-purple-500",
      steps: [
        {
          number: "1",
          title: "Discover Shows",
          description: "Browse intimate concerts happening in your area or while traveling.",
          icon: <Calendar className="h-6 w-6" />
        },
        {
          number: "2",
          title: "Request Invitations",
          description: "Express interest in shows and receive invitations from hosts.",
          icon: <Mail className="h-6 w-6" />
        },
        {
          number: "3",
          title: "Attend & Connect",
          description: "Enjoy intimate performances and connect directly with artists and fellow fans.",
          icon: <Users className="h-6 w-6" />
        },
        {
          number: "4",
          title: "Support Artists",
          description: "Purchase music, merchandise, and support your favorite artists directly.",
          icon: <Heart className="h-6 w-6" />
        }
      ]
    }
  ]

  const tourProcess = [
    {
      step: "1",
      title: "Artist Plans Tour",
      description: "Artists input their desired tour dates, regions, and preferences into our system.",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      details: [
        "Set tour start and end dates",
        "Choose preferred regions and cities",
        "Specify audience size preferences",
        "Upload music samples and photos"
      ]
    },
    {
      step: "2",
      title: "Smart Fan Matching",
      description: "Our algorithm identifies passionate fans in tour areas who might want to host shows.",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      details: [
        "Analyze fan music preferences",
        "Consider geographic proximity",
        "Match hosting capacity needs",
        "Factor in available dates"
      ]
    },
    {
      step: "3",
      title: "Intelligent Routing",
      description: "Advanced algorithms create optimal tour routes considering travel time, rest days, and logistics.",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      details: [
        "Minimize travel distances",
        "Schedule appropriate rest days",
        "Optimize arrival times",
        "Consider venue logistics"
      ]
    },
    {
      step: "4",
      title: "Confirmation & Magic",
      description: "Artists approve the tour plan, hosts confirm details, and unforgettable shows happen.",
      image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      details: [
        "Artist reviews and approves tour",
        "Hosts confirm show details",
        "Automated communication system",
        "Intimate concerts come to life"
      ]
    }
  ]

  const benefits = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safe & Secure",
      description: "Verified users, secure payments, and comprehensive safety guidelines for all participants."
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Fair Compensation",
      description: "Artists receive fair payment while hosts can cover costs and music lovers get intimate access."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Flexible Scheduling",
      description: "Plan shows around your schedule with our intelligent matching and routing system."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Authentic Connections",
      description: "Build genuine relationships between artists and fans in intimate, personal settings."
    }
  ]

  const faqs = [
    {
      question: "How does the tour routing algorithm work?",
      answer: "Our intelligent system considers travel distances, rest days, venue capacity, and local preferences to create optimal tour routes that minimize artist fatigue while maximizing fan engagement."
    },
    {
      question: "What safety measures are in place?",
      answer: "All users are verified, we provide safety guidelines, secure payment processing, and 24/7 support. Hosts and artists can review each other's profiles before confirming shows."
    },
    {
      question: "How are payments handled?",
      answer: "We use secure payment processing with transparent fee structures. Artists receive payment after shows, hosts can set contribution amounts, and fans pay directly through the platform."
    },
    {
      question: "Can I host shows in any type of space?",
      answer: "Yes! From living rooms to backyards, studios to community centers - any space that can safely accommodate intimate performances can become a venue."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
                How TrueFans JAM
                <span className="text-primary-600 block">Works</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Discover how our platform connects artists, hosts, and music lovers to create 
                unforgettable intimate concert experiences in homes around the world.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Get Started Today
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* User Type Workflows */}
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
              Three Ways to Experience TrueFans JAM
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're an artist, host, or music lover, we've designed simple workflows 
              to help you create and discover amazing musical experiences.
            </p>
          </motion.div>

          <div className="space-y-20">
            {userTypes.map((userType, typeIndex) => (
              <motion.div
                key={userType.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * typeIndex }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="text-center">
                  <div className={`${userType.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 text-white`}>
                    {userType.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{userType.title}</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {userType.steps.map((step, stepIndex) => (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * stepIndex }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full relative">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-4">
                            <div className={`${userType.color} text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold`}>
                              {step.number}
                            </div>
                            <div className="text-gray-400">
                              {step.icon}
                            </div>
                          </div>
                          <CardTitle className="text-lg">{step.title}</CardTitle>
                          <CardDescription>{step.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Process Deep Dive */}
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
              The Tour Creation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our intelligent system makes tour planning effortless by connecting artists with 
              passionate fans and creating optimal routes for unforgettable experiences.
            </p>
          </motion.div>

          <div className="space-y-16">
            {tourProcess.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold">
                      {process.step}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{process.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600">{process.description}</p>
                  <ul className="space-y-3">
                    {process.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={process.image}
                      alt={process.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose TrueFans JAM
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built our platform with safety, fairness, and authentic connections at the core.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full text-center">
                  <CardHeader>
                    <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about how TrueFans JAM works.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-left">{faq.question}</CardTitle>
                    <CardDescription className="text-left">{faq.answer}</CardDescription>
                  </CardHeader>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-primary-100">
              Join thousands of artists, hosts, and music lovers creating magical moments together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Music className="h-5 w-5 mr-2" />
                Join as Artist
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                <HomeIcon className="h-5 w-5 mr-2" />
                Become a Host
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                <Headphones className="h-5 w-5 mr-2" />
                Find Shows
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
