import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card'
import { 
  ArrowLeft, 
  BookOpen, 
  Video, 
  Download, 
  ExternalLink, 
  Star,
  Clock,
  Users,
  Play,
  FileText,
  Headphones,
  Camera,
  Mic,
  Music,
  TrendingUp,
  DollarSign,
  Shield
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const ArtistResources: React.FC = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('all')

  const resourceCategories = [
    { id: 'all', label: 'All Resources', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'performance', label: 'Performance Tips', icon: <Music className="h-4 w-4" /> },
    { id: 'business', label: 'Business & Marketing', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'technical', label: 'Technical Setup', icon: <Mic className="h-4 w-4" /> },
    { id: 'legal', label: 'Legal & Contracts', icon: <Shield className="h-4 w-4" /> }
  ]

  const resources = [
    {
      id: 1,
      title: 'The Complete Guide to House Concerts',
      description: 'Everything you need to know about performing in intimate venues and connecting with audiences.',
      type: 'Guide',
      category: 'performance',
      duration: '15 min read',
      rating: 4.9,
      downloads: 1247,
      icon: <BookOpen className="h-5 w-5" />,
      color: 'bg-blue-100 text-blue-600',
      featured: true
    },
    {
      id: 2,
      title: 'Setting Up Your Home Studio',
      description: 'Professional recording tips and equipment recommendations for artists on a budget.',
      type: 'Video Tutorial',
      category: 'technical',
      duration: '22 min',
      rating: 4.8,
      downloads: 892,
      icon: <Video className="h-5 w-5" />,
      color: 'bg-purple-100 text-purple-600',
      featured: true
    },
    {
      id: 3,
      title: 'Building Your Fan Base',
      description: 'Proven strategies for growing your audience and increasing engagement on social media.',
      type: 'Webinar',
      category: 'business',
      duration: '45 min',
      rating: 4.7,
      downloads: 1534,
      icon: <Users className="h-5 w-5" />,
      color: 'bg-green-100 text-green-600',
      featured: true
    },
    {
      id: 4,
      title: 'Performance Contract Template',
      description: 'Professional contract template to protect your interests when booking shows.',
      type: 'Template',
      category: 'legal',
      duration: 'Download',
      rating: 4.9,
      downloads: 756,
      icon: <FileText className="h-5 w-5" />,
      color: 'bg-yellow-100 text-yellow-600',
      featured: false
    },
    {
      id: 5,
      title: 'Pricing Your Performances',
      description: 'How to determine fair pricing for different types of venues and audiences.',
      type: 'Guide',
      category: 'business',
      duration: '8 min read',
      rating: 4.6,
      downloads: 623,
      icon: <DollarSign className="h-5 w-5" />,
      color: 'bg-green-100 text-green-600',
      featured: false
    },
    {
      id: 6,
      title: 'Sound Check Best Practices',
      description: 'Essential tips for getting the best sound quality at any venue.',
      type: 'Audio Guide',
      category: 'technical',
      duration: '12 min',
      rating: 4.8,
      downloads: 445,
      icon: <Headphones className="h-5 w-5" />,
      color: 'bg-purple-100 text-purple-600',
      featured: false
    },
    {
      id: 7,
      title: 'Stage Presence Masterclass',
      description: 'Develop confidence and charisma to captivate any audience.',
      type: 'Video Course',
      category: 'performance',
      duration: '1.5 hours',
      rating: 4.9,
      downloads: 1089,
      icon: <Camera className="h-5 w-5" />,
      color: 'bg-red-100 text-red-600',
      featured: false
    },
    {
      id: 8,
      title: 'Tax Guide for Musicians',
      description: 'Understanding deductions, expenses, and tax obligations for performing artists.',
      type: 'PDF Guide',
      category: 'legal',
      duration: '20 min read',
      rating: 4.5,
      downloads: 334,
      icon: <FileText className="h-5 w-5" />,
      color: 'bg-yellow-100 text-yellow-600',
      featured: false
    }
  ]

  const quickTips = [
    {
      title: 'Arrive Early',
      description: 'Always arrive 30-60 minutes before your performance to set up and sound check.',
      icon: <Clock className="h-5 w-5" />
    },
    {
      title: 'Engage Your Audience',
      description: 'Tell stories between songs and make eye contact to create connection.',
      icon: <Users className="h-5 w-5" />
    },
    {
      title: 'Prepare Your Setlist',
      description: 'Plan your songs in advance and have backup options ready.',
      icon: <Music className="h-5 w-5" />
    },
    {
      title: 'Bring Business Cards',
      description: 'Always have contact information ready for potential future bookings.',
      icon: <FileText className="h-5 w-5" />
    }
  ]

  const handleDownloadResource = (resource: any) => {
    toast.success(`Downloading "${resource.title}"...`)
  }

  const handleViewResource = (resource: any) => {
    toast.info(`Opening "${resource.title}"`)
  }

  const handleBookConsultation = () => {
    toast.info('Opening consultation booking...')
  }

  const handleJoinCommunity = () => {
    toast.info('Redirecting to artist community...')
  }

  const filteredResources = resources.filter(resource => 
    selectedCategory === 'all' || resource.category === selectedCategory
  )

  const featuredResources = resources.filter(resource => resource.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/artist/dashboard')}
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-xl font-display font-bold text-gray-900">
                  Artist Resources
                </h1>
                <p className="text-sm text-gray-600">
                  Tools and guides to help you succeed
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleBookConsultation}>
                <Video className="h-4 w-4 mr-2" />
                Book Consultation
              </Button>
              <Button size="sm" onClick={handleJoinCommunity}>
                <Users className="h-4 w-4 mr-2" />
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Resources */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg ${resource.color}`}>
                        {resource.icon}
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{resource.type}</span>
                      <span>{resource.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{resource.rating}</span>
                        <span className="text-sm text-gray-500">({resource.downloads})</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => handleViewResource(resource)}>
                          {resource.type.includes('Video') ? <Play className="h-3 w-3" /> : <ExternalLink className="h-3 w-3" />}
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleDownloadResource(resource)}>
                          <Download className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Filter */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {resourceCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-blue-100 text-blue-700'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {category.icon}
                      {category.label}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quick Tips</CardTitle>
                <CardDescription>
                  Essential advice for every performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {quickTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-blue-100 text-blue-600 p-2 rounded-lg flex-shrink-0">
                        {tip.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">{tip.title}</h4>
                        <p className="text-gray-600 text-xs mt-1">{tip.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Resources List */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                All Resources ({filteredResources.length})
              </h2>
            </div>

            <div className="space-y-4">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4 flex-1">
                          <div className={`p-3 rounded-lg ${resource.color} flex-shrink-0`}>
                            {resource.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                              <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                                {resource.type}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-3">{resource.description}</p>
                            <div className="flex items-center gap-6 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {resource.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="h-3 w-3 text-yellow-400 fill-current" />
                                {resource.rating}
                              </div>
                              <div className="flex items-center gap-1">
                                <Download className="h-3 w-3" />
                                {resource.downloads} downloads
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button size="sm" onClick={() => handleViewResource(resource)}>
                            {resource.type.includes('Video') ? (
                              <>
                                <Play className="h-3 w-3 mr-1" />
                                Watch
                              </>
                            ) : (
                              <>
                                <ExternalLink className="h-3 w-3 mr-1" />
                                View
                              </>
                            )}
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleDownloadResource(resource)}>
                            <Download className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredResources.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No resources found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try selecting a different category
                </p>
                <Button onClick={() => setSelectedCategory('all')}>
                  View All Resources
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistResources
