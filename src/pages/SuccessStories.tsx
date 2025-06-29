import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { 
  Star, 
  Music, 
  Users, 
  TrendingUp, 
  Heart, 
  MapPin, 
  Calendar, 
  DollarSign,
  Quote,
  Play,
  ArrowRight,
  Award,
  Globe,
  Mic
} from 'lucide-react'

const SuccessStories: React.FC = () => {
  const featuredStories = [
    {
      type: "artist",
      name: "Luna Rivers",
      role: "Indie Folk Artist",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "From playing to empty coffee shops to selling out intimate living rooms across the country",
      quote: "TrueFans JAM didn't just change my touring experience—it saved my music career. I went from struggling to fill 20-seat venues to having waiting lists for my house concerts.",
      metrics: {
        shows: 45,
        revenue: "$28,000",
        fans: "1,200+",
        cities: 18
      },
      videoThumbnail: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      type: "host",
      name: "The Martinez Family",
      role: "Backyard Venue Hosts",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "Transforming their backyard into the neighborhood's favorite music destination",
      quote: "What started as a way to meet our neighbors became a thriving community hub. We've hosted 30 shows and made lifelong friendships with artists and music lovers.",
      metrics: {
        shows: 30,
        revenue: "$12,000",
        artists: "25+",
        capacity: 40
      },
      videoThumbnail: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      type: "artist",
      name: "The Midnight Collective",
      role: "Electronic Duo",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "Proving that electronic music can create intimate, emotional connections",
      quote: "We thought electronic music wouldn't work in living rooms. We were so wrong. The intimacy actually enhances our sound and creates this incredible energy.",
      metrics: {
        shows: 22,
        revenue: "$18,500",
        fans: "800+",
        cities: 12
      },
      videoThumbnail: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ]

  const quickStats = [
    {
      category: "Artist Success",
      stats: [
        { label: "Average Revenue Increase", value: "340%" },
        { label: "Fan Engagement Rate", value: "95%" },
        { label: "Tour Completion Rate", value: "98%" },
        { label: "Artist Satisfaction", value: "4.9/5" }
      ]
    },
    {
      category: "Host Success", 
      stats: [
        { label: "Average Monthly Earnings", value: "$850" },
        { label: "Community Growth", value: "250%" },
        { label: "Repeat Bookings", value: "85%" },
        { label: "Host Satisfaction", value: "4.8/5" }
      ]
    },
    {
      category: "Platform Impact",
      stats: [
        { label: "Total Shows Hosted", value: "15,000+" },
        { label: "Artist Earnings", value: "$2.8M+" },
        { label: "Communities Reached", value: "500+" },
        { label: "Lives Changed", value: "50,000+" }
      ]
    }
  ]

  const testimonialCategories = [
    {
      title: "Breakthrough Moments",
      stories: [
        {
          name: "Sarah Chen",
          role: "Classical Pianist",
          quote: "My first house concert had 15 people. By the end of the evening, three of them had booked me for private events. That's when I knew this was different.",
          metric: "300% booking increase"
        },
        {
          name: "Jake Morrison", 
          role: "Singer-Songwriter",
          quote: "I played the same song I'd performed in bars hundreds of times. But in that living room, with 20 people sitting on the floor, it felt like the first time.",
          metric: "First standing ovation"
        },
        {
          name: "The Harmony Trio",
          role: "Folk Band",
          quote: "We went from playing to distracted bar crowds to having people cry during our ballads. The intimacy changes everything.",
          metric: "95% fan retention"
        }
      ]
    },
    {
      title: "Community Building",
      stories: [
        {
          name: "David & Lisa Park",
          role: "Living Room Hosts",
          quote: "Our monthly house concerts became the highlight of our neighborhood. We've created a real community around music.",
          metric: "40 regular attendees"
        },
        {
          name: "Green Bean Cafe",
          role: "Business Host",
          quote: "Hosting intimate shows tripled our evening revenue and turned us into a cultural destination. Our customers love it.",
          metric: "200% revenue increase"
        },
        {
          name: "Maria Santos",
          role: "Community Center Host",
          quote: "These concerts brought our community together like nothing else. We've had three generations singing along in the same room.",
          metric: "500+ community members"
        }
      ]
    }
  ]

  const impactMetrics = [
    {
      icon: <Music className="h-8 w-8" />,
      title: "Artists Empowered",
      value: "2,500+",
      description: "Musicians building sustainable careers",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Communities Connected",
      value: "500+",
      description: "Cities and towns with active hosts",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Magical Moments",
      value: "15,000+",
      description: "Intimate shows creating lasting memories",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Economic Impact",
      value: "$2.8M+",
      description: "Generated for artists and hosts",
      color: "bg-green-100 text-green-600"
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
                Success
                <span className="text-primary-600 block">Stories</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Real stories from artists and hosts who have transformed their musical journeys 
                and built thriving communities through intimate performances.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Share Your Story
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Stories
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
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
              Our Collective Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Together, we're transforming the music industry one intimate show at a time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full text-center">
                  <CardHeader>
                    <div className={`${metric.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      {metric.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                    <CardTitle className="text-lg">{metric.title}</CardTitle>
                    <CardDescription>{metric.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
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
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deep into the journeys of artists and hosts who have found success and fulfillment 
              through TrueFans JAM.
            </p>
          </motion.div>

          <div className="space-y-16">
            {featuredStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Story Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{story.name}</h3>
                      <p className="text-primary-600 font-medium">{story.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 italic">{story.story}</p>
                  
                  <blockquote className="border-l-4 border-primary-600 pl-6">
                    <Quote className="h-8 w-8 text-primary-600 mb-4" />
                    <p className="text-lg text-gray-900 mb-4">{story.quote}</p>
                  </blockquote>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(story.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-primary-600">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <Button className="group">
                    Read Full Story
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Video/Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={story.videoThumbnail}
                      alt={`${story.name} story`}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                        <Play className="h-6 w-6 mr-2" />
                        Watch Story
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
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
              Success by the Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data-driven insights into how TrueFans JAM is transforming careers and communities.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {quickStats.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-center">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">{stat.label}</span>
                          <span className="text-lg font-bold text-primary-600">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Categories */}
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
              Stories of Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From breakthrough moments to community building, hear how TrueFans JAM 
              is changing lives across the music industry.
            </p>
          </motion.div>

          <div className="space-y-16">
            {testimonialCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{category.title}</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {category.stories.map((story, storyIndex) => (
                    <Card key={storyIndex} className="h-full">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                          ))}
                        </div>
                        <blockquote className="text-gray-600 mb-6 italic">
                          "{story.quote}"
                        </blockquote>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-gray-900">{story.name}</div>
                            <div className="text-sm text-gray-600">{story.role}</div>
                          </div>
                          <div className="text-sm text-primary-600 font-medium">
                            {story.metric}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
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
              Your Success Story Starts Here
            </h2>
            <p className="text-xl text-primary-100">
              Join thousands of artists and hosts who are already transforming their musical journeys 
              and building thriving communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Start as Artist
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                Become a Host
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default SuccessStories
