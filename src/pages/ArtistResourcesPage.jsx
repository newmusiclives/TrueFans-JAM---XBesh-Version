import React, { useState } from 'react'
import Layout from '../components/Layout'
import { 
  BookOpen, 
  Video, 
  Download, 
  Users, 
  Mic, 
  Camera, 
  Music, 
  TrendingUp, 
  DollarSign, 
  MessageCircle, 
  FileText, 
  Play,
  ExternalLink,
  ChevronRight,
  Star,
  Clock,
  Award
} from 'lucide-react'

const ArtistResourcesPage = () => {
  const [activeCategory, setActiveCategory] = useState('getting-started')

  const categories = [
    { id: 'getting-started', label: 'Getting Started', icon: Play },
    { id: 'performance', label: 'Performance Tips', icon: Mic },
    { id: 'marketing', label: 'Marketing & Growth', icon: TrendingUp },
    { id: 'technical', label: 'Technical Setup', icon: Camera },
    { id: 'business', label: 'Business & Finance', icon: DollarSign },
    { id: 'community', label: 'Community', icon: Users }
  ]

  const resources = {
    'getting-started': [
      {
        title: 'Artist Onboarding Guide',
        description: 'Complete step-by-step guide to setting up your TrueFans JAM profile and booking your first show.',
        type: 'guide',
        duration: '15 min read',
        difficulty: 'Beginner',
        featured: true
      },
      {
        title: 'Creating Your Perfect Artist Profile',
        description: 'Learn how to craft a compelling profile that attracts fans and hosts.',
        type: 'video',
        duration: '12 min',
        difficulty: 'Beginner'
      },
      {
        title: 'Understanding the TrueFans JAM Platform',
        description: 'Overview of how the platform works, revenue splits, and what to expect.',
        type: 'article',
        duration: '8 min read',
        difficulty: 'Beginner'
      },
      {
        title: 'Your First Show Checklist',
        description: 'Downloadable checklist to ensure your first performance goes smoothly.',
        type: 'download',
        duration: '2 pages',
        difficulty: 'Beginner'
      }
    ],
    'performance': [
      {
        title: 'Intimate Performance Mastery',
        description: 'Techniques for connecting with small audiences and creating memorable experiences.',
        type: 'video',
        duration: '25 min',
        difficulty: 'Intermediate',
        featured: true
      },
      {
        title: 'Setlist Planning for House Concerts',
        description: 'How to structure your performance for intimate venues and diverse audiences.',
        type: 'guide',
        duration: '10 min read',
        difficulty: 'Beginner'
      },
      {
        title: 'Engaging Your Audience',
        description: 'Storytelling techniques and audience interaction strategies.',
        type: 'article',
        duration: '12 min read',
        difficulty: 'Intermediate'
      },
      {
        title: 'Sound Check Best Practices',
        description: 'Essential tips for quick and effective sound checks in home venues.',
        type: 'guide',
        duration: '6 min read',
        difficulty: 'Beginner'
      }
    ],
    'marketing': [
      {
        title: 'Building Your Fanbase on TrueFans JAM',
        description: 'Proven strategies to grow your following and increase bookings.',
        type: 'course',
        duration: '45 min',
        difficulty: 'Intermediate',
        featured: true
      },
      {
        title: 'Social Media Integration',
        description: 'How to leverage your existing social media to promote TrueFans JAM shows.',
        type: 'guide',
        duration: '15 min read',
        difficulty: 'Beginner'
      },
      {
        title: 'Email Marketing for Musicians',
        description: 'Build and maintain relationships with your audience through email.',
        type: 'template',
        duration: '5 templates',
        difficulty: 'Intermediate'
      },
      {
        title: 'Cross-Promotion Strategies',
        description: 'Collaborate with other artists and hosts to expand your reach.',
        type: 'article',
        duration: '10 min read',
        difficulty: 'Advanced'
      }
    ],
    'technical': [
      {
        title: 'Home Venue Audio Setup',
        description: 'Complete guide to setting up professional sound in residential spaces.',
        type: 'video',
        duration: '30 min',
        difficulty: 'Intermediate',
        featured: true
      },
      {
        title: 'Equipment Recommendations',
        description: 'Curated list of portable equipment perfect for house concerts.',
        type: 'guide',
        duration: '12 min read',
        difficulty: 'Beginner'
      },
      {
        title: 'Lighting for Intimate Performances',
        description: 'Simple lighting techniques to enhance your performance atmosphere.',
        type: 'article',
        duration: '8 min read',
        difficulty: 'Beginner'
      },
      {
        title: 'Recording Your Shows',
        description: 'How to capture high-quality recordings for promotional use.',
        type: 'guide',
        duration: '18 min read',
        difficulty: 'Advanced'
      }
    ],
    'business': [
      {
        title: 'Maximizing Your Revenue',
        description: 'Advanced strategies for increasing earnings through TrueFans JAM.',
        type: 'course',
        duration: '60 min',
        difficulty: 'Advanced',
        featured: true
      },
      {
        title: 'Tax Considerations for Musicians',
        description: 'Important tax information for independent artists earning through the platform.',
        type: 'guide',
        duration: '20 min read',
        difficulty: 'Intermediate'
      },
      {
        title: 'Building Multiple Revenue Streams',
        description: 'How to diversify your income beyond just performance fees.',
        type: 'article',
        duration: '15 min read',
        difficulty: 'Advanced'
      },
      {
        title: 'Referral Program Mastery',
        description: 'Maximize your passive income through strategic referrals.',
        type: 'guide',
        duration: '10 min read',
        difficulty: 'Intermediate'
      }
    ],
    'community': [
      {
        title: 'Artist Community Guidelines',
        description: 'How to be a positive member of the TrueFans JAM artist community.',
        type: 'guide',
        duration: '8 min read',
        difficulty: 'Beginner',
        featured: true
      },
      {
        title: 'Networking with Other Artists',
        description: 'Build meaningful connections and collaboration opportunities.',
        type: 'article',
        duration: '12 min read',
        difficulty: 'Beginner'
      },
      {
        title: 'Host Relationship Best Practices',
        description: 'How to build lasting relationships with venue hosts.',
        type: 'guide',
        duration: '10 min read',
        difficulty: 'Intermediate'
      },
      {
        title: 'Community Events & Workshops',
        description: 'Stay updated on upcoming community events and learning opportunities.',
        type: 'calendar',
        duration: 'Ongoing',
        difficulty: 'All Levels'
      }
    ]
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return Video
      case 'guide': return BookOpen
      case 'download': return Download
      case 'course': return Award
      case 'template': return FileText
      case 'calendar': return Clock
      default: return FileText
    }
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const featuredResources = Object.values(resources)
    .flat()
    .filter(resource => resource.featured)

  return (
    <Layout 
      title="Artist Resources" 
      description="Everything you need to succeed as an artist on TrueFans JAM"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Artist Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guides, tutorials, and tools to help you thrive as an independent artist on TrueFans JAM.
          </p>
        </div>

        {/* Featured Resources */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredResources.map((resource, index) => {
              const TypeIcon = getTypeIcon(resource.type)
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <TypeIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm text-gray-600">Featured</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                        {resource.difficulty}
                      </span>
                      <span className="text-xs text-gray-500">{resource.duration}</span>
                    </div>
                    <button className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center">
                      Access <ExternalLink className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Resource Categories */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              <nav className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors ${
                        activeCategory === category.id
                          ? 'bg-purple-100 text-purple-700 border border-purple-200'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-3" />
                      <span className="text-sm font-medium">{category.label}</span>
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Resource List */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {categories.find(cat => cat.id === activeCategory)?.label}
              </h2>
              
              <div className="space-y-6">
                {resources[activeCategory]?.map((resource, index) => {
                  const TypeIcon = getTypeIcon(resource.type)
                  return (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-purple-300 hover:shadow-md transition-all">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                              <TypeIcon className="w-5 h-5 text-gray-600" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-gray-900">{resource.title}</h3>
                              <div className="flex items-center space-x-3 mt-1">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                                  {resource.difficulty}
                                </span>
                                <span className="text-xs text-gray-500 flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {resource.duration}
                                </span>
                                <span className="text-xs text-gray-500 capitalize">{resource.type}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4">{resource.description}</p>
                        </div>
                        <button className="ml-6 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
                          Access <ExternalLink className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-8 text-white">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Need Personal Help?</h3>
            <p className="text-purple-200 mb-6">
              Our artist success team is here to help you succeed. Get personalized guidance and support.
            </p>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Contact Support
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join the Community</h3>
            <p className="text-gray-600 mb-6">
              Connect with other artists, share experiences, and learn from the community.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
              Join Discord
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Resource Library Stats</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Guides & Articles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-gray-600">Video Tutorials</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Downloadable Resources</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">Weekly</div>
              <div className="text-gray-600">New Content</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ArtistResourcesPage
