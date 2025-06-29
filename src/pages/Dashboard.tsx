import React from 'react'
import { motion } from 'framer-motion'
import { useAuthStore } from '../stores/authStore'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { 
  Music, 
  Home, 
  Calendar, 
  DollarSign, 
  Users, 
  Star, 
  TrendingUp,
  MapPin,
  Clock,
  Settings,
  Bell,
  LogOut
} from 'lucide-react'

const Dashboard: React.FC = () => {
  const { user, profile, signOut } = useAuthStore()
  const isArtist = profile?.user_type === 'artist'

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  const artistStats = [
    { label: 'Total Shows', value: '24', icon: <Music className="h-5 w-5" />, change: '+3 this month' },
    { label: 'Total Earnings', value: '$2,840', icon: <DollarSign className="h-5 w-5" />, change: '+$420 this month' },
    { label: 'Fan Followers', value: '1,247', icon: <Users className="h-5 w-5" />, change: '+89 this week' },
    { label: 'Average Rating', value: '4.8', icon: <Star className="h-5 w-5" />, change: 'Based on 156 reviews' }
  ]

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
      location: 'Portland, OR',
      attendees: 15,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 2,
      artist: 'The Midnight Collective',
      date: '2024-02-22',
      time: '7:30 PM',
      location: 'Seattle, WA',
      attendees: 20,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 3,
      artist: 'Acoustic Dreams',
      date: '2024-03-01',
      time: '8:30 PM',
      location: 'San Francisco, CA',
      attendees: 12,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ]

  const recentActivity = [
    { type: 'booking', message: 'New booking request from Sarah Chen', time: '2 hours ago' },
    { type: 'review', message: 'Received 5-star review from Marcus Rodriguez', time: '1 day ago' },
    { type: 'payout', message: 'Payout of $240 processed successfully', time: '2 days ago' },
    { type: 'message', message: 'New message from Emma Thompson', time: '3 days ago' }
  ]

  const stats = isArtist ? artistStats : hostStats

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Music className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-display font-bold text-gray-900">
                  Welcome back, {profile?.full_name || user?.email?.split('@')[0]}
                </h1>
                <p className="text-sm text-gray-600 capitalize">
                  {profile?.user_type} Dashboard
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
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
                    <div className="bg-primary-100 text-primary-600 p-3 rounded-lg">
                      {stat.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upcoming Shows */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  {isArtist ? 'Upcoming Performances' : 'Upcoming Shows'}
                </CardTitle>
                <CardDescription>
                  {isArtist ? 'Your scheduled performances' : 'Shows you\'re hosting'}
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
                            <MapPin className="h-3 w-3" />
                            {show.location}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">
                          {show.attendees} attendees
                        </div>
                        <Button size="sm" variant="outline" className="mt-2">
                          View Details
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Button variant="outline">
                    {isArtist ? 'Find More Venues' : 'Browse Artists'}
                  </Button>
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
                {isArtist ? (
                  <>
                    <Button fullWidth variant="outline">
                      <MapPin className="h-4 w-4" />
                      Find Venues
                    </Button>
                    <Button fullWidth variant="outline">
                      <Music className="h-4 w-4" />
                      Update Profile
                    </Button>
                    <Button fullWidth variant="outline">
                      <TrendingUp className="h-4 w-4" />
                      View Analytics
                    </Button>
                  </>
                ) : (
                  <>
                    <Button fullWidth variant="outline">
                      <Users className="h-4 w-4" />
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
                  </>
                )}
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
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{activity.message}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
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
                    <span className="text-sm text-gray-600">Shows</span>
                    <span className="font-medium">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Revenue</span>
                    <span className="font-medium text-green-600">+$420</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">New Followers</span>
                    <span className="font-medium text-blue-600">+89</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-medium">4.8</span>
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

export default Dashboard
