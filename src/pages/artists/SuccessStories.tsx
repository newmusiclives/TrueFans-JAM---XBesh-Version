import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card'
import { 
  Music, 
  Star, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Quote,
  Play,
  ExternalLink,
  MapPin,
  Calendar,
  ArrowLeft,
  Filter,
  Search,
  Heart,
  Share2,
  Bookmark
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const SuccessStories: React.FC = () => {
  const navigate = useNavigate()
  const [selectedGenre, setSelectedGenre] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const featuredStories = [
    {
      id: 1,
      artist: "Luna Rivers",
      genre: "Indie Folk",
      location: "Portland, OR",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      story: "From playing coffee shops to selling out intimate venues across the Pacific Northwest",
      stats: {
        shows: 47,
        earnings: "$12,400",
        followers: "2,847",
        rating: 4.9
      },
      quote: "TrueFans JAM transformed my career. The intimate connections I've made through house concerts have created a loyal fanbase that follows me everywhere.",
      achievements: [
        "Booked 47 house concerts in 8 months",
        "Built a following of 2,800+ dedicated fans",
        "Earned $12,400 in performance fees",
        "Signed with indie label after viral house concert video"
      ],
      videoUrl: "https://example.com/luna-story",
      featured: true,
      likes: 342,
      shares: 89
    },
    {
      id: 2,
      artist: "The Midnight Collective",
      genre: "Alternative Rock",
      location: "Seattle, WA",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      story: "How a garage band became the most sought-after house concert act in Seattle",
      stats: {
        shows: 32,
        earnings: "$18,600",
        followers: "4,200",
        rating: 4.8
      },
      quote: "House concerts gave us the freedom to experiment with our sound and connect with fans on a personal level. It's changed everything about how we approach music.",
      achievements: [
        "Performed 32 sold-out house concerts",
        "Average of 35 attendees per show",
        "Featured in Seattle Times music section",
        "Launched successful crowdfunding campaign"
      ],
      likes: 278,
      shares: 56
    },
    {
      id: 3,
      artist: "Acoustic Dreams",
      genre: "Singer-Songwriter",
      location: "San Francisco, CA",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      story: "Solo artist builds sustainable music career through intimate performances",
      stats: {
        shows: 28,
        earnings: "$8,900",
        followers: "1,650",
        rating: 4.9
      },
      quote: "I was struggling to make ends meet playing traditional venues. House concerts changed my life - now I can focus on music full-time.",
      achievements: [
        "Quit day job to pursue music full-time",
        "Built recurring monthly shows with loyal hosts",
        "Released album funded by house concert earnings",
        "Mentoring other artists on the platform"
      ],
      likes: 195,
      shares: 34
    },
    {
      id: 4,
      artist: "Jazz Fusion Trio",
      genre: "Jazz",
      location: "New York, NY",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      story: "Bringing sophisticated jazz to intimate living room settings",
      stats: {
        shows: 24,
        earnings: "$15,200",
        followers: "1,890",
        rating: 4.9
      },
      quote: "House concerts allow us to share the stories behind our music and create an educational experience alongside entertainment.",
      achievements: [
        "Performed at 24 exclusive house concerts",
        "Developed signature 'Jazz & Stories' format",
        "Featured in Jazz Monthly magazine",
        "Teaching masterclasses at house concerts"
      ],
      likes: 156,
      shares: 23
    }
  ]

  const quickStats = [
    { label: "Average Monthly Earnings", value: "$2,400", description: "For active artists" },
    { label: "Fan Retention Rate", value: "87%", description: "Fans attend multiple shows" },
    { label: "Booking Success Rate", value: "94%", description: "Requests that get booked" },
    { label: "Artist Satisfaction", value: "4.8/5", description: "Average platform rating" }
  ]

  const successTips = [
    {
      title: "Build Authentic Connections",
      description: "Focus on creating genuine relationships with hosts and audiences rather than just performing.",
      icon: <Users className="h-5 w-5" />
    },
    {
      title: "Consistency is Key",
      description: "Regular performances and reliable communication build trust and repeat bookings.",
      icon: <Calendar className="h-5 w-5" />
    },
    {
      title: "Engage Your Audience",
      description: "Tell stories, take requests, and make each performance feel personal and unique.",
      icon: <Music className="h-5 w-5" />
    },
    {
      title: "Professional Presentation",
      description: "High-quality photos, detailed profiles, and prompt responses make a huge difference.",
      icon: <Star className="h-5 w-5" />
    }
  ]

  const milestones = [
    { milestone: "First House Concert", artists: "2,847", description: "Artists who've performed their first show" },
    { milestone: "10+ Shows", artists: "1,203", description: "Artists with 10 or more performances" },
    { milestone: "$1,000+ Earned", artists: "892", description: "Artists who've earned over $1,000" },
    { milestone: "50+ Shows", artists: "156", description: "Our most active performers" }
  ]

  const handleBackToDashboard = () => {
    navigate('/artist-dashboard')
    window.scrollTo(0, 0)
  }

  const handleWatchStory = (story: any) => {
    toast.success(`Playing ${story.artist}'s success story video...`)
  }

  const handleLikeStory = (story: any) => {
    toast.success(`Liked ${story.artist}'s story!`)
  }

  const handleShareStory = (story: any) => {
    toast.success(`Sharing ${story.artist}'s story...`)
  }

  const handleBookmarkStory = (story: any) => {
    toast.success(`Bookmarked ${story.artist}'s story!`)
  }

  const handleStartJourney = () => {
    navigate('/artist/find-venues')
    toast.success('Let\'s find your first venue!')
  }

  const handleViewAllStories = () => {
    toast.info('Loading all success stories...')
  }

  const handleSearch = () => {
    toast.info(`Searching stories for "${searchTerm}"...`)
  }

  const filteredStories = featuredStories.filter(story => {
    const matchesGenre = selectedGenre === 'all' || story.genre.toLowerCase().includes(selectedGenre.toLowerCase())
    const matchesSearch = searchTerm === '' || 
      story.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.story.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesGenre && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={handleBackToDashboard}
                className="mr-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <div className="bg-primary-600 p-2 rounded-lg">
                <Music className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-display font-bold text-gray-900">Success Stories</h1>
                <p className="text-sm text-gray-600">Real artists, real success on TrueFans JAM</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Artist Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how artists are building thriving careers through intimate house concerts. 
            From first-time performers to seasoned professionals, see what's possible on TrueFans JAM.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow-sm p-6 mb-8"
        >
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search artists or stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <select 
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Genres</option>
              <option value="indie">Indie Folk</option>
              <option value="rock">Alternative Rock</option>
              <option value="singer">Singer-Songwriter</option>
              <option value="jazz">Jazz</option>
            </select>
            <Button onClick={handleSearch}>
              <Filter className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <section className="mb-16">
          <div className="grid md:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                    <div className="font-medium text-gray-900 mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Success Stories */}
        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">Featured Success Stories</h2>
          <div className="space-y-8">
            {filteredStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="overflow-hidden">
                  <div className="grid lg:grid-cols-3 gap-0">
                    <div className="relative">
                      <img
                        src={story.image}
                        alt={story.artist}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      {story.featured && (
                        <div className="absolute top-4 left-4 bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </div>
                      )}
                      {story.videoUrl && (
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                          <Button variant="secondary" size="sm" onClick={() => handleWatchStory(story)}>
                            <Play className="h-4 w-4 mr-2" />
                            Watch Story
                          </Button>
                        </div>
                      )}
                    </div>
                    
                    <div className="lg:col-span-2 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{story.artist}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>{story.genre}</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {story.location}
                            </span>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 text-yellow-400 fill-current" />
                              <span>{story.stats.rating}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline" onClick={() => handleLikeStory(story)}>
                            <Heart className="h-3 w-3 mr-1" />
                            {story.likes}
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleShareStory(story)}>
                            <Share2 className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleBookmarkStory(story)}>
                            <Bookmark className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4 font-medium">{story.story}</p>

                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <Quote className="h-5 w-5 text-primary-600 mb-2" />
                        <blockquote className="text-gray-700 italic">
                          "{story.quote}"
                        </blockquote>
                      </div>

                      <div className="grid grid-cols-4 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-900">{story.stats.shows}</div>
                          <div className="text-xs text-gray-600">Shows</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600">{story.stats.earnings}</div>
                          <div className="text-xs text-gray-600">Earned</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">{story.stats.followers}</div>
                          <div className="text-xs text-gray-600">Followers</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-yellow-600">{story.stats.rating}</div>
                          <div className="text-xs text-gray-600">Rating</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {story.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Success Tips */}
        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">Keys to Success</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {successTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-100 text-primary-600 p-3 rounded-lg">
                        {tip.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                        <p className="text-gray-600">{tip.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Milestone Achievements */}
        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">Community Milestones</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.milestone}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.artists}</div>
                    <div className="font-medium text-gray-900 mb-1">{milestone.milestone}</div>
                    <div className="text-sm text-gray-600">{milestone.description}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-50 rounded-2xl p-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <TrendingUp className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of artists who are building sustainable music careers through intimate house concerts. 
              Your success story could be next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleStartJourney}>
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" onClick={handleViewAllStories}>
                <ExternalLink className="h-4 w-4 mr-2" />
                View All Stories
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

export default SuccessStories
