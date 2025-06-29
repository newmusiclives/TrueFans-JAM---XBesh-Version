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

const Analytics: React.FC = () => {
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
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
        <p className="text-gray-600">Platform performance and content moderation</p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'overview'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span>Overview</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'reports'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Flag className="h-4 w-4" />
              <span>Content Reports</span>
              <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full">3</span>
            </div>
          </button>
        </nav>
      </div>

      {activeTab === 'overview' && (
        <>
          {/* Key Metrics */}
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
                        <div className="flex items-center mt-1">
                          {metric.trend === 'up' ? (
                            <ArrowUp className="h-3 w-3 text-green-600" />
                          ) : (
                            <ArrowDown className="h-3 w-3 text-red-600" />
                          )}
                          <span className={`text-xs font-medium ml-1 ${
                            metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {metric.change}
                          </span>
                        </div>
                      </div>
                      <div className="bg-primary-100 text-primary-600 p-3 rounded-lg">
                        {metric.icon}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Revenue Chart */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Revenue Trends
                  </CardTitle>
                  <CardDescription>Monthly revenue and show count</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {revenueData.map((data, index) => (
                      <motion.div
                        key={data.month}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <span className="font-medium text-gray-900 w-8">{data.month}</span>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <div className="bg-primary-600 h-2 rounded-full" style={{ width: `${(data.revenue / 70000) * 100}%`, minWidth: '20px' }} />
                              <span className="text-sm font-medium text-gray-900">${(data.revenue / 1000).toFixed(0)}k</span>
                            </div>
                            <div className="flex items-center space-x-2 mt-1">
                              <div className="bg-gray-300 h-1 rounded-full" style={{ width: `${(data.shows / 140) * 100}%`, minWidth: '15px' }} />
                              <span className="text-xs text-gray-500">{data.shows} shows</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Performers */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Music className="h-5 w-5" />
                    Top Artists
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topArtists.map((artist, index) => (
                      <motion.div
                        key={artist.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <img
                          src={artist.avatar}
                          alt={artist.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 text-sm">{artist.name}</p>
                          <p className="text-xs text-gray-500">{artist.shows} shows</p>
                        </div>
                        <span className="font-medium text-gray-900 text-sm">{artist.earnings}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5" />
                    Top Venues
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topVenues.map((venue, index) => (
                      <motion.div
                        key={venue.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center justify-between"
                      >
                        <div>
                          <p className="font-medium text-gray-900 text-sm">{venue.name}</p>
                          <p className="text-xs text-gray-500">{venue.bookings} bookings</p>
                        </div>
                        <span className="font-medium text-gray-900 text-sm">{venue.revenue}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </>
      )}

      {activeTab === 'reports' && (
        <div className="space-y-6">
          {/* Content Reports Header */}
          <Card className="border-l-4 border-l-red-500 bg-red-50">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <div>
                  <h3 className="text-lg font-semibold text-red-900">Content Reports Requiring Attention</h3>
                  <p className="text-red-700">Review and take action on reported content violations</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content Reports List */}
          <div className="space-y-4">
            {contentReports.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`${report.id === 1247 ? 'ring-2 ring-red-200 bg-red-50' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <img
                          src={report.avatar}
                          alt={report.artist}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-lg font-semibold text-gray-900">Show #{report.id}</h3>
                            {report.id === 1247 && (
                              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
                                URGENT
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 mb-2">{report.title}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>Artist: {report.artist}</span>
                            <span>•</span>
                            <span>Venue: {report.venue}</span>
                            <span>•</span>
                            <span>{report.viewerCount} viewers</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getReportSeverityColor(report.severity)}`}>
                          {report.severity}
                        </span>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getReportStatusColor(report.status)}`}>
                          {report.status}
                        </span>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Report Details</h4>
                          <p className="text-sm text-gray-600 mb-2">{report.description}</p>
                          <p className="text-xs text-gray-500">
                            <strong>Evidence:</strong> {report.evidence}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Report Info</h4>
                          <div className="space-y-1 text-sm">
                            <p><strong>Reporter:</strong> {report.reporter}</p>
                            <p><strong>Type:</strong> {report.reportType}</p>
                            <p><strong>Reported:</strong> {report.reportedAt}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>Reported {report.reportedAt}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleReportAction(report.id, 'view')}
                        >
                          <Eye className="h-3 w-3" />
                          View Content
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleReportAction(report.id, 'dismiss')}
                        >
                          <CheckCircle className="h-3 w-3" />
                          Dismiss
                        </Button>
                        <Button 
                          size="sm" 
                          variant="destructive"
                          onClick={() => handleReportAction(report.id, 'takedown')}
                        >
                          <Ban className="h-3 w-3" />
                          Take Action
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Content Moderation Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Reports</p>
                    <p className="text-2xl font-bold text-gray-900">47</p>
                    <p className="text-xs text-gray-500">This month</p>
                  </div>
                  <Flag className="h-8 w-8 text-red-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Resolved</p>
                    <p className="text-2xl font-bold text-gray-900">32</p>
                    <p className="text-xs text-gray-500">68% resolution rate</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Pending</p>
                    <p className="text-2xl font-bold text-gray-900">15</p>
                    <p className="text-xs text-gray-500">Awaiting review</p>
                  </div>
                  <Clock className="h-8 w-8 text-yellow-600" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}

export default Analytics
