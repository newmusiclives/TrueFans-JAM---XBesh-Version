import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Music, 
  Home, 
  Calendar,
  ArrowUp,
  ArrowDown,
  BarChart3,
  PieChart,
  Activity,
  ArrowLeft,
  AlertTriangle,
  Flag,
  Eye,
  Ban,
  CheckCircle,
  Clock,
  MessageSquare
} from 'lucide-react'

const PlatformAnalytics: React.FC = () => {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('overview')

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const metrics = [
    {
      title: 'Total Revenue',
      value: '$127,450',
      change: '+12.5%',
      trend: 'up',
      icon: <DollarSign className="h-5 w-5" />
    },
    {
      title: 'Active Users',
      value: '3,847',
      change: '+8.2%',
      trend: 'up',
      icon: <Users className="h-5 w-5" />
    },
    {
      title: 'Total Shows',
      value: '1,234',
      change: '+15.3%',
      trend: 'up',
      icon: <Music className="h-5 w-5" />
    },
    {
      title: 'Platform Fee',
      value: '$12,745',
      change: '-2.1%',
      trend: 'down',
      icon: <TrendingUp className="h-5 w-5" />
    }
  ]

  const revenueData = [
    { month: 'Jan', revenue: 45000, shows: 89 },
    { month: 'Feb', revenue: 52000, shows: 102 },
    { month: 'Mar', revenue: 48000, shows: 95 },
    { month: 'Apr', revenue: 61000, shows: 118 },
    { month: 'May', revenue: 55000, shows: 108 },
    { month: 'Jun', revenue: 67000, shows: 134 }
  ]

  const topArtists = [
    { name: 'Luna Rivers', earnings: '$8,450', shows: 23, avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    { name: 'Sarah Wilson', earnings: '$7,230', shows: 19, avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    { name: 'Marcus Rodriguez', earnings: '$6,890', shows: 17, avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    { name: 'Emma Thompson', earnings: '$5,670', shows: 15, avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    { name: 'David Chen', earnings: '$4,320', shows: 12, avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' }
  ]

  const topVenues = [
    { name: 'The Blue Note', bookings: 45, revenue: '$12,340' },
    { name: 'Jazz Corner', bookings: 38, revenue: '$9,870' },
    { name: 'Acoustic Lounge', bookings: 32, revenue: '$8,450' },
    { name: 'Music Haven', bookings: 28, revenue: '$7,230' },
    { name: 'Sound Stage', bookings: 24, revenue: '$6,180' }
  ]

  // Content Reports Data
  const contentReports = [
    {
      id: 1247,
      title: 'Inappropriate Language in Live Stream',
      reporter: 'Anonymous User',
      reportedContent: 'Show #1247 - Luna Rivers Live Performance',
      artist: 'Luna Rivers',
      venue: 'The Blue Note',
      reportType: 'Inappropriate Content',
      severity: 'High',
      status: 'Under Review',
      reportedAt: '2024-03-15 14:30',
      description: 'User reported excessive profanity and inappropriate language during live performance stream.',
      evidence: 'Timestamp: 1:23:45 - 1:25:30',
      viewerCount: 234,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 1248,
      title: 'Copyright Violation Claim',
      reporter: 'Music Rights Corp',
      reportedContent: 'Show #1248 - Marcus Rodriguez Acoustic Set',
      artist: 'Marcus Rodriguez',
      venue: 'Jazz Corner',
      reportType: 'Copyright',
      severity: 'Medium',
      status: 'Pending Review',
      reportedAt: '2024-03-14 16:45',
      description: 'Copyright holder claims unauthorized performance of protected material.',
      evidence: 'Song: "Midnight Blues" - Performed without license',
      viewerCount: 156,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 1249,
      title: 'Harassment in Chat',
      reporter: 'User: MusicLover23',
      reportedContent: 'Show #1249 - Emma Thompson Jazz Night',
      artist: 'Emma Thompson',
      venue: 'Acoustic Lounge',
      reportType: 'Harassment',
      severity: 'High',
      status: 'Resolved',
      reportedAt: '2024-03-13 20:15',
      description: 'Multiple users reported harassment and bullying in chat during live stream.',
      evidence: 'Chat logs from 8:15 PM - 8:45 PM',
      viewerCount: 189,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ]

  const getReportSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'text-red-600 bg-red-100'
      case 'Medium': return 'text-yellow-600 bg-yellow-100'
      case 'Low': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getReportStatusColor = (status: string) => {
    switch (status) {
      case 'Under Review': return 'text-blue-600 bg-blue-100'
      case 'Pending Review': return 'text-yellow-600 bg-yellow-100'
      case 'Resolved': return 'text-green-600 bg-green-100'
      case 'Dismissed': return 'text-gray-600 bg-gray-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const handleReportAction = (reportId: number, action: string) => {
    console.log(`${action} report ${reportId}`)
    // In a real app, this would update the report status
  }

  return (
    <div className="space-y-6">
      {/* Back to Dashboard */}
      <div className="flex items-center space-x-4">
        <Link to="/dashboard">
          <Button variant="ghost" size="sm" className="flex items-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Dashboard</span>
          </Button>
        </Link>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-purple-100 rounded-lg">
            <BarChart3 className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Platform Analytics</h1>
            <p className="text-gray-600">Monitor platform performance and user engagement</p>
          </div>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'overview', label: 'Overview', icon: <Activity className="h-4 w-4" /> },
            { id: 'revenue', label: 'Revenue', icon: <DollarSign className="h-4 w-4" /> },
            { id: 'users', label: 'Users', icon: <Users className="h-4 w-4" /> },
            { id: 'content', label: 'Content Reports', icon: <Flag className="h-4 w-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                        <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                        <div className={`flex items-center space-x-1 text-sm ${
                          metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {metric.trend === 'up' ? (
                            <ArrowUp className="h-4 w-4" />
                          ) : (
                            <ArrowDown className="h-4 w-4" />
                          )}
                          <span>{metric.change}</span>
                        </div>
                      </div>
                      <div className="p-3 bg-purple-100 rounded-lg">
                        {metric.icon}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
                <CardDescription>Monthly revenue and show count</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {revenueData.map((data, index) => (
                    <div key={data.month} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">{data.month}</span>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-900">${data.revenue.toLocaleString()}</span>
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-purple-600 h-2 rounded-full"
                            style={{ width: `${(data.revenue / 70000) * 100}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500">{data.shows} shows</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Artists */}
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Artists</CardTitle>
                <CardDescription>Highest earning artists this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topArtists.map((artist, index) => (
                    <div key={artist.name} className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <img
                          src={artist.avatar}
                          alt={artist.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{artist.name}</p>
                        <p className="text-sm text-gray-500">{artist.shows} shows</p>
                      </div>
                      <div className="text-sm font-medium text-gray-900">{artist.earnings}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      )}

      {/* Revenue Tab */}
      {activeTab === 'revenue' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Revenue Breakdown</CardTitle>
                <CardDescription>Platform revenue sources</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Show Fees (15%)</span>
                    <span className="font-medium">$19,118</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Premium Subscriptions</span>
                    <span className="font-medium">$45,230</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Venue Partnerships</span>
                    <span className="font-medium">$32,450</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Artist Promotions</span>
                    <span className="font-medium">$30,652</span>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center font-bold">
                    <span>Total Revenue</span>
                    <span>$127,450</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Venues */}
            <Card>
              <CardHeader>
                <CardTitle>Top Venues</CardTitle>
                <CardDescription>Most active venue partners</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topVenues.map((venue, index) => (
                    <div key={venue.name} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{venue.name}</p>
                        <p className="text-sm text-gray-500">{venue.bookings} bookings</p>
                      </div>
                      <div className="text-sm font-medium text-gray-900">{venue.revenue}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      )}

      {/* Users Tab */}
      {activeTab === 'users' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>User Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">+234</div>
                <p className="text-sm text-gray-600">New users this month</p>
                <div className="flex items-center space-x-1 text-sm text-green-600 mt-2">
                  <ArrowUp className="h-4 w-4" />
                  <span>+18.2%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Active Artists</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">1,247</div>
                <p className="text-sm text-gray-600">Artists with shows</p>
                <div className="flex items-center space-x-1 text-sm text-green-600 mt-2">
                  <ArrowUp className="h-4 w-4" />
                  <span>+12.5%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Host Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">456</div>
                <p className="text-sm text-gray-600">Active venue hosts</p>
                <div className="flex items-center space-x-1 text-sm text-green-600 mt-2">
                  <ArrowUp className="h-4 w-4" />
                  <span>+8.7%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      )}

      {/* Content Reports Tab */}
      {activeTab === 'content' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <Card>
            <CardHeader>
              <CardTitle>Content Reports Management</CardTitle>
              <CardDescription>Review and manage user-reported content violations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {contentReports.map((report) => (
                  <div key={report.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <img
                          src={report.avatar}
                          alt={report.artist}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-900">{report.title}</h3>
                          <p className="text-sm text-gray-600">Report ID: #{report.id}</p>
                          <p className="text-sm text-gray-600">Reported by: {report.reporter}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getReportSeverityColor(report.severity)}`}>
                          {report.severity}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getReportStatusColor(report.status)}`}>
                          {report.status}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Reported Content</p>
                        <p className="text-sm text-gray-600">{report.reportedContent}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Report Type</p>
                        <p className="text-sm text-gray-600">{report.reportType}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Artist</p>
                        <p className="text-sm text-gray-600">{report.artist}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Venue</p>
                        <p className="text-sm text-gray-600">{report.venue}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Description</p>
                      <p className="text-sm text-gray-600">{report.description}</p>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Evidence</p>
                      <p className="text-sm text-gray-600">{report.evidence}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{report.reportedAt}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{report.viewerCount} viewers</span>
                        </div>
                      </div>

                      {report.status !== 'Resolved' && (
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleReportAction(report.id, 'view')}
                            className="flex items-center space-x-1"
                          >
                            <Eye className="h-4 w-4" />
                            <span>View Content</span>
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleReportAction(report.id, 'dismiss')}
                            className="flex items-center space-x-1"
                          >
                            <CheckCircle className="h-4 w-4" />
                            <span>Dismiss</span>
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleReportAction(report.id, 'takedown')}
                            className="flex items-center space-x-1"
                          >
                            <Ban className="h-4 w-4" />
                            <span>Take Action</span>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}

export default PlatformAnalytics
