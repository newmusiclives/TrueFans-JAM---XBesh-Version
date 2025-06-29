import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useAuthStore } from '../stores/authStore'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { 
  Shield, 
  Users, 
  Music, 
  Home, 
  TrendingUp, 
  AlertTriangle,
  DollarSign,
  Calendar,
  Settings,
  Bell,
  LogOut,
  Eye,
  Ban,
  CheckCircle,
  ArrowRight,
  X
} from 'lucide-react'

const AdminDashboard: React.FC = () => {
  const { user, profile, signOut } = useAuthStore()
  const location = useLocation()
  const [showNotifications, setShowNotifications] = useState(false)

  // Scroll to top when component mounts or location changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  const handleLinkClick = () => {
    // Scroll to top when any navigation link is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNotificationsClick = () => {
    setShowNotifications(!showNotifications)
  }

  const handlePendingActionApprove = (actionId: number) => {
    // In a real app, this would approve the action
    console.log('Approving pending action:', actionId)
    // Show success notification
  }

  const notifications = [
    { id: 1, type: 'urgent', title: 'Content Report', message: 'Inappropriate content reported for show #1247', time: '5 min ago' },
    { id: 2, type: 'info', title: 'New Artist Registration', message: 'Emma Thompson submitted verification documents', time: '15 min ago' },
    { id: 3, type: 'warning', title: 'Payment Issue', message: 'Marcus Rodriguez needs payment method verification', time: '1 hour ago' }
  ]

  const platformStats = [
    { label: 'Total Users', value: '3,847', icon: <Users className="h-5 w-5" />, change: '+127 this month' },
    { label: 'Active Artists', value: '2,456', icon: <Music className="h-5 w-5" />, change: '+89 this week' },
    { label: 'Active Hosts', value: '1,391', icon: <Home className="h-5 w-5" />, change: '+38 this week' },
    { label: 'Platform Revenue', value: '$48,920', icon: <DollarSign className="h-5 w-5" />, change: '+12% this month' }
  ]

  const recentActivity = [
    { type: 'user', message: 'New artist registration: Emma Thompson', time: '5 minutes ago', status: 'pending' },
    { type: 'report', message: 'Content report filed for show #1247', time: '15 minutes ago', status: 'urgent' },
    { type: 'payout', message: 'Payout processed: $2,340 to 15 artists', time: '1 hour ago', status: 'completed' },
    { type: 'verification', message: 'Host verification completed: Mike\'s Music Room', time: '2 hours ago', status: 'completed' },
    { type: 'system', message: 'System maintenance scheduled for tonight', time: '3 hours ago', status: 'info' }
  ]

  const pendingActions = [
    { 
      id: 1, 
      type: 'Artist Verification', 
      user: 'Luna Rivers', 
      action: 'Identity verification pending', 
      priority: 'medium',
      route: '/admin/users'
    },
    { 
      id: 2, 
      type: 'Content Report', 
      user: 'Show #1247', 
      action: 'Inappropriate content reported', 
      priority: 'high',
      route: '/admin/analytics'
    },
    { 
      id: 3, 
      type: 'Payout Issue', 
      user: 'Marcus Rodriguez', 
      action: 'Payment method verification needed', 
      priority: 'medium',
      route: '/admin/financial-reports'
    },
    { 
      id: 4, 
      type: 'Host Application', 
      user: 'Sarah\'s Music Haven', 
      action: 'New host application review', 
      priority: 'low',
      route: '/admin/users'
    }
  ]

  const quickActions = [
    { title: 'Manage Users', href: '/admin/users', icon: <Users className="h-4 w-4" />, description: 'View and manage user accounts' },
    { title: 'View Analytics', href: '/admin/analytics', icon: <TrendingUp className="h-4 w-4" />, description: 'Platform performance metrics' },
    { title: 'Financial Reports', href: '/admin/financial-reports', icon: <DollarSign className="h-4 w-4" />, description: 'Revenue and payout reports' },
    { title: 'Platform Settings', href: '/admin/settings', icon: <Settings className="h-4 w-4" />, description: 'Configure platform settings' }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'urgent': return 'text-red-600 bg-red-100'
      case 'pending': return 'text-yellow-600 bg-yellow-100'
      case 'completed': return 'text-green-600 bg-green-100'
      default: return 'text-blue-600 bg-blue-100'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600'
      case 'medium': return 'text-yellow-600'
      default: return 'text-green-600'
    }
  }

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'urgent': return 'border-l-red-500 bg-red-50'
      case 'warning': return 'border-l-yellow-500 bg-yellow-50'
      default: return 'border-l-blue-500 bg-blue-50'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="bg-red-600 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-display font-bold text-gray-900">
                  Admin Dashboard
                </h1>
                <p className="text-sm text-gray-600">
                  Platform Management & Analytics
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Notifications Dropdown */}
              <div className="relative">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleNotificationsClick}
                  className="relative"
                >
                  <Bell className="h-4 w-4" />
                  <span className="ml-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
                </Button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="p-4 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => setShowNotifications(false)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div 
                          key={notification.id} 
                          className={`p-4 border-l-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${getNotificationColor(notification.type)}`}
                          onClick={() => {
                            console.log('Clicked notification:', notification.id)
                            setShowNotifications(false)
                          }}
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>
                              <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                              <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 border-t border-gray-200">
                      <Link to="/admin/users" onClick={() => { handleLinkClick(); setShowNotifications(false); }}>
                        <Button variant="outline" size="sm" fullWidth>
                          View All Notifications
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Settings Link */}
              <Link to="/admin/settings" onClick={handleLinkClick}>
                <Button variant="ghost" size="sm" title="Platform Settings">
                  <Settings className="h-4 w-4" />
                </Button>
              </Link>

              {/* Sign Out */}
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>

        {/* Overlay to close notifications when clicking outside */}
        {showNotifications && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setShowNotifications(false)}
          />
        )}
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome back, {profile?.display_name}
          </h2>
          <p className="text-gray-600">
            Here's what's happening on the TrueFans JAM platform today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {platformStats.map((stat, index) => (
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
          {/* Pending Actions */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Pending Actions
                </CardTitle>
                <CardDescription>
                  Items requiring admin attention
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingActions.map((action, index) => (
                    <motion.div
                      key={action.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-gray-900">{action.type}</h4>
                          <span className={`text-xs font-medium ${getPriorityColor(action.priority)}`}>
                            {action.priority.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{action.user}</p>
                        <p className="text-sm text-gray-500">{action.action}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Link to={action.route} onClick={handleLinkClick}>
                          <Button size="sm" variant="outline" title="View Details">
                            <Eye className="h-3 w-3" />
                          </Button>
                        </Link>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handlePendingActionApprove(action.id)}
                          title="Approve Action"
                        >
                          <CheckCircle className="h-3 w-3" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Link to="/admin/users" onClick={handleLinkClick}>
                    <Button variant="outline">
                      View All Pending Actions
                    </Button>
                  </Link>
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
                {quickActions.map((action, index) => (
                  <Link key={action.title} to={action.href} onClick={handleLinkClick}>
                    <Button fullWidth variant="outline" className="justify-between">
                      <div className="flex items-center space-x-2">
                        {action.icon}
                        <span>{action.title}</span>
                      </div>
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </Link>
                ))}
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
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${getStatusColor(activity.status).split(' ')[1]}`} />
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{activity.message}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  System Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">API Status</span>
                    <span className="text-green-600 text-sm font-medium">Operational</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Database</span>
                    <span className="text-green-600 text-sm font-medium">Healthy</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Payment System</span>
                    <span className="text-green-600 text-sm font-medium">Online</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">CDN</span>
                    <span className="text-yellow-600 text-sm font-medium">Degraded</span>
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

export default AdminDashboard
