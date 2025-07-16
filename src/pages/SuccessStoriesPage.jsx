import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Music, 
  Users, 
  MapPin, 
  Calendar, 
  DollarSign,
  Route,
  CheckCircle,
  Star,
  Car,
  Home,
  Phone,
  Mail,
  ArrowRight,
  Play,
  Shield,
  Zap,
  Crown,
  Heart,
  Sparkles,
  TrendingUp,
  Award,
  Globe,
  Headphones,
  Volume2,
  Mic,
  Coffee,
  Camera,
  ChevronDown
} from 'lucide-react'
import Layout from '../components/Layout'

const SuccessStoriesPage = () => {
  const [selectedStory, setSelectedStory] = useState(null)
  const [filterGenre, setFilterGenre] = useState('all')
  const [sortBy, setSortBy] = useState('earnings')

  const successStories = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      genre: 'indie-folk',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      location: 'Portland, OR',
      tourName: 'Pacific Northwest Connection Tour',
      stats: {
        tours: 3,
        totalEarnings: 47000,
        cities: 18,
        shows: 42,
        newFans: 1200,
        avgAttendance: 35
      },
      story: "I was struggling to book shows outside my local scene when I discovered TrueFans JAM's AI tour planner. I uploaded my email list of 800 fans and set my tour parameters - I wanted to stay within 250 miles of Portland and do 3 shows before a rest day. The AI mapped out an incredible 2-week tour through Washington and Northern California, connecting me with fans I'd never met who became amazing hosts. My first AI-planned tour earned me $12,000 and introduced me to 400 new fans. Three tours later, I've built a sustainable touring career.",
      highlights: [
        'First AI tour earned $12,000 in 2 weeks',
        'Connected with 47 fan hosts across 3 states',
        'Average show attendance increased from 15 to 35',
        'Built lasting relationships with host families',
        'Reduced touring costs by 40% through smart routing'
      ],
      quote: "The AI tour planner changed everything. It mapped a 3-week tour through my fan base that earned me $12,000 and connected me with 400+ new fans.",
      beforeAfter: {
        before: {
          monthlyShows: 2,
          avgEarnings: 800,
          travelCosts: 600,
          fanGrowth: 20
        },
        after: {
          monthlyShows: 8,
          avgEarnings: 3200,
          travelCosts: 400,
          fanGrowth: 150
        }
      }
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      genre: 'singer-songwriter',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      location: 'Austin, TX',
      tourName: 'Southern Stories Tour',
      stats: {
        tours: 2,
        totalEarnings: 31200,
        cities: 14,
        shows: 28,
        newFans: 850,
        avgAttendance: 28
      },
      story: "As a bilingual singer-songwriter, I wanted to connect with Latino communities across the South, but traditional booking was nearly impossible. TrueFans JAM's AI system analyzed my fan base and identified clusters of supporters in cities I'd never considered. The fan email campaign revealed incredible enthusiasm - 52 fans offered to host shows! The AI created a route through Texas, Louisiana, and New Mexico that honored my travel preferences while maximizing connections. Each show felt like a family gathering, and I earned more in one month than I had in the previous six.",
      highlights: [
        'Discovered hidden fan communities in 6 states',
        '52 fans volunteered to host shows',
        'Earned $15,600 per AI-optimized tour',
        'Connected with Latino music communities',
        'Built network of recurring host venues'
      ],
      quote: "I uploaded my email list and TrueFans JAM created a perfect tour route. My fans became hosts, and I played to packed rooms every night.",
      beforeAfter: {
        before: {
          monthlyShows: 3,
          avgEarnings: 1200,
          travelCosts: 800,
          fanGrowth: 30
        },
        after: {
          monthlyShows: 10,
          avgEarnings: 4200,
          travelCosts: 500,
          fanGrowth: 200
        }
      }
    },
    {
      id: 3,
      name: 'Luna Chen',
      genre: 'acoustic-pop',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      location: 'San Francisco, CA',
      tourName: 'West Coast Wanderer Series',
      stats: {
        tours: 4,
        totalEarnings: 68400,
        cities: 23,
        shows: 64,
        newFans: 1800,
        avgAttendance: 42
      },
      story: "I'd been playing coffee shops for years but dreamed of touring. The AI tour planner transformed my career by turning my social media followers into real-world hosts. I started with a modest email list of 600 fans, and the AI identified 34 potential hosts from California to Seattle. What amazed me was how the algorithm balanced my preference for shorter drives with optimal revenue opportunities. My first tour was so successful that fans started requesting return visits. Four tours later, I have a network of host families who feel like extended family, and I'm earning enough to tour full-time.",
      highlights: [
        'Transformed 600 online fans into 34 hosts',
        'Built recurring host relationships across 4 states',
        'Achieved full-time touring income in 8 months',
        'Average show donations increased 300%',
        'Created sustainable 3-month touring cycles'
      ],
      quote: "The fan email integration is genius. My supporters became my tour hosts, creating the most authentic and profitable tour of my career.",
      beforeAfter: {
        before: {
          monthlyShows: 4,
          avgEarnings: 600,
          travelCosts: 400,
          fanGrowth: 25
        },
        after: {
          monthlyShows: 12,
          avgEarnings: 2800,
          travelCosts: 350,
          fanGrowth: 180
        }
      }
    },
    {
      id: 4,
      name: 'Jake Thompson',
      genre: 'americana',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      location: 'Nashville, TN',
      tourName: 'Heartland Highway Tour',
      stats: {
        tours: 5,
        totalEarnings: 89500,
        cities: 31,
        shows: 78,
        newFans: 2100,
        avgAttendance: 38
      },
      story: "After 10 years of struggling in Nashville's oversaturated market, I was ready to quit music. Then I tried TrueFans JAM's AI tour planner as a last resort. I had a decent email list from years of playing, but never knew how to leverage it for touring. The AI found 67 fans willing to host across the Midwest and South - regions I'd never toured because I didn't know anyone there. The route optimization was incredible, turning what could have been a chaotic road trip into an efficient, profitable tour. Five tours later, I'm making more money than I ever did trying to 'make it' in Nashville.",
      highlights: [
        'Leveraged 10 years of fan building for touring success',
        '67 fan hosts discovered across 12 states',
        'Escaped Nashville market saturation',
        'Built sustainable touring career outside major markets',
        'Increased annual income by 400%'
      ],
      quote: "TrueFans JAM saved my music career. The AI found fans I didn't know I had and turned them into a touring network that supports my family.",
      beforeAfter: {
        before: {
          monthlyShows: 6,
          avgEarnings: 1400,
          travelCosts: 900,
          fanGrowth: 40
        },
        after: {
          monthlyShows: 14,
          avgEarnings: 4800,
          travelCosts: 600,
          fanGrowth: 250
        }
      }
    },
    {
      id: 5,
      name: 'Emma Williams',
      genre: 'contemporary-folk',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      location: 'Denver, CO',
      tourName: 'Mountain to Plains Tour',
      stats: {
        tours: 3,
        totalEarnings: 52800,
        cities: 19,
        shows: 36,
        newFans: 980,
        avgAttendance: 45
      },
      story: "I was terrified of touring alone as a female artist, but TrueFans JAM's vetted host network gave me confidence. The AI didn't just plan my route - it connected me with screened, background-checked hosts who became my tour family. Each show felt safe and supported, with hosts who genuinely cared about my music and well-being. The fan email integration revealed supporters in small mountain towns I'd never have found otherwise. My Rocky Mountain tour was so successful that I now have standing invitations to return to 15 different host homes.",
      highlights: [
        'Safe, vetted host network for solo female touring',
        'Discovered fans in remote mountain communities',
        'Built trusted relationships with 15 recurring hosts',
        'Achieved highest per-show earnings of career',
        'Created sustainable touring model for solo artists'
      ],
      quote: "The vetted host network made solo touring possible for me. I found not just venues, but a family of supporters across the country.",
      beforeAfter: {
        before: {
          monthlyShows: 1,
          avgEarnings: 400,
          travelCosts: 300,
          fanGrowth: 15
        },
        after: {
          monthlyShows: 9,
          avgEarnings: 3600,
          travelCosts: 450,
          fanGrowth: 160
        }
      }
    },
    {
      id: 6,
      name: 'David Park',
      genre: 'indie-rock',
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      location: 'Seattle, WA',
      tourName: 'Pacific Circuit Tour',
      stats: {
        tours: 2,
        totalEarnings: 38400,
        cities: 16,
        shows: 32,
        newFans: 1100,
        avgAttendance: 32
      },
      story: "My band was stuck playing the same Seattle venues over and over. We had fans on social media from across the Pacific Northwest, but no way to reach them. TrueFans JAM's AI tour planner changed that completely. We uploaded our combined email lists and social media followers, and the system identified 43 potential hosts from Vancouver to San Francisco. The route optimization was brilliant - it created a logical flow that minimized travel time while hitting every major fan cluster. Our first AI tour doubled our previous best month's earnings and introduced us to markets we're now returning to regularly.",
      highlights: [
        'Broke out of local Seattle music scene',
        '43 fan hosts identified across Pacific Northwest',
        'Doubled best monthly earnings in single tour',
        'Established recurring tour circuit',
        'Built sustainable regional touring model'
      ],
      quote: "We went from playing the same Seattle clubs to having a touring circuit across three states. The AI found our fans and connected us directly.",
      beforeAfter: {
        before: {
          monthlyShows: 4,
          avgEarnings: 1600,
          travelCosts: 500,
          fanGrowth: 50
        },
        after: {
          monthlyShows: 12,
          avgEarnings: 4200,
          travelCosts: 700,
          fanGrowth: 220
        }
      }
    }
  ]

  const genres = [
    { value: 'all', label: 'All Genres' },
    { value: 'indie-folk', label: 'Indie Folk' },
    { value: 'singer-songwriter', label: 'Singer-Songwriter' },
    { value: 'acoustic-pop', label: 'Acoustic Pop' },
    { value: 'americana', label: 'Americana' },
    { value: 'contemporary-folk', label: 'Contemporary Folk' },
    { value: 'indie-rock', label: 'Indie Rock' }
  ]

  const sortOptions = [
    { value: 'earnings', label: 'Total Earnings' },
    { value: 'tours', label: 'Number of Tours' },
    { value: 'cities', label: 'Cities Visited' },
    { value: 'newFans', label: 'New Fans Gained' }
  ]

  const filteredAndSortedStories = successStories
    .filter(story => filterGenre === 'all' || story.genre === filterGenre)
    .sort((a, b) => {
      switch (sortBy) {
        case 'earnings':
          return b.stats.totalEarnings - a.stats.totalEarnings
        case 'tours':
          return b.stats.tours - a.stats.tours
        case 'cities':
          return b.stats.cities - a.stats.cities
        case 'newFans':
          return b.stats.newFans - a.stats.newFans
        default:
          return 0
      }
    })

  const totalStats = successStories.reduce((acc, story) => ({
    totalEarnings: acc.totalEarnings + story.stats.totalEarnings,
    totalTours: acc.totalTours + story.stats.tours,
    totalCities: acc.totalCities + story.stats.cities,
    totalShows: acc.totalShows + story.stats.shows,
    totalNewFans: acc.totalNewFans + story.stats.newFans
  }), { totalEarnings: 0, totalTours: 0, totalCities: 0, totalShows: 0, totalNewFans: 0 })

  return (
    <Layout 
      title="Success Stories" 
      description="Real artists, real results with AI-powered tour planning"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Tour Planning Success Stories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how independent artists are using our AI tour planner to build sustainable touring careers through their existing fan base.
          </p>
        </div>

        {/* Overall Stats */}
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 text-white mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Collective Impact</h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">${(totalStats.totalEarnings / 1000).toFixed(0)}K+</div>
              <div className="text-purple-200">Total Artist Earnings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">{totalStats.totalTours}</div>
              <div className="text-purple-200">AI Tours Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">{totalStats.totalCities}</div>
              <div className="text-purple-200">Cities Reached</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">{totalStats.totalShows}</div>
              <div className="text-purple-200">Shows Performed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">{(totalStats.totalNewFans / 1000).toFixed(1)}K+</div>
              <div className="text-purple-200">New Fans Connected</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Genre</label>
            <select
              value={filterGenre}
              onChange={(e) => setFilterGenre(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {genres.map(genre => (
                <option key={genre.value} value={genre.value}>{genre.label}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Sort by</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Success Stories Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredAndSortedStories.map((story) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                    <p className="text-gray-600 capitalize">{story.genre.replace('-', ' ')}</p>
                    <p className="text-sm text-gray-500 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {story.location}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">${(story.stats.totalEarnings / 1000).toFixed(0)}K</div>
                    <div className="text-sm text-green-700">Total Earnings</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">{story.stats.tours}</div>
                    <div className="text-sm text-blue-700">AI Tours</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">{story.stats.cities}</div>
                    <div className="text-sm text-purple-700">Cities</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600">{story.stats.newFans}</div>
                    <div className="text-sm text-orange-700">New Fans</div>
                  </div>
                </div>

                <blockquote className="text-gray-700 italic mb-6 border-l-4 border-purple-500 pl-4">
                  "{story.quote}"
                </blockquote>

                <button
                  onClick={() => setSelectedStory(story)}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center"
                >
                  Read Full Story <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Story Modal */}
        <AnimatePresence>
          {selectedStory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedStory(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <img
                        src={selectedStory.image}
                        alt={selectedStory.name}
                        className="w-20 h-20 rounded-full mr-6"
                      />
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{selectedStory.name}</h2>
                        <p className="text-gray-600 capitalize">{selectedStory.genre.replace('-', ' ')}</p>
                        <p className="text-gray-500 flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {selectedStory.location}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedStory(null)}
                      className="text-gray-400 hover:text-gray-600 text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">"{selectedStory.tourName}"</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">${selectedStory.stats.totalEarnings.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Total Earnings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{selectedStory.stats.shows}</div>
                        <div className="text-sm text-gray-600">Total Shows</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">{selectedStory.stats.avgAttendance}</div>
                        <div className="text-sm text-gray-600">Avg Attendance</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">The Story</h4>
                    <p className="text-gray-700 leading-relaxed">{selectedStory.story}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Key Highlights</h4>
                    <ul className="space-y-2">
                      {selectedStory.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-6">Before vs After AI Tour Planning</h4>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-bold text-red-600 mb-4">Before TrueFans JAM</h5>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Monthly Shows</span>
                            <span className="font-semibold">{selectedStory.beforeAfter.before.monthlyShows}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Avg Monthly Earnings</span>
                            <span className="font-semibold">${selectedStory.beforeAfter.before.avgEarnings}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Monthly Travel Costs</span>
                            <span className="font-semibold">${selectedStory.beforeAfter.before.travelCosts}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">New Fans/Month</span>
                            <span className="font-semibold">{selectedStory.beforeAfter.before.fanGrowth}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-bold text-green-600 mb-4">After AI Tour Planning</h5>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Monthly Shows</span>
                            <span className="font-semibold text-green-600">{selectedStory.beforeAfter.after.monthlyShows}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Avg Monthly Earnings</span>
                            <span className="font-semibold text-green-600">${selectedStory.beforeAfter.after.avgEarnings}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Monthly Travel Costs</span>
                            <span className="font-semibold text-green-600">${selectedStory.beforeAfter.after.travelCosts}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">New Fans/Month</span>
                            <span className="font-semibold text-green-600">{selectedStory.beforeAfter.after.fanGrowth}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Join hundreds of artists who've transformed their careers with AI-powered tour planning through their existing fan base.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/tour-planner"
              className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Plan My AI Tour
            </a>
            <a
              href="/artist-signup"
              className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-30 transition-all border border-white border-opacity-30"
            >
              Join as Artist
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SuccessStoriesPage
