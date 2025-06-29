import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { 
  Music, 
  Search, 
  Filter, 
  MoreVertical, 
  Eye, 
  Ban, 
  CheckCircle, 
  Calendar,
  MapPin,
  Users,
  DollarSign,
  Clock,
  ArrowLeft,
  AlertTriangle,
  Play,
  Pause,
  XCircle,
  Edit,
  Route,
  Star,
  MessageSquare,
  Phone,
  Mail
} from 'lucide-react'

const TourManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [activeTab, setActiveTab] = useState('active')
  const location = useLocation()

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const tours = [
    {
      id: 'TOUR-001',
      title: 'Luna Rivers - Spring Acoustic Tour',
      artist: 'Luna Rivers',
      artistId: 'ART-1239',
      status: 'active',
      startDate: '2024-04-15',
      endDate: '2024-05-20',
      totalShows: 12,
      completedShows: 3,
      totalRevenue: '$8,450',
      estimatedRevenue: '$15,600',
      cities: ['Nashville', 'Atlanta', 'Charlotte', 'Raleigh', 'Richmond'],
      currentLocation: 'Atlanta, GA',
      nextShow: '2024-04-18 19:00',
      nextVenue: 'The Blue Note',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      priority: 'normal',
      issues: 0
    },
    {
      id: 'TOUR-002',
      title: 'Marcus Rodriguez - Jazz Nights Tour',
      artist: 'Marcus Rodriguez',
      artistId: 'ART-2379',
      status: 'planning',
      startDate: '2024-05-01',
      endDate: '2024-06-15',
      totalShows: 18,
      completedShows: 0,
      totalRevenue: '$0',
      estimatedRevenue: '$22,400',
      cities: ['Chicago', 'Detroit', 'Cleveland', 'Pittsburgh', 'Buffalo'],
      currentLocation: 'Planning Phase',
      nextShow: 'TBD',
      nextVenue: 'Pending Host Confirmations',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      priority: 'high',
      issues: 2
    },
    {
      id: 'TOUR-003',
      title: 'Emma Thompson - Indie Folk Journey',
      artist: 'Emma Thompson',
      artistId: 'ART-1181',
      status: 'completed',
      startDate: '2024-02-10',
      endDate: '2024-03-25',
      totalShows: 15,
      completedShows: 15,
      totalRevenue: '$12,340',
      estimatedRevenue: '$12,340',
      cities: ['Portland', 'Seattle', 'Vancouver', 'Spokane', 'Boise'],
      currentLocation: 'Tour Completed',
      nextShow: 'N/A',
      nextVenue: 'N/A',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      priority: 'normal',
      issues: 0
    },
    {
      id: 'TOUR-004',
      title: 'Sarah Wilson - Electronic Vibes Tour',
      artist: 'Sarah Wilson',
      artistId: 'ART-1130',
      status: 'suspended',
      startDate: '2024-03-20',
      endDate: '2024-04-30',
      totalShows: 10,
      completedShows: 4,
      totalRevenue: '$3,200',
      estimatedRevenue: '$8,900',
      cities: ['Miami', 'Orlando', 'Tampa', 'Jacksonville'],
      currentLocation: 'Suspended - Orlando, FL',
      nextShow: 'Suspended',
      nextVenue: 'Pending Resolution',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      priority: 'urgent',
      issues: 3
    },
    {
      id: 'TOUR-005',
      title: 'David Chen - Classical Crossover Tour',
      artist: 'David Chen',
      artistId: 'ART-1040',
      status: 'cancelled',
      startDate: '2024-04-01',
      endDate: '2024-05-15',
      totalShows: 8,
      completedShows: 0,
      totalRevenue: '$0',
      estimatedRevenue: '$0',
      cities: ['San Francisco', 'Los Angeles', 'San Diego'],
      currentLocation: 'Cancelled',
      nextShow: 'N/A',
      nextVenue: 'N/A',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      priority: 'low',
      issues: 1
    }
  ]

  // Tour Issues Data
  const tourIssues = [
    {
      id: 'ISS-001',
      tourId: 'TOUR-002',
      tourTitle: 'Marcus Rodriguez - Jazz Nights Tour',
      artist: 'Marcus Rodriguez',
      issueType: 'Host Cancellation',
      severity: 'High',
      status: 'Open',
      description: 'Host cancelled 3 days before show due to venue double-booking',
      affectedShow: 'Chicago - May 5th, 2024',
      venue: 'Jazz Corner',
      reportedAt: '2024-03-15 10:30',
      estimatedLoss: '$1,200',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      contactInfo: 'marcus.rodriguez@email.com'
    },
    {
      id: 'ISS-002',
      tourId: 'TOUR-002',
      tourTitle: 'Marcus Rodriguez - Jazz Nights Tour',
      artist: 'Marcus Rodriguez',
      issueType: 'Equipment Issue',
      severity: 'Medium',
      status: 'In Progress',
      description: 'Sound equipment malfunction reported at Detroit venue',
      affectedShow: 'Detroit - May 8th, 2024',
      venue: 'Motor City Music Hall',
      reportedAt: '2024-03-14 16:45',
      estimatedLoss: '$400',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      contactInfo: 'marcus.rodriguez@email.com'
    },
    {
      id: 'ISS-003',
      tourId: 'TOUR-004',
      tourTitle: 'Sarah Wilson - Electronic Vibes Tour',
      artist: 'Sarah Wilson',
      issueType: 'Payment Dispute',
      severity: 'High',
      status: 'Escalated',
      description: 'Host disputes payment amount for Orlando show',
      affectedShow: 'Orlando - March 25th, 2024',
      venue: 'Sunset Lounge',
      reportedAt: '2024-03-13 14:20',
      estimatedLoss: '$800',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      contactInfo: 'sarah.wilson@email.com'
    },
    {
      id: 'ISS-004',
      tourId: 'TOUR-004',
      tourTitle: 'Sarah Wilson - Electronic Vibes Tour',
      artist: 'Sarah Wilson',
      issueType: 'Safety Concern',
      severity: 'Urgent',
      status: 'Open',
      description: 'Venue safety violations reported by local authorities',
      affectedShow: 'Tampa - March 28th, 2024',
      venue: 'Underground Club',
      reportedAt: '2024-03-12 09:15',
      estimatedLoss: '$1,500',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      contactInfo: 'sarah.wilson@email.com'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100'
      case 'planning': return 'text-blue-600 bg-blue-100'
      case 'completed': return 'text-gray-600 bg-gray-100'
      case 'suspended': return 'text-yellow-600 bg-yellow-100'
      case 'cancelled': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'text-red-600'
      case 'high': return 'text-orange-600'
      case 'normal': return 'text-green-600'
      case 'low': return 'text-gray-600'
      default: return 'text-gray-600'
    }
  }

  const getIssueSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Urgent': return 'text-red-600 bg-red-100'
      case 'High': return 'text-orange-600 bg-orange-100'
      case 'Medium': return 'text-yellow-600 bg-yellow-100'
      case 'Low': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getIssueStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'text-red-600 bg-red-100'
      case 'In Progress': return 'text-blue-600 bg-blue-100'
      case 'Escalated': return 'text-purple-600 bg-purple-100'
      case 'Resolved': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const filteredTours = tours.filter(tour => {
    const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tour.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tour.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || tour.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const handleTourAction = (tourId: string, action: string) => {
    console.log(`${action} tour ${tourId}`)
    // In a real app, this would update the tour status
  }

  const handleIssueAction = (issueId: string, action: string) => {
    console.log(`${action} issue ${issueId}`)
    // In a real app, this would update the issue status
  }

  const getTabTours = (status: string) => {
    if (status === 'active') return tours.filter(t => t.status === 'active' || t.status === 'planning')
    if (status === 'issues') return tours.filter(t => t.issues > 0)
    return tours.filter(t => t.status === status)
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

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tour Management</h1>
          <p className="text-gray-600">Monitor and manage artist tours across the platform</p>
        </div>
        <Button>
          <Music className="h-4 w-4" />
          Create Tour
        </Button>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('active')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'active'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Play className="h-4 w-4" />
              <span>Active Tours</span>
              <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full">
                {getTabTours('active').length}
              </span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('issues')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'issues'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4" />
              <span>Issues</span>
              <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full">
                {tourIssues.length}
              </span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'completed'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>Completed</span>
              <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                {getTabTours('completed').length}
              </span>
            </div>
          </button>
        </nav>
      </div>

      {activeTab !== 'issues' && (
        <>
          {/* Search and Filters */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search tours..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2">
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="planning">Planning</option>
                    <option value="completed">Completed</option>
                    <option value="suspended">Suspended</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                  <Button variant="outline">
                    <Filter className="h-4 w-4" />
                    More Filters
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tours Grid */}
          <div className="grid gap-6">
            {filteredTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className={`${tour.issues > 0 ? 'ring-2 ring-red-200 bg-red-50' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <img
                          src={tour.avatar}
                          alt={tour.artist}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-xl font-semibold text-gray-900">{tour.title}</h3>
                            <span className="text-sm text-gray-500">({tour.id})</span>
                            {tour.issues > 0 && (
                              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
                                {tour.issues} ISSUE{tour.issues > 1 ? 'S' : ''}
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 mb-2">Artist: {tour.artist} ({tour.artistId})</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(tour.startDate).toLocaleDateString()} - {new Date(tour.endDate).toLocaleDateString()}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Music className="h-4 w-4" />
                              <span>{tour.completedShows}/{tour.totalShows} shows</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <DollarSign className="h-4 w-4" />
                              <span>{tour.totalRevenue} / {tour.estimatedRevenue}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs font-medium ${getPriorityColor(tour.priority)}`}>
                          {tour.priority.toUpperCase()}
                        </span>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(tour.status)}`}>
                          {tour.status}
                        </span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Current Status</h4>
                        <div className="space-y-1 text-sm">
                          <p><strong>Location:</strong> {tour.currentLocation}</p>
                          <p><strong>Next Show:</strong> {tour.nextShow}</p>
                          <p><strong>Venue:</strong> {tour.nextVenue}</p>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Tour Cities</h4>
                        <div className="flex flex-wrap gap-1">
                          {tour.cities.map((city, idx) => (
                            <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                              {city}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <MapPin className="h-4 w-4" />
                        <span>Progress: {Math.round((tour.completedShows / tour.totalShows) * 100)}%</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-3 w-3" />
                          View Details
                        </Button>
                        <Button size="sm" variant="outline">
                          <Route className="h-3 w-3" />
                          View Route
                        </Button>
                        {tour.status === 'active' && (
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleTourAction(tour.id, 'pause')}
                          >
                            <Pause className="h-3 w-3" />
                            Pause
                          </Button>
                        )}
                        {tour.status === 'suspended' && (
                          <Button 
                            size="sm" 
                            onClick={() => handleTourAction(tour.id, 'resume')}
                          >
                            <Play className="h-3 w-3" />
                            Resume
                          </Button>
                        )}
                        <Button size="sm" variant="outline">
                          <MoreVertical className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </>
      )}

      {activeTab === 'issues' && (
        <div className="space-y-6">
          {/* Issues Header */}
          <Card className="border-l-4 border-l-red-500 bg-red-50">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <div>
                  <h3 className="text-lg font-semibold text-red-900">Tour Issues Requiring Attention</h3>
                  <p className="text-red-700">Review and resolve tour-related problems</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Issues List */}
          <div className="space-y-4">
            {tourIssues.map((issue, index) => (
              <motion.div
                key={issue.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <img
                          src={issue.avatar}
                          alt={issue.artist}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-lg font-semibold text-gray-900">{issue.tourTitle}</h3>
                            <span className="text-sm text-gray-500">({issue.tourId})</span>
                          </div>
                          <p className="text-gray-600 mb-2">{issue.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>Issue: {issue.issueType}</span>
                            <span>•</span>
                            <span>Show: {issue.affectedShow}</span>
                            <span>•</span>
                            <span>Venue: {issue.venue}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getIssueSeverityColor(issue.severity)}`}>
                          {issue.severity}
                        </span>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getIssueStatusColor(issue.status)}`}>
                          {issue.status}
                        </span>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Issue Details</h4>
                          <div className="space-y-1 text-sm">
                            <p><strong>Type:</strong> {issue.issueType}</p>
                            <p><strong>Estimated Loss:</strong> {issue.estimatedLoss}</p>
                            <p><strong>Reported:</strong> {issue.reportedAt}</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Contact Info</h4>
                          <div className="space-y-1 text-sm">
                            <p><strong>Artist:</strong> {issue.artist}</p>
                            <p><strong>Email:</strong> {issue.contactInfo}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>Reported {issue.reportedAt}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleIssueAction(issue.id, 'contact')}
                        >
                          <MessageSquare className="h-3 w-3" />
                          Contact Artist
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleIssueAction(issue.id, 'escalate')}
                        >
                          <AlertTriangle className="h-3 w-3" />
                          Escalate
                        </Button>
                        <Button 
                          size="sm" 
                          onClick={() => handleIssueAction(issue.id, 'resolve')}
                        >
                          <CheckCircle className="h-3 w-3" />
                          Mark Resolved
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default TourManagement
