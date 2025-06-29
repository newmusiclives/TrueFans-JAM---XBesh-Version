import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  Music, 
  Users, 
  TrendingUp,
  Heart,
  Mic,
  Home,
  Globe,
  Star,
  Tag,
  BookOpen,
  Filter
} from 'lucide-react'

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'artist-tips', name: 'Artist Tips', count: 8 },
    { id: 'host-guides', name: 'Host Guides', count: 6 },
    { id: 'industry-insights', name: 'Industry Insights', count: 5 },
    { id: 'success-stories', name: 'Success Stories', count: 3 },
    { id: 'platform-updates', name: 'Platform Updates', count: 2 }
  ]

  const featuredPost = {
    title: "The Future of Intimate Live Music: How House Concerts Are Reshaping the Industry",
    excerpt: "Explore how intimate venues are creating deeper artist-fan connections and generating sustainable revenue streams for musicians in the digital age.",
    author: "Sarah Chen",
    authorImage: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Industry Insights",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    tags: ["Industry Trends", "Live Music", "Artist Revenue"]
  }

  const blogPosts = [
    {
      title: "10 Tips for Creating Unforgettable House Concert Experiences",
      excerpt: "Learn how to transform your living room into the perfect intimate venue that artists and audiences will love.",
      author: "Marcus Rodriguez",
      authorImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "host-guides",
      categoryName: "Host Guides",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      tags: ["Hosting", "Venue Setup", "Fan Experience"]
    },
    {
      title: "How Luna Rivers Built a Sustainable Career Through Intimate Performances",
      excerpt: "Follow one artist's journey from empty coffee shops to sold-out living rooms across the country.",
      author: "David Kim",
      authorImage: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "success-stories",
      categoryName: "Success Stories",
      image: "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      tags: ["Artist Success", "Career Building", "Revenue Growth"]
    },
    {
      title: "Maximizing Your Tour Revenue: A Data-Driven Approach",
      excerpt: "Use analytics and fan insights to optimize your tour routing and pricing for maximum profitability.",
      author: "Emma Thompson",
      authorImage: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "artist-tips",
      categoryName: "Artist Tips",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      tags: ["Tour Planning", "Revenue Optimization", "Analytics"]
    },
    {
      title: "Platform Update: Introducing AI-Powered Tour Routing",
      excerpt: "Our new intelligent algorithm helps artists create optimal tour routes based on fan demand and geographic efficiency.",
      author: "Alex Chen",
      authorImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "March 5, 2024",
      readTime: "4 min read",
      category: "platform-updates",
      categoryName: "Platform Updates",
      image: "https://images.pexels.com/photos/3784324/pexels-photo-3784324.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      tags: ["Product Update", "AI Technology", "Tour Planning"]
    },
    {
      title: "Building Community Through Music: The Host's Perspective",
      excerpt: "Discover how hosting intimate concerts can strengthen neighborhood bonds and create lasting friendships.",
      author: "Maria Santos",
      authorImage: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "March 3, 2024",
      readTime: "5 min read",
      category: "host-guides",
      categoryName: "Host Guides",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      tags: ["Community Building", "Social Impact", "Hosting"]
    },
    {
      title: "The Psychology of Intimate Performances: Why Smaller is Better",
      excerpt: "Explore the science behind why intimate venues create stronger emotional connections between artists and audiences.",
      author: "Dr. Jennifer Walsh",
      authorImage: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "March 1, 2024",
      readTime: "9 min read",
      category: "industry-insights",
      categoryName: "Industry Insights",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      tags: ["Psychology", "Fan Engagement", "Performance"]
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const popularTags = [
    "Artist Tips", "Hosting", "Revenue Growth", "Community Building", 
    "Tour Planning", "Fan Engagement", "Industry Trends", "Platform Updates"
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
                TrueFans JAM
                <span className="text-primary-600 block">Blog</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Insights, tips, and stories from the world of intimate live music. 
                Learn how to succeed as an artist, host unforgettable shows, and build meaningful connections.
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles, tips, and insights..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <Card hover className="overflow-hidden cursor-pointer">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                      {featuredPost.title}
                    </h3>
                    <p className="text-lg text-gray-600">{featuredPost.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={featuredPost.authorImage}
                          alt={featuredPost.author}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium text-gray-900">{featuredPost.author}</p>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <span>{featuredPost.date}</span>
                            <span>•</span>
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <Button>
                        Read Article
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Categories & Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8 sticky top-8">
                {/* Categories */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Filter className="h-5 w-5 mr-2" />
                      Categories
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                            selectedCategory === category.id
                              ? 'bg-primary-100 text-primary-800'
                              : 'hover:bg-gray-100 text-gray-700'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{category.name}</span>
                            <span className="text-sm text-gray-500">{category.count}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Tags */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Tag className="h-5 w-5 mr-2" />
                      Popular Tags
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {popularTags.map((tag, index) => (
                        <button
                          key={index}
                          className="bg-gray-100 hover:bg-primary-100 hover:text-primary-800 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedCategory === 'all' ? 'All Articles' : categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-gray-600">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <Card hover className="h-full cursor-pointer">
                      <div className="relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                            {post.categoryName}
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <h3 className="text-lg font-bold text-gray-900 leading-tight">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 text-sm">{post.excerpt}</p>
                          
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 2).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <div className="flex items-center space-x-2">
                              <img
                                src={post.authorImage}
                                alt={post.author}
                                className="w-8 h-8 rounded-full object-cover"
                              />
                              <div>
                                <p className="text-sm font-medium text-gray-900">{post.author}</p>
                                <div className="flex items-center space-x-1 text-xs text-gray-600">
                                  <span>{post.date}</span>
                                  <span>•</span>
                                  <span>{post.readTime}</span>
                                </div>
                              </div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-400" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
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
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-primary-100">
              Get weekly tips, industry insights, and success stories delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog
