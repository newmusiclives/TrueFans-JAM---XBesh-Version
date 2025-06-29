import React from 'react'
import { motion } from 'framer-motion'
import { useAuthStore } from '../stores/authStore'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { 
  Music, 
  Calendar, 
  DollarSign, 
  Users, 
  Star, 
  TrendingUp,
  MapPin,
  Clock,
  Play,
  Plus,
  BookOpen,
  BarChart3,
  Heart
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ArtistDashboard: React.FC = () => {
  const { user, profile } = useAuthStore()
  const navigate = useNavigate()

  const artistStats = [
    { label: 'Total Shows', value: '24', icon: <Music className="h-5 w-5" />, change: '+3 this month' },
    { label: 'Total Earnings', value: '$2,840', icon: <DollarSign className="h-5 w-5" />, change: '+$420 this month' },
    { label: 'Fan Followers', value: '1,247', icon: <Users className="h-5 w-5" />, change: '+89 this week' },
    { label: 'Average Rating', value: '4.8', icon: <Star className="h-5 w-5" />, change: 'Based on 156 reviews' }
  ]

  const upcomingPerformances = [
    {
      id: 1,
      venue: 'Sarah\'s Music Haven',
      host: 'Sarah Chen',
      date: '2024-02-15',
      time: '8:00 PM',
      location: 'Portland, OR',
      attendees: 15,
      fee: '$250',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 2,
      venue: 'The Living Room Sessions',
      host: 'Marcus Rodriguez',
      date: '2024-02-22',
      time: '7:30 PM',
      location: 'Seattle, WA',
      attendees: 20,
      fee: '$300',
      image: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 3,
      venue: 'Cozy Corner Concerts',
      host: 'Emma Thompson',
      date: '2024-03-01',
      time: '8:30 PM',
      location: 'San Francisco, CA',
      attendees: 12,
      fee: '$200',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ]

  const venueInvitations = [
    { venue: 'Acoustic Nights', host: 'Mike Johnson', date: '2024-03-08', location: 'Portland, OR', fee: '$275' },
    { venue: 'Intimate Melodies', host: 'Lisa Park', date: '2024-03-15', location: 'Eugene, OR', fee: '$225' },
    { venue: 'House Concert Series', host: 'David Kim', date: '2024-03-22', location: 'Bend, OR', fee: '$300' }
  ]

  const recentActivity = [
    { type: 'booking', message: 'New venue invitation from Mike Johnson', time: '2 hours ago' },
    { type: 'review', message: 'Received 5-star review from Sarah Chen', time: '1 day ago' },
    { type: 'payout', message: 'Payout of $240 processed successfully', time: '2 days ago' },
    { type: 'follower', message: '12 new followers this week', time: '3 days ago' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Music className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-display font-bold text-gray-900">
                  Welcome back, {profile?.display_name || user?.email?.split('@')[0]}
                </h1>
                <p className="text-lg text-gray-600">
                  Artist Dashboard - Manage your performances and bookings
                </p>
              </div>
            </div>
            <Button 
              size="lg"
              onClick={() => navigate('/artist/create-tour')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="h-5 w-5 mr-2" />
              Create New Tour
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {artistStats.map((stat, index) => (
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
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
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
            {/* Upcoming Performances */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Performances
                </CardTitle>
                <CardDescription>
                  Your scheduled performances
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingPerformances.map((show, index) => (
                    <motion.div
                      key={show.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <img
                        src={show.image}
                        alt={show.venue}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{show.venue}</h4>
                        <p className="text-sm text-gray-600">Hosted by {show.host}</p>
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
                        <div className="text-sm text-green-600 font-medium">
                          {show.fee}
                        </div>
                        <Button size="sm" variant="outline" className="mt-2">
                          View Details
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Button 
                    variant="outline"
                    onClick={() => navigate('/artist/booking-calendar')}
                  >
                    <Calendar className="h-4 w-4" />
                    View Full Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Venue Invitations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Venue Invitations
                </CardTitle>
                <CardDescription>
                  Hosts inviting you to perform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {venueInvitations.map((invitation, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-medium text-gray-900">{invitation.venue}</h4>
                          <p className="text-sm text-gray-600">Hosted by {invitation.host}</p>
                          <p className="text-sm text-gray-600">{invitation.location} • {invitation.date}</p>
                        </div>
                        <span className="text-sm font-medium text-green-600">{invitation.fee}</span>
                      </div>
                      <div className="flex space-x-3">
                        <Button size="sm">Accept</Button>
                        <Button size="sm" variant="outline">Decline</Button>
                        <Button size="sm" variant="ghost">View Details</Button>
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
                <Button 
                  fullWidth 
                  variant="outline"
                  onClick={() => navigate('/artist/find-venues')}
                >
                  <MapPin className="h-4 w-4" />
                  Find Venues
                </Button>
                <Button 
                  fullWidth 
                  variant="outline"
                  onClick={() => navigate('/artist/profile')}
                >
                  <Music className="h-4 w-4" />
                  Update Profile
                </Button>
                <Button 
                  fullWidth 
                  variant="outline"
                  onClick={() => navigate('/artist/music')}
                >
                  <Play className="h-4 w-4" />
                  Upload Music
                </Button>
                <Button 
                  fullWidth 
                  variant="outline"
                  onClick={() => navigate('/artist/analytics')}
                >
                  <TrendingUp className="h-4 w-4" />
                  View Analytics
                </Button>
                <Button 
                  fullWidth 
                  variant="outline"
                  onClick={() => navigate('/artist/resources')}
                >
                  <BookOpen className="h-4 w-4" />
                  Artist Resources
                </Button>
                <Button 
                  fullWidth 
                  variant="outline"
                  onClick={() => navigate('/artist/revenue')}
                >
                  <BarChart3 className="h-4 w-4" />
                  Revenue Tracking
                </Button>
                <Button 
                  fullWidth 
                  variant="outline"
                  onClick={() => navigate('/artist/fans')}
                >
                  <Heart className="h-4 w-4" />
                  Fan Engagement
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
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
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

export default ArtistDashboard
