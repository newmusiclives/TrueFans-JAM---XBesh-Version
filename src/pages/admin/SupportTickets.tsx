import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { 
  MessageSquare, 
  Search, 
  Filter, 
  MoreVertical, 
  Eye, 
  MessageCircle, 
  Clock,
  CheckCircle,
  AlertTriangle,
  User,
  Mail,
  Phone,
  Calendar,
  Tag,
  ArrowLeft,
  Reply,
  Archive,
  Star,
  Flag,
  Paperclip,
  Send,
  Users,
  TrendingUp,
  Timer
} from 'lucide-react'

const SupportTickets: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterPriority, setFilterPriority] = useState('all')
  const [activeTab, setActiveTab] = useState('open')
  const [selectedTicket, setSelectedTicket] = useState<any>(null)
  const [replyText, setReplyText] = useState('')
  const location = useLocation()

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const tickets = [
    {
      id: 'TKT-001',
      subject: 'Payment not received for completed show',
      description: 'I completed a show 3 days ago but haven\'t received payment yet. The host confirmed the show was successful.',
      user: 'Luna Rivers',
      userType: 'artist',
      email: 'luna.rivers@email.com',
      phone: '+1 (555) 123-4567',
      status: 'open',
      priority: 'high',
      category: 'payment',
      createdAt: '2024-03-15 10:30',
      lastReply: '2024-03-15 14:20',
      assignedTo: 'Sarah Chen',
      tags: ['payment', 'urgent', 'artist'],
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      tourId: 'TOUR-001',
      showDate: '2024-03-12',
      venue: 'The Blue Note',
      amount: '$450',
      replies: [
        {
          id: 1,
          author: 'Luna Rivers',
          role: 'Artist',
          message: 'I completed a show 3 days ago but haven\'t received payment yet. The host confirmed the show was successful.',
          timestamp: '2024-03-15 10:30',
          avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
        },
        {
          id: 2,
          author: 'Sarah Chen',
          role: 'Support Admin',
          message: 'Hi Luna, I\'m looking into this payment issue. Can you please provide the show ID and host contact information?',
          timestamp: '2024-03-15 14:20',
          avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
        }
      ]
    },
    {
      id: 'TKT-002',
      subject: 'Venue safety concerns reported',
      description: 'Multiple artists have reported safety issues at this venue including poor lighting and emergency exit blockages.',
      user: 'Marcus Rodriguez',
      userType: 'host',
      email: 'marcus.rodriguez@email.com',
      phone: '+1 (555) 234-5678',
      status: 'in-progress',
      priority: 'urgent',
      category: 'safety',
      createdAt: '2024-03-14 16:45',
      lastReply: '2024-03-15 09:15',
      assignedTo: 'Mike Johnson',
      tags: ['safety', 'venue', 'urgent'],
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      venueId: 'VEN-123',
      venueName: 'Underground Club',
      location: 'Tampa, FL',
      replies: [
        {
          id: 1,
          author: 'Marcus Rodriguez',
          role: 'Host',
          message: 'Multiple artists have reported safety issues at this venue including poor lighting and emergency exit blockages.',
          timestamp: '2024-03-14 16:45',
          avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
        }
      ]
    },
    {
      id: 'TKT-003',
      subject: 'Account verification stuck in pending',
      description: 'My artist verification has been pending for over a week. I\'ve submitted all required documents.',
      user: 'Emma Thompson',
      userType: 'artist',
      email: 'emma.thompson@email.com',
      phone: '+1 (555) 345-6789',
      status: 'open',
      priority: 'medium',
      category: 'account',
      createdAt: '2024-03-13 11:20',
      lastReply: '2024-03-13 11:20',
      assignedTo: null,
      tags: ['verification', 'account', 'documents'],
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      documentsSubmitted: ['ID Verification', 'Portfolio', 'References'],
      replies: [
        {
          id: 1,
          author: 'Emma Thompson',
          role: 'Artist',
          message: 'My artist verification has been pending for over a week. I\'ve submitted all required documents.',
          timestamp: '2024-03-13 11:20',
          avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
        }
      ]
    },
    {
      id: 'TKT-004',
      subject: 'Technical issue with tour creation',
      description: 'The tour creation wizard keeps crashing when I try to select dates. Browser console shows JavaScript errors.',
      user: 'David Chen',
      userType: 'artist',
      email: 'david.chen@email.com',
      phone: '+1 (555) 456-7890',
      status: 'resolved',
      priority: 'low',
      category: 'technical',
      createdAt: '2024-03-12 09:15',
      lastReply: '2024-03-12 15:30',
      assignedTo: 'Tech Team',
      tags: ['bug', 'tour-creation', 'javascript'],
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      browserInfo: 'Chrome 122.0.6261.94',
      errorLog: 'TypeError: Cannot read property of undefined',
      replies: [
        {
          id: 1,
          author: 'David Chen',
          role: 'Artist',
          message: 'The tour creation wizard keeps crashing when I try to select dates. Browser console shows JavaScript errors.',
          timestamp: '2024-03-12 09:15',
          avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
        },
        {
          id: 2,
          author: 'Tech Team',
          role: 'Technical Support',
          message: 'Thanks for reporting this. We\'ve identified and fixed the JavaScript error. Please try again and let us know if you still experience issues.',
          timestamp: '2024-03-12 15:30',
          avatar: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
        }
      ]
    },
    {
      id: 'TKT-005',
      subject: 'Request for refund - cancelled show',
      description: 'Host cancelled show last minute due to personal emergency. Requesting full refund for travel expenses.',
      user: 'Sarah Wilson',
      userType: 'artist',
      email: 'sarah.wilson@email.com',
      phone: '+1 (555) 567-8901',
      status: 'closed',
      priority: 'medium',
      category: 'refund',
      createdAt: '2024-03-10 14:30',
      lastReply: '2024-03-11 10:45',
      assignedTo: 'Finance Team',
      tags: ['refund', 'cancellation', 'travel'],
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      refundAmount: '$280',
      refundStatus: 'processed',
      replies: [
        {
          id: 1,
          author: 'Sarah Wilson',
          role: 'Artist',
          message: 'Host cancelled show last minute due to personal emergency. Requesting full refund for travel expenses.',
          timestamp: '2024-03-10 14:30',
          avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
        },
        {
          id: 2,
          author: 'Finance Team',
          role: 'Financial Support',
          message: 'We understand the inconvenience. Your refund of $280 has been processed and should appear in your account within 3-5 business days.',
          timestamp: '2024-03-11 10:45',
          avatar: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
        }
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'text-red-600 bg-red-100'
      case 'in-progress': return 'text-blue-600 bg-blue-100'
      case 'resolved': return 'text-green-600 bg-green-100'
      case 'closed': return 'text-gray-600 bg-gray-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'text-red-600 bg-red-100'
      case 'high': return 'text-orange-600 bg-orange-100'
      case 'medium': return 'text-yellow-600 bg-yellow-100'
      case 'low': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'payment': return <DollarSign className="h-4 w-4" />
      case 'safety': return <AlertTriangle className="h-4 w-4" />
      case 'account': return <User className="h-4 w-4" />
      case 'technical': return <MessageSquare className="h-4 w-4" />
      case 'refund': return <DollarSign className="h-4 w-4" />
      default: return <MessageSquare className="h-4 w-4" />
    }
  }

  const getUserTypeColor = (userType: string) => {
    switch (userType) {
      case 'artist': return 'text-purple-600 bg-purple-100'
      case 'host': return 'text-blue-600 bg-blue-100'
      case 'admin': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || ticket.status === filterStatus
    const matchesPriority = filterPriority === 'all' || ticket.priority === filterPriority
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'open' && (ticket.status === 'open' || ticket.status === 'in-progress')) ||
                      (activeTab === 'resolved' && ticket.status === 'resolved') ||
                      (activeTab === 'closed' && ticket.status === 'closed')
    return matchesSearch && matchesStatus && matchesPriority && matchesTab
  })

  const handleTicketAction = (ticketId: string, action: string) => {
    console.log(`${action} ticket ${ticketId}`)
    // In a real app, this would update the ticket status
  }

  const handleSendReply = () => {
    if (!replyText.trim() || !selectedTicket) return
    
    console.log('Sending reply:', replyText)
    setReplyText('')
    // In a real app, this would send the reply
  }

  const getTabCount = (tab: string) => {
    if (tab === 'open') return tickets.filter(t => t.status === 'open' || t.status === 'in-progress').length
    if (tab === 'resolved') return tickets.filter(t => t.status === 'resolved').length
    if (tab === 'closed') return tickets.filter(t => t.status === 'closed').length
    return tickets.length
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
          <h1 className="text-2xl font-bold text-gray-900">Support Tickets</h1>
          <p className="text-gray-600">Manage customer support requests and issues</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <TrendingUp className="h-4 w-4" />
            Analytics
          </Button>
          <Button>
            <MessageSquare className="h-4 w-4" />
            New Ticket
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-red-100 rounded-lg">
                <Clock className="h-4 w-4 text-red-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Open Tickets</p>
                <p className="text-2xl font-bold text-gray-900">{getTabCount('open')}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Timer className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Response</p>
                <p className="text-2xl font-bold text-gray-900">2.4h</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Resolved Today</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Star className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Satisfaction</p>
                <p className="text-2xl font-bold text-gray-900">4.8/5</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('open')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'open'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Open</span>
              <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full">
                {getTabCount('open')}
              </span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('resolved')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'resolved'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>Resolved</span>
              <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full">
                {getTabCount('resolved')}
              </span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('closed')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'closed'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Archive className="h-4 w-4" />
              <span>Closed</span>
              <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                {getTabCount('closed')}
              </span>
            </div>
          </button>
        </nav>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Tickets List */}
        <div className="lg:col-span-2 space-y-4">
          {/* Search and Filters */}
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search tickets..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2">
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="open">Open</option>
                    <option value="in-progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                    <option value="closed">Closed</option>
                  </select>
                  <select
                    value={filterPriority}
                    onChange={(e) => setFilterPriority(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="all">All Priority</option>
                    <option value="urgent">Urgent</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tickets */}
          <div className="space-y-3">
            {filteredTickets.map((ticket, index) => (
              <motion.div
                key={ticket.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setSelectedTicket(ticket)}
                className={`cursor-pointer transition-all ${
                  selectedTicket?.id === ticket.id ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                <Card className="hover:shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start space-x-3">
                        <img
                          src={ticket.avatar}
                          alt={ticket.user}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-semibold text-gray-900">{ticket.subject}</h3>
                            <span className="text-xs text-gray-500">({ticket.id})</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2 line-clamp-2">{ticket.description}</p>
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <span>{ticket.user}</span>
                            <span>•</span>
                            <span className={`px-2 py-0.5 rounded-full ${getUserTypeColor(ticket.userType)}`}>
                              {ticket.userType}
                            </span>
                            <span>•</span>
                            <span>{new Date(ticket.createdAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                          {ticket.priority}
                        </span>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                          {ticket.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {getCategoryIcon(ticket.category)}
                        <span className="text-sm text-gray-600 capitalize">{ticket.category}</span>
                        {ticket.assignedTo && (
                          <>
                            <span className="text-gray-400">•</span>
                            <span className="text-sm text-gray-600">Assigned to {ticket.assignedTo}</span>
                          </>
                        )}
                      </div>
                      <div className="flex items-center space-x-1">
                        {ticket.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ticket Detail Panel */}
        <div className="lg:col-span-1">
          {selectedTicket ? (
            <Card className="sticky top-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{selectedTicket.subject}</CardTitle>
                  <Button variant="outline" size="sm">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription>
                  Ticket {selectedTicket.id} • {selectedTicket.category}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* User Info */}
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <img
                    src={selectedTicket.avatar}
                    alt={selectedTicket.user}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{selectedTicket.user}</p>
                    <p className="text-sm text-gray-600">{selectedTicket.email}</p>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getUserTypeColor(selectedTicket.userType)}`}>
                      {selectedTicket.userType}
                    </span>
                  </div>
                </div>

                {/* Status and Priority */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Status</label>
                    <select
                      value={selectedTicket.status}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="open">Open</option>
                      <option value="in-progress">In Progress</option>
                      <option value="resolved">Resolved</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Priority</label>
                    <select
                      value={selectedTicket.priority}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>

                {/* Conversation */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Conversation</h4>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {selectedTicket.replies.map((reply: any) => (
                      <div key={reply.id} className="flex space-x-3">
                        <img
                          src={reply.avatar}
                          alt={reply.author}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-sm font-medium text-gray-900">{reply.author}</span>
                            <span className="text-xs text-gray-500">{reply.role}</span>
                            <span className="text-xs text-gray-400">{reply.timestamp}</span>
                          </div>
                          <p className="text-sm text-gray-700 bg-gray-50 rounded-lg p-3">{reply.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reply Box */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Reply</label>
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Type your reply..."
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <div className="flex justify-between items-center mt-2">
                    <Button variant="outline" size="sm">
                      <Paperclip className="h-4 w-4" />
                      Attach
                    </Button>
                    <Button onClick={handleSendReply} size="sm">
                      <Send className="h-4 w-4" />
                      Send Reply
                    </Button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2 pt-4 border-t">
                  <Button 
                    size="sm" 
                    onClick={() => handleTicketAction(selectedTicket.id, 'resolve')}
                  >
                    <CheckCircle className="h-4 w-4" />
                    Resolve
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => handleTicketAction(selectedTicket.id, 'escalate')}
                  >
                    <Flag className="h-4 w-4" />
                    Escalate
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Ticket</h3>
                <p className="text-gray-600">Choose a ticket from the list to view details and manage the conversation.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

export default SupportTickets
