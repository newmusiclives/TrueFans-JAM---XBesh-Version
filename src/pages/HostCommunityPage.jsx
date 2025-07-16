import React, { useState } from 'react'
import Layout from '../components/Layout'
import { 
  Users, 
  Heart, 
  MessageCircle, 
  Calendar, 
  Star, 
  Award, 
  Coffee, 
  Music, 
  Camera, 
  Share2, 
  BookOpen, 
  Lightbulb, 
  Gift, 
  Trophy, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  ChevronRight,
  ChevronDown,
  Play,
  Download,
  ExternalLink,
  Zap,
  Target,
  TrendingUp,
  Shield,
  Globe,
  Mic,
  Home,
  CheckCircle,
  ArrowRight,
  Plus,
  Search,
  Filter,
  Bell,
  Settings,
  HelpCircle,
  FileText,
  Video,
  Headphones,
  Image as ImageIcon,
  Link as LinkIcon,
  ThumbsUp,
  Eye,
  MessageSquare,
  UserPlus,
  Calendar as CalendarIcon
} from 'lucide-react'

const HostCommunityPage = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [expandedPost, setExpandedPost] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const tabs = [
    { id: 'overview', title: 'Community Overview', icon: Users },
    { id: 'forum', title: 'Discussion Forum', icon: MessageCircle },
    { id: 'events', title: 'Community Events', icon: Calendar },
    { id: 'resources', title: 'Shared Resources', icon: BookOpen },
    { id: 'recognition', title: 'Host Recognition', icon: Award }
  ]

  const communityStats = [
    { label: 'Active Hosts', value: '2,847', icon: Users, color: 'blue' },
    { label: 'Monthly Events', value: '1,234', icon: Calendar, color: 'green' },
    { label: 'Success Stories', value: '892', icon: Star, color: 'yellow' },
    { label: 'Resource Shares', value: '456', icon: Share2, color: 'purple' }
  ]

  const featuredHosts = [
    {
      name: 'Sarah Chen',
      location: 'Portland, OR',
      eventsHosted: 47,
      rating: 4.9,
      specialty: 'Acoustic Folk',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Super Host',
      quote: 'Creating magical musical moments in my living room has connected me with incredible artists and neighbors.'
    },
    {
      name: 'Marcus Johnson',
      location: 'Austin, TX',
      eventsHosted: 32,
      rating: 4.8,
      specialty: 'Jazz & Blues',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Community Leader',
      quote: 'The host community has taught me so much about creating unforgettable experiences.'
    },
    {
      name: 'Elena Rodriguez',
      location: 'Denver, CO',
      eventsHosted: 28,
      rating: 5.0,
      specialty: 'World Music',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Rising Star',
      quote: 'Every concert brings new friendships and cultural connections to our community.'
    }
  ]

  const forumCategories = [
    { id: 'all', name: 'All Discussions', count: 234 },
    { id: 'hosting-tips', name: 'Hosting Tips', count: 89 },
    { id: 'artist-relations', name: 'Artist Relations', count: 67 },
    { id: 'venue-setup', name: 'Venue Setup', count: 45 },
    { id: 'marketing', name: 'Marketing & Promotion', count: 33 },
    { id: 'troubleshooting', name: 'Troubleshooting', count: 28 },
    { id: 'success-stories', name: 'Success Stories', count: 52 }
  ]

  const forumPosts = [
    {
      id: 1,
      category: 'hosting-tips',
      title: 'Best practices for sound check with acoustic artists',
      author: 'Sarah Chen',
      authorImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      timeAgo: '2 hours ago',
      replies: 12,
      likes: 24,
      views: 156,
      preview: 'I\'ve learned some great techniques for getting the perfect sound balance...',
      tags: ['acoustics', 'sound-check', 'setup'],
      pinned: true
    },
    {
      id: 2,
      category: 'success-stories',
      title: 'My first sold-out house concert - lessons learned!',
      author: 'Marcus Johnson',
      authorImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      timeAgo: '5 hours ago',
      replies: 18,
      likes: 47,
      views: 203,
      preview: 'Last weekend I hosted my first completely sold-out show with 35 guests...',
      tags: ['milestone', 'capacity', 'planning']
    },
    {
      id: 3,
      category: 'artist-relations',
      title: 'How to handle artist dietary restrictions and preferences',
      author: 'Elena Rodriguez',
      authorImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      timeAgo: '1 day ago',
      replies: 9,
      likes: 31,
      views: 124,
      preview: 'Creating a welcoming environment includes taking care of artist needs...',
      tags: ['hospitality', 'artist-care', 'food']
    },
    {
      id: 4,
      category: 'venue-setup',
      title: 'Lighting setup for evening concerts - what works best?',
      author: 'David Kim',
      authorImage: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
      timeAgo: '2 days ago',
      replies: 15,
      likes: 28,
      views: 189,
      preview: 'I\'ve been experimenting with different lighting configurations...',
      tags: ['lighting', 'ambiance', 'equipment']
    },
    {
      id: 5,
      category: 'marketing',
      title: 'Social media strategies that actually fill seats',
      author: 'Lisa Park',
      authorImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
      timeAgo: '3 days ago',
      replies: 22,
      likes: 56,
      views: 278,
      preview: 'After hosting 20+ shows, here are the marketing tactics that work...',
      tags: ['social-media', 'promotion', 'audience-building']
    }
  ]

  const communityEvents = [
    {
      title: 'Monthly Host Meetup - Portland',
      date: 'March 15, 2024',
      time: '7:00 PM PST',
      type: 'In-Person',
      location: 'Community Center, Portland, OR',
      attendees: 24,
      description: 'Connect with fellow hosts, share experiences, and learn new techniques.',
      host: 'Sarah Chen'
    },
    {
      title: 'Virtual Workshop: Advanced Sound Setup',
      date: 'March 20, 2024',
      time: '6:00 PM EST',
      type: 'Virtual',
      location: 'Zoom',
      attendees: 67,
      description: 'Deep dive into professional sound setup techniques for house concerts.',
      host: 'TrueFans JAM Team'
    },
    {
      title: 'Host Appreciation Dinner - Austin',
      date: 'March 25, 2024',
      time: '6:30 PM CST',
      type: 'In-Person',
      location: 'Local Restaurant, Austin, TX',
      attendees: 18,
      description: 'Celebrate our amazing Austin host community with dinner and networking.',
      host: 'Marcus Johnson'
    }
  ]

  const sharedResources = [
    {
      title: 'Host Welcome Packet Template',
      type: 'Document',
      downloads: 234,
      rating: 4.8,
      author: 'TrueFans JAM Team',
      description: 'Complete template for welcoming guests to your house concert',
      tags: ['template', 'guest-experience', 'communication']
    },
    {
      title: 'Sound Check Checklist',
      type: 'Checklist',
      downloads: 189,
      rating: 4.9,
      author: 'Sarah Chen',
      description: 'Step-by-step checklist for perfect sound setup every time',
      tags: ['sound', 'checklist', 'technical']
    },
    {
      title: 'Social Media Post Templates',
      type: 'Graphics',
      downloads: 156,
      rating: 4.7,
      author: 'Lisa Park',
      description: 'Ready-to-use social media templates for promoting your shows',
      tags: ['marketing', 'social-media', 'graphics']
    },
    {
      title: 'Artist Hospitality Guide',
      type: 'Guide',
      downloads: 143,
      rating: 4.8,
      author: 'Elena Rodriguez',
      description: 'How to make artists feel welcome and comfortable in your space',
      tags: ['hospitality', 'artist-care', 'best-practices']
    }
  ]

  const recognitionPrograms = [
    {
      title: 'Super Host',
      description: 'Hosts who consistently deliver exceptional experiences',
      requirements: ['25+ successful events', '4.8+ average rating', 'Active community participation'],
      benefits: ['Priority artist booking', 'Exclusive resources', 'Recognition badge'],
      currentHolders: 47,
      icon: Trophy,
      color: 'gold'
    },
    {
      title: 'Community Leader',
      description: 'Hosts who actively contribute to community growth',
      requirements: ['Mentor new hosts', 'Share resources', 'Organize local meetups'],
      benefits: ['Leadership opportunities', 'Early feature access', 'Special recognition'],
      currentHolders: 23,
      icon: Award,
      color: 'blue'
    },
    {
      title: 'Rising Star',
      description: 'New hosts showing exceptional promise',
      requirements: ['5+ events in first 3 months', '4.7+ rating', 'Positive feedback'],
      benefits: ['Mentorship program', 'Resource priority', 'Growth support'],
      currentHolders: 89,
      icon: Star,
      color: 'purple'
    }
  ]

  const filteredPosts = selectedCategory === 'all' 
    ? forumPosts 
    : forumPosts.filter(post => post.category === selectedCategory)

  const renderOverview = () => (
    <div className="space-y-12">
      {/* Community Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        {communityStats.map((stat, index) => {
          const Icon = stat.icon
          const colorClasses = {
            blue: 'bg-blue-100 text-blue-600',
            green: 'bg-green-100 text-green-600',
            yellow: 'bg-yellow-100 text-yellow-600',
            purple: 'bg-purple-100 text-purple-600'
          }[stat.color]
          
          return (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
              <div className={`w-12 h-12 ${colorClasses} rounded-full flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          )
        })}
      </div>

      {/* Featured Hosts */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Community Hosts</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredHosts.map((host, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <img 
                  src={host.image} 
                  alt={host.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{host.name}</h4>
                  <p className="text-gray-600 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {host.location}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                  {host.badge}
                </span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span className="text-sm font-medium">{host.rating}</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Events Hosted:</span>
                  <span className="font-medium">{host.eventsHosted}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Specialty:</span>
                  <span className="font-medium">{host.specialty}</span>
                </div>
              </div>
              
              <blockquote className="text-sm text-gray-700 italic border-l-4 border-blue-200 pl-4">
                "{host.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      {/* Community Benefits */}
      <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-6">Why Join Our Host Community?</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold mb-2">Connect & Learn</h4>
              <p className="text-blue-200">Share experiences, get advice, and learn from seasoned hosts in our supportive community.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold mb-2">Resources & Tools</h4>
              <p className="text-blue-200">Access exclusive templates, guides, and tools created by and for the host community.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold mb-2">Recognition & Growth</h4>
              <p className="text-blue-200">Earn recognition for your contributions and unlock exclusive benefits as you grow.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderForum = () => (
    <div className="space-y-6">
      {/* Forum Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Community Discussion Forum</h3>
          <p className="text-gray-600">Connect, share, and learn from fellow hosts</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          New Discussion
        </button>
      </div>

      {/* Categories Filter */}
      <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-4">Categories</h4>
        <div className="flex flex-wrap gap-2">
          {forumCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Forum Posts */}
      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                <img 
                  src={post.authorImage} 
                  alt={post.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-bold text-gray-900">{post.title}</h4>
                    {post.pinned && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                        Pinned
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                    <span>by {post.author}</span>
                    <span>{post.timeAgo}</span>
                  </div>
                  <p className="text-gray-700 mb-3">{post.preview}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  <span>{post.replies}</span>
                </div>
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  <span>{post.views}</span>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Join Discussion
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderEvents = () => (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Community Events</h3>
          <p className="text-gray-600">Connect with fellow hosts in person and virtually</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          Suggest Event
        </button>
      </div>

      <div className="grid gap-6">
        {communityEvents.map((event, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <h4 className="text-xl font-bold text-gray-900">{event.title}</h4>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    event.type === 'Virtual' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {event.type}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{event.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{event.attendees} attending</span>
                    </div>
                    <div>Hosted by {event.host}</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Join Event
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Add to Calendar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderResources = () => (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Shared Resources</h3>
          <p className="text-gray-600">Templates, guides, and tools created by the community</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Share Resource
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {sharedResources.map((resource, index) => {
          const typeIcons = {
            'Document': FileText,
            'Checklist': CheckCircle,
            'Graphics': ImageIcon,
            'Guide': BookOpen
          }
          const Icon = typeIcons[resource.type] || FileText
          
          return (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{resource.title}</h4>
                    <p className="text-sm text-gray-600">by {resource.author}</p>
                  </div>
                </div>
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                  {resource.type}
                </span>
              </div>
              
              <p className="text-gray-700 mb-4">{resource.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {resource.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Download className="w-4 h-4 mr-1" />
                    <span>{resource.downloads}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    <span>{resource.rating}</span>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm">
                  Download
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )

  const renderRecognition = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Host Recognition Programs</h3>
        <p className="text-gray-600">Celebrating excellence and contribution in our host community</p>
      </div>

      <div className="grid gap-6">
        {recognitionPrograms.map((program, index) => {
          const Icon = program.icon
          const colorClasses = {
            gold: 'bg-yellow-100 text-yellow-600 border-yellow-200',
            blue: 'bg-blue-100 text-blue-600 border-blue-200',
            purple: 'bg-purple-100 text-purple-600 border-purple-200'
          }[program.color]
          
          return (
            <div key={index} className={`bg-white rounded-lg p-8 shadow-lg border-2 ${colorClasses}`}>
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 ${colorClasses} rounded-full flex items-center justify-center`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">{program.title}</h4>
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{program.currentHolders}</div>
                  <div className="text-sm text-gray-600">Current Holders</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-gray-900 mb-3">Requirements</h5>
                  <ul className="space-y-2">
                    {program.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-bold text-gray-900 mb-3">Benefits</h5>
                  <ul className="space-y-2">
                    {program.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-700">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview()
      case 'forum':
        return renderForum()
      case 'events':
        return renderEvents()
      case 'resources':
        return renderResources()
      case 'recognition':
        return renderRecognition()
      default:
        return renderOverview()
    }
  }

  return (
    <Layout 
      title="Host Community" 
      description="Connect with fellow TrueFans JAM hosts, share experiences, and grow together"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Host Community</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join a vibrant community of passionate hosts creating magical musical experiences. 
            Connect, learn, and grow together in the art of intimate concert hosting.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-2 text-red-600" />
              <span>Supportive Community</span>
            </div>
            <div className="flex items-center">
              <Lightbulb className="w-4 h-4 mr-2 text-yellow-600" />
              <span>Shared Knowledge</span>
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2 text-blue-600" />
              <span>Recognition Programs</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {tab.title}
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-16">
          {renderTabContent()}
        </div>

        {/* Join Community CTA */}
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-2xl p-8 text-white text-center">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h3>
          <p className="text-green-200 mb-8 max-w-2xl mx-auto">
            Become part of a supportive network of hosts who are passionate about creating 
            unforgettable musical experiences. Connect, learn, and grow with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Join Community
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HostCommunityPage
