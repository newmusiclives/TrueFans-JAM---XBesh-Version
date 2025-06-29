import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { 
  Headphones, 
  MessageCircle, 
  Phone, 
  Mail, 
  Search, 
  Book, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Music,
  Home,
  Heart,
  Shield,
  AlertTriangle,
  Star,
  Globe,
  Video,
  FileText,
  Zap,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Download,
  PlayCircle,
  Calendar,
  CreditCard,
  Settings,
  Smartphone,
  Monitor,
  Wifi
} from 'lucide-react'
import toast from 'react-hot-toast'

const Support: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const supportChannels = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "Mon-Fri, 8AM-8PM PST",
      responseTime: "< 2 minutes",
      color: "bg-blue-100 text-blue-600",
      action: "Start Chat"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Phone Support",
      description: "Speak directly with a support specialist",
      availability: "Mon-Fri, 9AM-6PM PST",
      responseTime: "Immediate",
      color: "bg-green-100 text-green-600",
      action: "Call Now"
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Support",
      description: "Send detailed questions and get comprehensive answers",
      availability: "24/7",
      responseTime: "< 4 hours",
      color: "bg-purple-100 text-purple-600",
      action: "Send Email"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Call",
      description: "Schedule a screen-share session for complex issues",
      availability: "By appointment",
      responseTime: "Same day",
      color: "bg-orange-100 text-orange-600",
      action: "Schedule Call"
    }
  ]

  const supportCategories = [
    {
      id: 'getting-started',
      icon: <Zap className="h-6 w-6" />,
      title: "Getting Started",
      description: "Account setup, first steps, and platform basics",
      color: "bg-blue-100 text-blue-600",
      articles: 12
    },
    {
      id: 'artist-help',
      icon: <Music className="h-6 w-6" />,
      title: "Artist Help",
      description: "Tour creation, profile setup, and performance management",
      color: "bg-purple-100 text-purple-600",
      articles: 18
    },
    {
      id: 'host-help',
      icon: <Home className="h-6 w-6" />,
      title: "Host Help",
      description: "Venue setup, booking management, and hosting guidelines",
      color: "bg-green-100 text-green-600",
      articles: 15
    },
    {
      id: 'payments',
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payments & Billing",
      description: "Payment processing, fees, refunds, and financial questions",
      color: "bg-yellow-100 text-yellow-600",
      articles: 10
    },
    {
      id: 'technical',
      icon: <Settings className="h-6 w-6" />,
      title: "Technical Issues",
      description: "App problems, connectivity, and troubleshooting",
      color: "bg-red-100 text-red-600",
      articles: 8
    },
    {
      id: 'safety',
      icon: <Shield className="h-6 w-6" />,
      title: "Safety & Security",
      description: "Account security, reporting issues, and community guidelines",
      color: "bg-gray-100 text-gray-600",
      articles: 6
    }
  ]

  const popularArticles = [
    {
      title: "How to create your first tour as an artist",
      category: "Artist Help",
      views: "2.3k views",
      rating: 4.9,
      readTime: "5 min read"
    },
    {
      title: "Setting up your venue for hosting shows",
      category: "Host Help", 
      views: "1.8k views",
      rating: 4.8,
      readTime: "7 min read"
    },
    {
      title: "Understanding payment processing and fees",
      category: "Payments & Billing",
      views: "1.5k views",
      rating: 4.7,
      readTime: "4 min read"
    },
    {
      title: "Troubleshooting common app issues",
      category: "Technical Issues",
      views: "1.2k views",
      rating: 4.6,
      readTime: "6 min read"
    },
    {
      title: "Community guidelines and safety tips",
      category: "Safety & Security",
      views: "980 views",
      rating: 4.8,
      readTime: "3 min read"
    }
  ]

  const faqs = [
    {
      category: "general",
      question: "How does TrueFans JAM work?",
      answer: "TrueFans JAM connects artists with fans who want to host intimate shows. Artists create tour plans, fans invite them to their cities, and our algorithm schedules optimal tours based on geography and availability."
    },
    {
      category: "artist-help",
      question: "How do I create my first tour?",
      answer: "Go to your Artist Dashboard and click 'Create New Tour'. Follow our 4-step wizard: set your tour dates, let fans invite you, review the generated tour plan, and confirm your schedule. Our algorithm handles the complex routing for you."
    },
    {
      category: "host-help",
      question: "What makes a good venue for hosting?",
      answer: "Great venues are safe, accessible, and appropriate for intimate performances. This could be your living room, backyard, community center, or small business space. We provide safety guidelines and help you prepare."
    },
    {
      category: "payments",
      question: "How much do artists earn per show?",
      answer: "Artists keep 80-90% of ticket revenue depending on their subscription tier. We charge a 2.9% + $0.30 payment processing fee. Hosts receive negotiated compensation based on their agreement with the artist."
    },
    {
      category: "technical",
      question: "Why isn't the app working on my device?",
      answer: "First, try refreshing the page or restarting the app. Check your internet connection and ensure you're using a supported browser (Chrome, Firefox, Safari, Edge). If issues persist, contact our technical support team."
    },
    {
      category: "safety",
      question: "How do you ensure user safety?",
      answer: "We verify all users, provide safety guidelines, enable user ratings and reviews, offer 24/7 support, and have emergency protocols. Both artists and hosts can set their own safety requirements and preferences."
    },
    {
      category: "general",
      question: "Is TrueFans JAM available in my area?",
      answer: "We're currently available across the United States and expanding internationally. Check our coverage map or enter your location during signup to see if we serve your area."
    },
    {
      category: "payments",
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, PayPal, and bank transfers. Payments are processed securely through our PCI-compliant payment partners."
    }
  ]

  const videoTutorials = [
    {
      title: "Getting Started with TrueFans JAM",
      duration: "3:45",
      thumbnail: "https://images.pexels.com/photos/3784324/pexels-photo-3784324.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Getting Started"
    },
    {
      title: "Creating Your First Tour",
      duration: "8:12",
      thumbnail: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Artist Help"
    },
    {
      title: "Hosting Your First Show",
      duration: "6:30",
      thumbnail: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Host Help"
    },
    {
      title: "Understanding Payments",
      duration: "4:20",
      thumbnail: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Payments"
    }
  ]

  const systemStatus = {
    overall: "operational",
    services: [
      { name: "Platform API", status: "operational" },
      { name: "Payment Processing", status: "operational" },
      { name: "Mobile App", status: "operational" },
      { name: "Email Notifications", status: "operational" },
      { name: "Live Chat", status: "operational" }
    ]
  }

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleContactSupport = (channel: string) => {
    toast.success(`Opening ${channel}...`)
  }

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
              <div className="flex items-center justify-center mb-6">
                <Headphones className="h-12 w-12 text-primary-600 mr-4" />
                <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
                  Support
                  <span className="text-primary-600 block">Center</span>
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Get help when you need it. Search our knowledge base, browse tutorials, 
                or connect with our support team for personalized assistance.
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, or FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>500+ Help Articles</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-blue-500 mr-2" />
                <span>Average Response: 2 hours</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-2" />
                <span>98% Customer Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
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
              Get Help Your Way
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the support channel that works best for you. Our team is here to help 24/7.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full text-center cursor-pointer" onClick={() => handleContactSupport(channel.title)}>
                  <CardHeader>
                    <div className={`${channel.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      {channel.icon}
                    </div>
                    <CardTitle className="text-xl">{channel.title}</CardTitle>
                    <CardDescription className="mb-4">{channel.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-medium text-gray-900">Availability:</span>
                        <p className="text-gray-600">{channel.availability}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Response Time:</span>
                        <p className="text-gray-600">{channel.responseTime}</p>
                      </div>
                      <Button className="w-full mt-4">
                        {channel.action}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Categories */}
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
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find help articles organized by topic to quickly get the answers you need.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full cursor-pointer">
                  <CardHeader>
                    <div className={`${category.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription className="mb-4">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{category.articles} articles</span>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles & Video Tutorials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Popular Articles */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Popular Articles</h3>
                <p className="text-gray-600">Most helpful articles from our knowledge base.</p>
              </div>
              
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <Card key={index} hover className="cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">{article.title}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs">
                              {article.category}
                            </span>
                            <span>{article.views}</span>
                            <span>{article.readTime}</span>
                          </div>
                          <div className="flex items-center mt-2">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="text-sm text-gray-600">{article.rating}</span>
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400 ml-4" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Video Tutorials */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Video Tutorials</h3>
                <p className="text-gray-600">Step-by-step video guides to get you started.</p>
              </div>
              
              <div className="space-y-6">
                {videoTutorials.map((video, index) => (
                  <Card key={index} hover className="cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="relative flex-shrink-0">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-24 h-16 object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
                            <PlayCircle className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">{video.title}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                              {video.category}
                            </span>
                            <span>{video.duration}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
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
              Quick answers to common questions about TrueFans JAM.
            </p>
          </motion.div>

          {/* FAQ Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory('all')}
            >
              All
            </Button>
            {supportCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.title}
              </Button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader
                    className="cursor-pointer"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-left">{faq.question}</CardTitle>
                      {expandedFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </CardHeader>
                  {expandedFaq === index && (
                    <CardContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Status */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              System Status
            </h2>
            <p className="text-xl text-gray-600">
              Real-time status of all TrueFans JAM services.
            </p>
          </motion.div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Platform Status</CardTitle>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-green-600 font-medium capitalize">{systemStatus.overall}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemStatus.services.map((service, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-900">{service.name}</span>
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-2 ${
                        service.status === 'operational' ? 'bg-green-500' : 
                        service.status === 'degraded' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}></div>
                      <span className={`text-sm font-medium capitalize ${
                        service.status === 'operational' ? 'text-green-600' : 
                        service.status === 'degraded' ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {service.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Status Page
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
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
              Still Need Help?
            </h2>
            <p className="text-xl text-primary-100">
              Our support team is standing by to help you succeed on TrueFans JAM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={() => handleContactSupport('Live Chat')}>
                <MessageCircle className="h-5 w-5 mr-2" />
                Start Live Chat
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                <Mail className="h-5 w-5 mr-2" />
                Email Support
              </Button>
            </div>
            <div className="bg-primary-700 rounded-lg p-6 text-left max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-white mb-3">Emergency Support</h3>
              <p className="text-primary-100 text-sm mb-4">
                For urgent safety concerns or critical technical issues during live events, 
                contact our emergency support line available 24/7.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                <Phone className="h-4 w-4 mr-2" />
                Emergency Hotline: (555) 911-HELP
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Support
