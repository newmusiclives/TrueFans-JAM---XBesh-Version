import React from 'react'
import { motion } from 'framer-motion'
import { useAuthStore } from '../stores/authStore'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { 
  Home, 
  Calendar, 
  DollarSign, 
  Users, 
  Star, 
  TrendingUp,
  MapPin,
  Clock,
  Music,
  Plus
} from 'lucide-react'

const HostDashboard: React.FC = () => {
  const { user, profile } = useAuthStore()

  const hostStats = [
    { label: 'Shows Hosted', value: '18', icon: <Home className="h-5 w-5" />, change: '+2 this month' },
    { label: 'Revenue Generated', value: '$1,680', icon: <DollarSign className="h-5 w-5" />, change: '+$280 this month' },
    { label: 'Artists Hosted', value: '32', icon: <Users className="h-5 w-5" />, change: '+5 unique artists' },
    { label: 'Host Rating', value: '4.9', icon: <Star className="h-5 w-5" />, change: 'Based on 89 reviews' }
  ]

  const upcomingShows = [
    {
      id: 1,
      artist: 'Luna Rivers',
      date: '2024-02-15',
      time: '8:00 PM',
      attendees: 15,
      status: 'confirmed',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 2,
      artist: 'The Midnight Collective',
      date: '2024-02-22',
      time: '7:30 PM',
      attendees: 20,
      status: 'pending',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 3,
      artist: 'Acoustic Dreams',
      date: '2024-03-01',
      time: '8:30 PM',
      attendees: 12,
      status: 'confirmed',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ]

  const bookingRequests = [
    { artist: 'Emma Thompson', date: '2024-02-28', genre: 'Folk', attendees: 18, message: 'Looking for an intimate venue for acoustic set' },
    { artist: 'Jazz Trio Plus', date: '2024-03-05', genre: 'Jazz', attendees: 25, message: 'Evening jazz performance with light refreshments' },
    { artist: 'Indie Collective', date: '2024-03-12', genre: 'Indie Rock', attendees: 22, message: 'Alternative rock showcase, equipment provided' }
  ]

  const recentActivity = [
    { type: 'booking', message: 'New booking request from Emma Thompson', time: '2 hours ago' },
    { type: 'review', message: 'Received 5-star review from Luna Rivers', time: '1 day ago' },
    { type: 'payout', message: 'Payout of $180 processed successfully', time: '2 days ago' },
    { type: 'message', message: 'New message from The Midnight Collective', time: '3 days ago' }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'text-green-600 bg-green-100'
      case 'pending': return 'text-yellow-600 bg-yellow-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-green-600 p-3 rounded-lg">
              <Home className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-display font-bold text-gray-900">
                Welcome back, {profile?.display_name || user?.email?.split('@')[0]}
              </h1>
              <p className="text-lg text-gray-600">
                Host Dashboard - Manage your venue and bookings
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {hostStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                    </div>
                    <div className="bg-green-100 text-green-600 p-3 rounded-lg">
                      {stat.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Shows */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Shows
                </CardTitle>
                <CardDescription>
                  Shows scheduled at your venue
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingShows.map((show, index) => (
                    <motion.div
                      key={show.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <img
                        src={show.image}
                        alt={show.artist}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{show.artist}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {show.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {show.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {show.attendees} guests
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(show.status)}`}>
                          {show.status}
                        </span>
                        <div className="mt-2">
                          <Button size="sm" variant="outline">
                            Manage
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Button variant="outline">
                    <Calendar className="h-4 w-4" />
                    View Full Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Booking Requests */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Music className="h-5 w-5" />
                  New Booking Requests
                </CardTitle>
                <CardDescription>
                  Artists wanting to perform at your venue
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bookingRequests.map((request, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-medium text-gray-900">{request.artist}</h4>
                          <p className="text-sm text-gray-600">{request.genre} • {request.attendees} expected guests</p>
                        </div>
                        <span className="text-sm text-gray-500">{request.date}</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-4">{request.message}</p>
                      <div className="flex space-x-3">
                        <Button size="sm">Accept</Button>
                        <Button size="sm" variant="outline">Decline</Button>
                        <Button size="sm" variant="ghost">Message</Button>
                      </div>
                    </motion.div>
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
                <Button fullWidth variant="outline">
                  <Plus className="h-4 w-4" />
                  Create Event
                </Button>
                <Button fullWidth variant="outline">
                  <Music className="h-4 w-4" />
                  Browse Artists
                </Button>
                <Button fullWidth variant="outline">
                  <Home className="h-4 w-4" />
                  Update Venue
                </Button>
                <Button fullWidth variant="outline">
                  <Calendar className="h-4 w-4" />
                  Manage Calendar
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{activity.message}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Venue Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  This Month
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Shows Hosted</span>
                    <span className="font-medium">2</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Revenue</span>
                    <span className="font-medium text-green-600">+$280</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">New Followers</span>
                    <span className="font-medium text-blue-600">+12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-medium">4.9</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostDashboard
