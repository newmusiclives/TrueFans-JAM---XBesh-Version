import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card'
import { 
  ArrowLeft, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Music, 
  Calendar,
  MapPin,
  Star,
  Download,
  Filter,
  BarChart3,
  PieChart,
  LineChart
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const ArtistAnalytics: React.FC = () => {
  const navigate = useNavigate()
  const [timeRange, setTimeRange] = useState('30d')
  const [selectedMetric, setSelectedMetric] = useState('overview')

  const overviewStats = [
    { 
      label: 'Total Revenue', 
      value: '$12,450', 
      change: '+18%', 
      trend: 'up',
      icon: <DollarSign className="h-5 w-5" />,
      color: 'text-green-600'
    },
    { 
      label: 'Shows Performed', 
      value: '47', 
      change: '+12%', 
      trend: 'up',
      icon: <Music className="h-5 w-5" />,
      color: 'text-blue-600'
    },
    { 
      label: 'Total Audience', 
      value: '1,284', 
      change: '+25%', 
      trend: 'up',
      icon: <Users className="h-5 w-5" />,
      color: 'text-purple-600'
    },
    { 
      label: 'Average Rating', 
      value: '4.8', 
      change: '+0.2', 
      trend: 'up',
      icon: <Star className="h-5 w-5" />,
      color: 'text-yellow-600'
    }
  ]

  const recentShows = [
    {
      venue: 'The Cozy Living Room',
      host: 'Sarah Martinez',
      date: '2024-01-15',
      location: 'Portland, OR',
      attendees: 25,
      revenue: '$350',
      rating: 5.0
    },
    {
      venue: 'Garden Studio Space',
      host: 'Michael Chen',
      date: '2024-01-10',
      location: 'Seattle, WA',
      attendees: 30,
      revenue: '$425',
      rating: 4.9
    },
    {
      venue: 'Downtown Loft',
      host: 'Emma Thompson',
      date: '2024-01-05',
      location: 'San Francisco, CA',
      attendees: 35,
      revenue: '$475',
      rating: 4.8
    },
    {
      venue: 'Acoustic Haven',
      host: 'David Kim',
      date: '2024-01-01',
      location: 'Austin, TX',
      attendees: 28,
      revenue: '$380',
      rating: 4.9
    }
  ]

  const topLocations = [
    { city: 'Portland, OR', shows: 12, revenue: '$3,240', avgRating: 4.9 },
    { city: 'Seattle, WA', shows: 8, revenue: '$2,680', avgRating: 4.8 },
    { city: 'San Francisco, CA', shows: 6, revenue: '$2,150', avgRating: 4.7 },
    { city: 'Austin, TX', shows: 5, revenue: '$1,890', avgRating: 4.8 },
    { city: 'Denver, CO', shows: 4, revenue: '$1,520', avgRating: 4.9 }
  ]

  const monthlyData = [
    { month: 'Aug', shows: 3, revenue: 850, audience: 78 },
    { month: 'Sep', shows: 5, revenue: 1420, audience: 142 },
    { month: 'Oct', shows: 7, revenue: 1980, audience: 189 },
    { month: 'Nov', shows: 6, revenue: 1750, audience: 156 },
    { month: 'Dec', shows: 8, revenue: 2340, audience: 234 },
    { month: 'Jan', shows: 9, revenue: 2680, audience: 267 }
  ]

  const audienceInsights = [
    { ageGroup: '18-24', percentage: 15, count: 193 },
    { ageGroup: '25-34', percentage: 35, count: 449 },
    { ageGroup: '35-44', percentage: 28, count: 359 },
    { ageGroup: '45-54', percentage: 15, count: 193 },
    { ageGroup: '55+', percentage: 7, count: 90 }
  ]

  const handleExportData = () => {
    toast.success('Analytics data exported to CSV')
  }

  const handleScheduleReport = () => {
    toast.success('Monthly report scheduled')
  }

  const handleViewDetails = (show: any) => {
    toast.info(`Opening details for ${show.venue}`)
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
                  Analytics & Insights
                </h1>
                <p className="text-sm text-gray-600">
                  Track your performance and growth
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <select 
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 3 months</option>
                <option value="1y">Last year</option>
              </select>
              <Button variant="outline" size="sm" onClick={handleExportData}>
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {overviewStats.map((stat, index) => (
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
                      <p className={`text-xs mt-1 ${stat.color}`}>
                        {stat.change} from last period
                      </p>
                    </div>
                    <div className={`p-3 rounded-lg ${stat.color.replace('text-', 'bg-').replace('-600', '-100')} ${stat.color}`}>
                      {stat.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Charts */}
          <div className="lg:col-span-2 space-y-6">
            {/* Performance Trends */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <LineChart className="h-5 w-5" />
                      Performance Trends
                    </CardTitle>
                    <CardDescription>
                      Your shows, revenue, and audience growth over time
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant={selectedMetric === 'shows' ? 'default' : 'outline'}
                      onClick={() => setSelectedMetric('shows')}
                    >
                      Shows
                    </Button>
                    <Button 
                      size="sm" 
                      variant={selectedMetric === 'revenue' ? 'default' : 'outline'}
                      onClick={() => setSelectedMetric('revenue')}
                    >
                      Revenue
                    </Button>
                    <Button 
                      size="sm" 
                      variant={selectedMetric === 'audience' ? 'default' : 'outline'}
                      onClick={() => setSelectedMetric('audience')}
                    >
                      Audience
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Chart visualization would appear here</p>
                    <p className="text-sm text-gray-500">Showing {selectedMetric} trends for {timeRange}</p>
                  </div>
                </div>
                
                {/* Data Table */}
                <div className="mt-6">
                  <div className="grid grid-cols-6 gap-4 text-sm">
                    <div className="font-medium text-gray-600">Month</div>
                    <div className="font-medium text-gray-600">Shows</div>
                    <div className="font-medium text-gray-600">Revenue</div>
                    <div className="font-medium text-gray-600">Audience</div>
                    <div className="font-medium text-gray-600">Avg/Show</div>
                    <div className="font-medium text-gray-600">Growth</div>
                    
                    {monthlyData.map((data, index) => (
                      <React.Fragment key={data.month}>
                        <div className="text-gray-900">{data.month}</div>
                        <div className="text-gray-900">{data.shows}</div>
                        <div className="text-gray-900">${data.revenue}</div>
                        <div className="text-gray-900">{data.audience}</div>
                        <div className="text-gray-900">${Math.round(data.revenue / data.shows)}</div>
                        <div className="text-green-600">
                          {index > 0 ? '+' + Math.round(((data.revenue - monthlyData[index-1].revenue) / monthlyData[index-1].revenue) * 100) + '%' : '-'}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Shows */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Recent Shows Performance
                </CardTitle>
                <CardDescription>
                  Detailed breakdown of your latest performances
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentShows.map((show, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{show.venue}</h4>
                        <p className="text-sm text-gray-600">Hosted by {show.host}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {show.date}
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
                          {show.revenue}
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span>{show.rating}</span>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="ml-4"
                        onClick={() => handleViewDetails(show)}
                      >
                        Details
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Locations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Top Locations
                </CardTitle>
                <CardDescription>
                  Your best performing cities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topLocations.map((location, index) => (
                    <div key={location.city} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">{location.city}</div>
                        <div className="text-sm text-gray-600">
                          {location.shows} shows • {location.revenue}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="text-sm">{location.avgRating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Audience Demographics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Audience Demographics
                </CardTitle>
                <CardDescription>
                  Age breakdown of your audience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {audienceInsights.map((insight, index) => (
                    <div key={insight.ageGroup} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-sm font-medium text-gray-900">
                          {insight.ageGroup}
                        </div>
                        <div className="flex-1 bg-gray-200 rounded-full h-2 w-20">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${insight.percentage}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        {insight.percentage}% ({insight.count})
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Reports & Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button fullWidth variant="outline" onClick={handleExportData}>
                  <Download className="h-4 w-4 mr-2" />
                  Export Full Report
                </Button>
                <Button fullWidth variant="outline" onClick={handleScheduleReport}>
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Monthly Report
                </Button>
                <Button fullWidth variant="outline">
                  <PieChart className="h-4 w-4 mr-2" />
                  Custom Dashboard
                </Button>
                <Button fullWidth variant="outline">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Growth Insights
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistAnalytics
