import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { 
  Shield, 
  Users, 
  CheckCircle, 
  AlertTriangle, 
  Phone, 
  MessageCircle,
  Lock,
  Eye,
  UserCheck,
  Home,
  Star,
  Flag,
  ArrowRight,
  Clock,
  MapPin,
  Camera,
  FileText,
  Headphones,
  Heart
} from 'lucide-react'

const Safety: React.FC = () => {
  const safetyFeatures = [
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Identity Verification",
      description: "All users undergo comprehensive identity verification including government ID and background checks.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Rating & Review System",
      description: "Transparent ratings and reviews help build trust and accountability within our community.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Event Monitoring",
      description: "Our team monitors events and provides 24/7 support for any safety concerns or emergencies.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Secure Payments",
      description: "All transactions are processed through secure, encrypted payment systems with fraud protection.",
      color: "bg-green-100 text-green-600"
    }
  ]

  const safetyGuidelines = [
    {
      category: "For Artists",
      icon: <Users className="h-6 w-6" />,
      guidelines: [
        "Research your host and venue before confirming shows",
        "Share your itinerary with trusted contacts",
        "Arrive early to assess the venue and meet your host",
        "Trust your instincts - if something feels wrong, speak up",
        "Keep emergency contacts readily available",
        "Report any concerning behavior immediately"
      ]
    },
    {
      category: "For Hosts",
      icon: <Home className="h-6 w-6" />,
      guidelines: [
        "Verify artist identity and check their reviews",
        "Ensure your venue meets safety standards",
        "Provide clear directions and emergency information",
        "Screen guests and maintain guest lists",
        "Have a safety plan for emergencies",
        "Communicate openly with artists about expectations"
      ]
    },
    {
      category: "For Attendees",
      icon: <Heart className="h-6 w-6" />,
      guidelines: [
        "RSVP only to verified events with trusted hosts",
        "Share event details with friends or family",
        "Respect the host's home and property",
        "Follow venue rules and capacity limits",
        "Report any inappropriate behavior",
        "Be mindful of noise levels and neighbors"
      ]
    }
  ]

  const emergencyContacts = [
    {
      title: "24/7 Safety Hotline",
      description: "Immediate assistance for safety emergencies",
      contact: "(555) 911-SAFE",
      icon: <Phone className="h-6 w-6" />,
      available: "24/7"
    },
    {
      title: "Emergency Chat",
      description: "Real-time chat support for urgent situations",
      contact: "Emergency Chat",
      icon: <MessageCircle className="h-6 w-6" />,
      available: "24/7"
    },
    {
      title: "Local Emergency Services",
      description: "For immediate life-threatening emergencies",
      contact: "911 (US) / Local Emergency Number",
      icon: <AlertTriangle className="h-6 w-6" />,
      available: "Always"
    }
  ]

  const reportingProcess = [
    {
      step: "1",
      title: "Identify the Issue",
      description: "Recognize behavior that violates our community guidelines or makes you feel unsafe",
      icon: <Eye className="h-6 w-6" />
    },
    {
      step: "2", 
      title: "Document Everything",
      description: "Take screenshots, photos, or notes about the incident including dates and times",
      icon: <Camera className="h-6 w-6" />
    },
    {
      step: "3",
      title: "Report Immediately",
      description: "Use our in-app reporting feature or contact our safety team directly",
      icon: <Flag className="h-6 w-6" />
    },
    {
      step: "4",
      title: "Follow Up",
      description: "Our team will investigate and take appropriate action within 24 hours",
      icon: <CheckCircle className="h-6 w-6" />
    }
  ]

  const communityStandards = [
    {
      title: "Respect & Inclusion",
      description: "We maintain a welcoming environment free from discrimination, harassment, or hate speech of any kind."
    },
    {
      title: "Authentic Identity",
      description: "All users must provide accurate information and represent themselves honestly on the platform."
    },
    {
      title: "Safe Spaces",
      description: "Venues must meet basic safety standards and hosts must ensure guest safety and comfort."
    },
    {
      title: "Appropriate Behavior",
      description: "All interactions must be professional, respectful, and appropriate for a music community."
    },
    {
      title: "No Illegal Activity",
      description: "Any illegal activities, including drug use or underage drinking, are strictly prohibited."
    },
    {
      title: "Privacy Protection",
      description: "Respect others' privacy and obtain consent before sharing photos or personal information."
    }
  ]

  const safetyStats = [
    { number: "99.8%", label: "Safe Events", description: "Events completed without incidents" },
    { number: "< 2 min", label: "Emergency Response", description: "Average response time" },
    { number: "24/7", label: "Safety Support", description: "Round-the-clock assistance" },
    { number: "100%", label: "Verified Users", description: "Identity-checked community" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-center mb-6">
                <Shield className="h-12 w-12 text-red-600 mr-4" />
                <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
                  Safety
                  <span className="text-red-600 block">Guidelines</span>
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Your safety is our top priority. Learn about our comprehensive safety measures, 
                community guidelines, and how we work together to create secure, enjoyable experiences for everyone.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group bg-red-600 hover:bg-red-700">
                <Phone className="h-5 w-5 mr-2" />
                Emergency Hotline
              </Button>
              <Button size="lg" variant="outline">
                <Flag className="h-5 w-5 mr-2" />
                Report an Issue
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Safety Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
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
              Built-in Safety Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've designed multiple layers of protection to ensure every interaction on our platform is safe and secure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
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
                    <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
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
              Safety Guidelines by Role
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specific safety recommendations tailored to artists, hosts, and attendees to ensure everyone's wellbeing.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {safetyGuidelines.map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="bg-red-100 text-red-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      {section.icon}
                    </div>
                    <CardTitle className="text-xl">{section.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.guidelines.map((guideline, guidelineIndex) => (
                        <li key={guidelineIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{guideline}</span>
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

      {/* Emergency Contacts */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              Emergency Contacts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              If you're in immediate danger or need urgent assistance, use these emergency contacts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {emergencyContacts.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full text-center cursor-pointer">
                  <CardHeader>
                    <div className="bg-red-600 text-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                      {contact.icon}
                    </div>
                    <CardTitle className="text-xl">{contact.title}</CardTitle>
                    <CardDescription>{contact.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-lg font-bold text-gray-900">{contact.contact}</p>
                      <p className="text-sm text-gray-600">Available: {contact.available}</p>
                      <Button className="w-full bg-red-600 hover:bg-red-700">
                        Contact Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting Process */}
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
              How to Report Issues
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              If you experience or witness inappropriate behavior, follow these steps to report it safely and effectively.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reportingProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.step}
                    </div>
                    <div className="bg-red-100 text-red-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
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

      {/* Community Standards */}
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
              Community Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These standards help maintain a safe, respectful, and inclusive environment for all community members.
            </p>
          </motion.div>

          <div className="space-y-6">
            {communityStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 text-red-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-left">{standard.title}</CardTitle>
                        <CardDescription className="text-left">{standard.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white">
              Questions About Safety?
            </h2>
            <p className="text-xl text-red-100">
              Our safety team is here to help. Don't hesitate to reach out with any concerns or questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Headphones className="h-5 w-5 mr-2" />
                Contact Safety Team
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                <FileText className="h-5 w-5 mr-2" />
                Safety Resources
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Safety
