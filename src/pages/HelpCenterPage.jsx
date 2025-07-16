import React, { useState } from 'react'
import Layout from '../components/Layout'
import { Search, ChevronDown, ChevronRight, Book, Users, DollarSign, Settings, Headphones, MessageCircle } from 'lucide-react'

const HelpCenterPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedCategory, setExpandedCategory] = useState(null)

  const categories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Book,
      description: 'New to TrueFans JAM? Start here',
      articles: [
        {
          title: 'How to create your artist profile',
          content: 'Learn how to set up your profile, upload music, and showcase your unique style to attract the right fans.'
        },
        {
          title: 'Understanding the fan matching system',
          content: 'Discover how our AI-powered algorithm connects you with fans who genuinely love your genre and style.'
        },
        {
          title: 'Booking your first performance',
          content: 'Step-by-step guide to finding venues, connecting with hosts, and scheduling your debut performance.'
        },
        {
          title: 'Setting up payment and earnings',
          content: 'Configure your payment methods and understand how earnings are calculated and distributed.'
        }
      ]
    },
    {
      id: 'for-artists',
      title: 'For Artists',
      icon: Users,
      description: 'Everything artists need to know',
      articles: [
        {
          title: 'Maximizing your earnings potential',
          content: 'Tips and strategies to increase donations, build a loyal fanbase, and create sustainable income streams.'
        },
        {
          title: 'Performance best practices',
          content: 'Guidelines for delivering memorable performances that keep fans coming back and referring friends.'
        },
        {
          title: 'Building your fan community',
          content: 'Learn how to engage with fans before, during, and after performances to build lasting relationships.'
        },
        {
          title: 'Managing your schedule and availability',
          content: 'Use our scheduling tools effectively to balance performances with your creative time and personal life.'
        },
        {
          title: 'Promoting your performances',
          content: 'Marketing strategies to fill your shows and attract new fans through social media and word-of-mouth.'
        }
      ]
    },
    {
      id: 'for-hosts',
      title: 'For Hosts',
      icon: Settings,
      description: 'Host network guidelines and support',
      articles: [
        {
          title: 'Becoming a vetted host',
          content: 'Complete guide to the application process, requirements, and benefits of joining our host network.'
        },
        {
          title: 'Venue setup and requirements',
          content: 'Technical specifications, safety guidelines, and atmosphere tips for creating the perfect intimate venue.'
        },
        {
          title: 'Host earnings and referral system',
          content: 'Understand how you earn from hosted performances and the two-tier referral commission structure.'
        },
        {
          title: 'Managing bookings and artists',
          content: 'Best practices for communicating with artists, managing schedules, and ensuring smooth performances.'
        },
        {
          title: 'Creating memorable experiences',
          content: 'Tips for hospitality, ambiance, and fan engagement that make your venue a favorite destination.'
        }
      ]
    },
    {
      id: 'payments',
      title: 'Payments & Earnings',
      icon: DollarSign,
      description: 'Financial questions and support',
      articles: [
        {
          title: 'Understanding the revenue model',
          content: 'Detailed breakdown of the 70/20/10 split and how referral commissions work for hosts.'
        },
        {
          title: 'Payment schedules and methods',
          content: 'When and how you receive payments, available payment methods, and international considerations.'
        },
        {
          title: 'Tax reporting and documentation',
          content: 'What tax documents you\'ll receive and your responsibilities for reporting income to tax authorities.'
        },
        {
          title: 'Dispute resolution and refunds',
          content: 'How to handle payment disputes, request refunds, and resolve financial issues.'
        },
        {
          title: 'Currency and international payments',
          content: 'Information for international users about currency conversion, fees, and payment processing.'
        }
      ]
    }
  ]

  const quickActions = [
    {
      title: 'Contact Support',
      description: 'Get personalized help from our team',
      icon: Headphones,
      action: 'Email support@truefansjam.com'
    },
    {
      title: 'Live Chat',
      description: 'Chat with us during business hours',
      icon: MessageCircle,
      action: 'Available Mon-Fri 9AM-6PM CT'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other artists and hosts',
      icon: Users,
      action: 'Join our Discord community'
    }
  ]

  const filteredCategories = categories.map(category => ({
    ...category,
    articles: category.articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.articles.length > 0 || searchQuery === '')

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
  }

  return (
    <Layout 
      title="Help Center" 
      description="Find answers to your questions and get the support you need"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Need Immediate Help?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{action.description}</p>
                <p className="text-purple-600 font-semibold text-sm">{action.action}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Help Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Browse Help Topics</h2>
          <div className="space-y-4">
            {filteredCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-xl shadow-lg border border-gray-200">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
                      <p className="text-gray-600 text-sm">{category.description}</p>
                    </div>
                  </div>
                  {expandedCategory === category.id ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                
                {expandedCategory === category.id && (
                  <div className="px-6 pb-4">
                    <div className="space-y-3">
                      {category.articles.map((article, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">{article.title}</h4>
                          <p className="text-gray-600 text-sm">{article.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Most Popular Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How to maximize your earnings as an artist</h3>
              <p className="text-gray-600 mb-4">
                Learn proven strategies to increase donations, build a loyal fanbase, and create multiple revenue streams through the platform.
              </p>
              <button className="text-purple-600 font-semibold hover:underline">Read full article →</button>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Setting up the perfect intimate venue</h3>
              <p className="text-gray-600 mb-4">
                Complete guide for hosts on creating the ideal atmosphere, technical setup, and safety considerations for memorable performances.
              </p>
              <button className="text-purple-600 font-semibold hover:underline">Read full article →</button>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Understanding the revenue sharing model</h3>
              <p className="text-gray-600 mb-4">
                Detailed breakdown of how the 70/20/10 split works and how hosts can earn through the referral system.
              </p>
              <button className="text-purple-600 font-semibold hover:underline">Read full article →</button>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Building authentic fan relationships</h3>
              <p className="text-gray-600 mb-4">
                Tips for artists on engaging with fans before, during, and after performances to create lasting connections.
              </p>
              <button className="text-purple-600 font-semibold hover:underline">Read full article →</button>
            </div>
          </div>
        </div>

        {/* Still Need Help */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
            <p className="text-purple-200 mb-6">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Support
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HelpCenterPage
