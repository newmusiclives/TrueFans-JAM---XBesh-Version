import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card'
import { 
  ArrowLeft, 
  Heart, 
  Users, 
  MessageCircle, 
  Mail, 
  Star,
  TrendingUp,
  Send,
  Plus,
  Filter,
  Search,
  UserPlus,
  Calendar,
  Music,
  Share2,
  Bell
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const FanEngagement: React.FC = () => {
  const navigate = useNavigate()
  const [selectedTab, setSelectedTab] = useState('overview')
  const [newMessage, setNewMessage] = useState('')

  const engagementStats = [
    { 
      label: 'Total Followers', 
      value: '1,247', 
      change: '+89 this week', 
      icon: <Users className="h-5 w-5" />,
      color: 'bg-blue-100 text-blue-600'
    },
    { 
      label: 'Engagement Rate', 
      value: '8.4%', 
      change: '+1.2% this month', 
      icon: <Heart className="h-5 w-5" />,
      color: 'bg-red-100 text-red-600'
    },
    { 
      label: 'Messages', 
      value: '156', 
      change: '23 unread', 
      icon: <MessageCircle className="h-5 w-5" />,
      color: 'bg-green-100 text-green-600'
    },
    { 
      label: 'Show Requests', 
      value: '42', 
      change: '12 this week', 
      icon: <Calendar className="h-5 w-5" />,
      color: 'bg-purple-100 text-purple-600'
    }
  ]

  const topFans = [
    {
      id: 1,
      name: 'Sarah Martinez',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      showsAttended: 8,
      totalSpent: '$420',
      lastSeen: '2 days ago',
      location: 'Portland, OR',
      fanSince: 'March 2023',
      engagement: 'Very High'
    },
    {
      id: 2,
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      showsAttended: 6,
      totalSpent: '$315',
      lastSeen: '1 week ago',
      location: 'Seattle, WA',
      fanSince: 'June 2023',
      engagement: 'High'
    },
    {
      id: 3,
      name: 'Emma Thompson',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      showsAttended: 5,
      totalSpent: '$275',
      lastSeen: '3 days ago',
      location: 'San Francisco, CA',
      fanSince: 'January 2023',
      engagement: 'High'
    },
    {
      id: 4,
      name: 'David Kim',
      avatar: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      showsAttended: 4,
      totalSpent: '$220',
      lastSeen: '5 days ago',
      location: 'Austin, TX',
      fanSince: 'August 2023',
      engagement: 'Medium'
    }
  ]

  const recentMessages = [
    {
      id: 1,
      fan: 'Sarah Martinez',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      message: 'Loved your performance last night! Any chance you\'ll be coming to Portland again soon?',
      time: '2 hours ago',
      unread: true
    },
    {
      id: 2,
      fan: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      message: 'Thank you for the amazing show! Would love to host you at my place sometime.',
      time: '1 day ago',
      unread: true
    },
    {
      id: 3,
      fan: 'Emma Thompson',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      message: 'Your new song is incredible! Can\'t wait to hear it live.',
      time: '2 days ago',
      unread: false
    }
  ]

  const showRequests = [
    {
      id: 1,
      fan: 'Lisa Park',
      location: 'Eugene, OR',
      date: 'March 15, 2024',
      capacity: 25,
      offer: '$300',
      message: 'Would love to host an intimate acoustic session at my home studio.',
      time: '1 day ago'
    },
    {
      id: 2,
      fan: 'Robert Wilson',
      location: 'Bend, OR',
      date: 'March 22, 2024',
      capacity: 30,
      offer: '$350',
      message: 'Perfect backyard space for a sunset concert. Great acoustics!',
      time: '3 days ago'
    }
  ]

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      toast.success('Message sent to all followers!')
      setNewMessage('')
    }
  }

  const handleMessageFan = (fan: any) => {
    toast.info(`Opening conversation with ${fan.name}`)
  }

  const handleViewFanProfile = (fan: any) => {
    toast.info(`Opening ${fan.name}'s profile`)
  }

  const handleAcceptRequest = (request: any) => {
    toast.success(`Show request from ${request.fan} accepted!`)
  }

  const handleDeclineRequest = (request: any) => {
    toast.error(`Show request from ${request.fan} declined`)
  }

  const handleSendNewsletter = () => {
    toast.success('Newsletter sent to all subscribers!')
  }

  const handleCreateCampaign = () => {
    toast.info('Opening campaign creator...')
  }

  const getEngagementColor = (level: string) => {
    switch (level) {
      case 'Very High':
        return 'bg-green-100 text-green-800'
      case 'High':
        return 'bg-blue-100 text-blue-800'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

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
                onClick={() => navigate('/artist-dashboard')}
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-xl font-display font-bold text-gray-900">
                  Fan Engagement
                </h1>
                <p className="text-sm text-gray-600">
                  Connect with your audience and build relationships
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleSendNewsletter}>
                <Mail className="h-4 w-4 mr-2" />
                Send Newsletter
              </Button>
              <Button size="sm" onClick={handleCreateCampaign}>
                <Plus className="h-4 w-4 mr-2" />
                Create Campaign
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Engagement Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {engagementStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                    </div>
                    <div className={`p-3 rounded-lg ${stat.color}`}>
                      {stat.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'overview', label: 'Overview', icon: <TrendingUp className="h-4 w-4" /> },
                { id: 'fans', label: 'Top Fans', icon: <Users className="h-4 w-4" /> },
                { id: 'messages', label: 'Messages', icon: <MessageCircle className="h-4 w-4" /> },
                { id: 'requests', label: 'Show Requests', icon: <Calendar className="h-4 w-4" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm ${
                    selectedTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {selectedTab === 'overview' && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Broadcast Message */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="h-5 w-5" />
                    Send Message to Fans
                  </CardTitle>
                  <CardDescription>
                    Share updates, announcements, or personal messages with your followers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <textarea
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="What would you like to share with your fans?"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>Will be sent to 1,247 followers</span>
                        <span>•</span>
                        <span>Estimated reach: 85%</span>
                      </div>
                      <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Fan Activity</CardTitle>
                  <CardDescription>
                    Latest interactions from your audience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { type: 'follow', user: 'Jessica Adams', action: 'started following you', time: '2 hours ago' },
                      { type: 'message', user: 'Mark Johnson', action: 'sent you a message', time: '4 hours ago' },
                      { type: 'request', user: 'Lisa Park', action: 'requested a show', time: '1 day ago' },
                      { type: 'review', user: 'Tom Wilson', action: 'left a 5-star review', time: '2 days ago' },
                      { type: 'share', user: 'Amy Chen', action: 'shared your music', time: '3 days ago' }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className={`p-2 rounded-full ${
                          activity.type === 'follow' ? 'bg-blue-100 text-blue-600' :
                          activity.type === 'message' ? 'bg-green-100 text-green-600' :
                          activity.type === 'request' ? 'bg-purple-100 text-purple-600' :
                          activity.type === 'review' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-pink-100 text-pink-600'
                        }`}>
                          {activity.type === 'follow' && <UserPlus className="h-4 w-4" />}
                          {activity.type === 'message' && <MessageCircle className="h-4 w-4" />}
                          {activity.type === 'request' && <Calendar className="h-4 w-4" />}
                          {activity.type === 'review' && <Star className="h-4 w-4" />}
                          {activity.type === 'share' && <Share2 className="h-4 w-4" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">
                            <span className="font-medium">{activity.user}</span> {activity.action}
                          </p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button fullWidth variant="outline" onClick={handleSendNewsletter}>
                    <Mail className="h-4 w-4 mr-2" />
                    Send Newsletter
                  </Button>
                  <Button fullWidth variant="outline" onClick={handleCreateCampaign}>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Campaign
                  </Button>
                  <Button fullWidth variant="outline">
                    <Bell className="h-4 w-4 mr-2" />
                    Schedule Announcement
                  </Button>
                  <Button fullWidth variant="outline">
                    <Music className="h-4 w-4 mr-2" />
                    Share New Music
                  </Button>
                </CardContent>
              </Card>

              {/* Growth Insights */}
              <Card>
                <CardHeader>
                  <CardTitle>Growth Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">This Week</span>
                      <span className="font-medium text-green-600">+89 followers</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">This Month</span>
                      <span className="font-medium text-green-600">+234 followers</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Engagement Rate</span>
                      <span className="font-medium">8.4%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Response Rate</span>
                      <span className="font-medium">92%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {selectedTab === 'fans' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Top Fans
                </CardTitle>
                <CardDescription>
                  Your most engaged and loyal supporters
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {topFans.map((fan, index) => (
                    <motion.div
                      key={fan.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                    >
                      <div className="flex items-start space-x-4">
                        <img
                          src={fan.avatar}
                          alt={fan.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-gray-900">{fan.name}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEngagementColor(fan.engagement)}`}>
                              {fan.engagement}
                            </span>
                          </div>
                          <div className="space-y-1 text-sm text-gray-600">
                            <p>{fan.location}</p>
                            <p>Fan since {fan.fanSince}</p>
                            <p>{fan.showsAttended} shows attended • {fan.totalSpent} spent</p>
                            <p>Last seen {fan.lastSeen}</p>
                          </div>
                          <div className="flex gap-2 mt-3">
                            <Button size="sm" onClick={() => handleMessageFan(fan)}>
                              Message
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleViewFanProfile(fan)}>
                              View Profile
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedTab === 'messages' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Recent Messages
                </CardTitle>
                <CardDescription>
                  Messages from your fans and followers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMessages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className={`p-4 rounded-lg border ${
                        message.unread ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <img
                          src={message.avatar}
                          alt={message.fan}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-gray-900">{message.fan}</h4>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-500">{message.time}</span>
                              {message.unread && (
                                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                              )}
                            </div>
                          </div>
                          <p className="text-gray-700 mb-3">{message.message}</p>
                          <Button size="sm">
                            Reply
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedTab === 'requests' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Show Requests
                </CardTitle>
                <CardDescription>
                  Fans requesting you to perform at their venues
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {showRequests.map((request, index) => (
                    <motion.div
                      key={request.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="p-4 border border-gray-200 rounded-lg"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-gray-900">{request.fan}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <span>{request.location}</span>
                            <span>{request.date}</span>
                            <span>{request.capacity} capacity</span>
                            <span className="font-medium text-green-600">{request.offer}</span>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{request.time}</span>
                      </div>
                      <p className="text-gray-700 mb-4">{request.message}</p>
                      <div className="flex gap-3">
                        <Button size="sm" onClick={() => handleAcceptRequest(request)}>
                          Accept
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleDeclineRequest(request)}>
                          Decline
                        </Button>
                        <Button size="sm" variant="ghost">
                          View Details
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

export default FanEngagement
