import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { 
  DollarSign, 
  TrendingUp, 
  Download, 
  Calendar, 
  CreditCard,
  PieChart,
  BarChart3,
  FileText,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  AlertTriangle,
  Clock,
  CheckCircle,
  XCircle,
  User,
  Eye,
  RefreshCw
} from 'lucide-react'

const FinancialReports: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month')
  const [activeTab, setActiveTab] = useState('overview')
  const location = useLocation()

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const financialSummary = [
    {
      title: 'Total Revenue',
      value: '$127,450',
      change: '+12.5%',
      trend: 'up',
      description: 'Platform revenue this month'
    },
    {
      title: 'Artist Payouts',
      value: '$89,215',
      change: '+8.7%',
      trend: 'up',
      description: 'Total paid to artists'
    },
    {
      title: 'Platform Fees',
      value: '$38,235',
      change: '+15.2%',
      trend: 'up',
      description: 'Commission earned'
    },
    {
      title: 'Pending Payouts',
      value: '$12,340',
      change: '-5.3%',
      trend: 'down',
      description: 'Awaiting processing'
    }
  ]

  const recentTransactions = [
    {
      id: 'TXN-001',
      type: 'payout',
      artist: 'Luna Rivers',
      amount: '$450.00',
      status: 'completed',
      date: '2024-03-15',
      method: 'Bank Transfer'
    },
    {
      id: 'TXN-002',
      type: 'revenue',
      artist: 'Sarah Wilson',
      amount: '$320.00',
      status: 'completed',
      date: '2024-03-15',
      method: 'Credit Card'
    },
    {
      id: 'TXN-003',
      type: 'payout',
      artist: 'Marcus Rodriguez',
      amount: '$280.00',
      status: 'pending',
      date: '2024-03-14',
      method: 'PayPal'
    },
    {
      id: 'TXN-004',
      type: 'revenue',
      artist: 'Emma Thompson',
      amount: '$195.00',
      status: 'completed',
      date: '2024-03-14',
      method: 'Credit Card'
    },
    {
      id: 'TXN-005',
      type: 'payout',
      artist: 'David Chen',
      amount: '$380.00',
      status: 'failed',
      date: '2024-03-13',
      method: 'Bank Transfer'
    }
  ]

  const monthlyBreakdown = [
    { month: 'Jan', revenue: 45000, payouts: 31500, fees: 13500 },
    { month: 'Feb', revenue: 52000, payouts: 36400, fees: 15600 },
    { month: 'Mar', revenue: 48000, payouts: 33600, fees: 14400 },
    { month: 'Apr', revenue: 61000, payouts: 42700, fees: 18300 },
    { month: 'May', revenue: 55000, payouts: 38500, fees: 16500 },
    { month: 'Jun', revenue: 67000, payouts: 46900, fees: 20100 }
  ]

  // Payout Issues Data
  const payoutIssues = [
    {
      id: 'PAY-001',
      artist: 'Marcus Rodriguez',
      artistId: 'ART-2379',
      amount: '$2,340.00',
      issue: 'Payment method verification needed',
      issueType: 'Verification Required',
      priority: 'Medium',
      status: 'Pending Action',
      createdAt: '2024-03-14 09:30',
      lastAttempt: '2024-03-14 09:30',
      attempts: 1,
      paymentMethod: 'Bank Transfer',
      bankDetails: 'Chase Bank - ****1234',
      errorCode: 'VERIFY_001',
      description: 'Bank account verification required before processing payout. Artist needs to confirm account ownership.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      contactInfo: 'marcus.rodriguez@email.com'
    },
    {
      id: 'PAY-002',
      artist: 'David Chen',
      artistId: 'ART-1040',
      amount: '$1,890.50',
      issue: 'Insufficient account balance verification',
      issueType: 'Account Issue',
      priority: 'High',
      status: 'Under Review',
      createdAt: '2024-03-13 16:45',
      lastAttempt: '2024-03-15 10:15',
      attempts: 3,
      paymentMethod: 'PayPal',
      bankDetails: 'PayPal - david.chen@email.com',
      errorCode: 'PAY_003',
      description: 'PayPal account has restrictions. Multiple payout attempts failed due to account limitations.',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      contactInfo: 'david.chen@email.com'
    },
    {
      id: 'PAY-003',
      artist: 'Emma Thompson',
      artistId: 'ART-1181',
      amount: '$945.75',
      issue: 'Invalid routing number',
      issueType: 'Banking Error',
      priority: 'Low',
      status: 'Resolved',
      createdAt: '2024-03-12 14:20',
      lastAttempt: '2024-03-15 11:30',
      attempts: 2,
      paymentMethod: 'Bank Transfer',
      bankDetails: 'Wells Fargo - ****5678',
      errorCode: 'BANK_002',
      description: 'Routing number was incorrect. Artist updated banking information and payout was successful.',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      contactInfo: 'emma.thompson@email.com'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100'
      case 'pending': return 'text-yellow-600 bg-yellow-100'
      case 'failed': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getTransactionIcon = (type: string) => {
    return type === 'payout' ? 
      <ArrowUp className="h-4 w-4 text-red-600" /> : 
      <ArrowDown className="h-4 w-4 text-green-600" />
  }

  const getIssuePriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-red-600 bg-red-100'
      case 'Medium': return 'text-yellow-600 bg-yellow-100'
      case 'Low': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getIssueStatusColor = (status: string) => {
    switch (status) {
      case 'Pending Action': return 'text-yellow-600 bg-yellow-100'
      case 'Under Review': return 'text-blue-600 bg-blue-100'
      case 'Resolved': return 'text-green-600 bg-green-100'
      case 'Failed': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const handlePayoutAction = (payoutId: string, action: string) => {
    console.log(`${action} payout issue ${payoutId}`)
    // In a real app, this would update the payout status
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
          <h1 className="text-2xl font-bold text-gray-900">Financial Reports</h1>
          <p className="text-gray-600">Revenue, payouts, and financial analytics</p>
        </div>
        <div className="flex space-x-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
          <Button>
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>
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
            onClick={() => setActiveTab('payout-issues')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'payout-issues'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4" />
              <span>Payout Issues</span>
              <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full">2</span>
            </div>
          </button>
        </nav>
      </div>

      {activeTab === 'overview' && (
        <>
          {/* Financial Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialSummary.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-gray-600">{item.title}</h3>
                      <DollarSign className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                      <div className="flex items-center space-x-1">
                        {item.trend === 'up' ? (
                          <ArrowUp className="h-3 w-3 text-green-600" />
                        ) : (
                          <ArrowDown className="h-3 w-3 text-red-600" />
                        )}
                        <span className={`text-xs font-medium ${
                          item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {item.change}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Revenue Breakdown Chart */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Monthly Financial Breakdown
                  </CardTitle>
                  <CardDescription>Revenue, payouts, and platform fees</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {monthlyBreakdown.map((data, index) => (
                      <motion.div
                        key={data.month}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-900">{data.month}</span>
                          <span className="text-sm text-gray-600">${(data.revenue / 1000).toFixed(0)}k total</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-green-600 h-2 rounded-full" 
                                style={{ width: `${(data.revenue / 70000) * 100}%` }}
                              />
                            </div>
                            <span className="text-xs text-gray-500 w-16">Revenue</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full" 
                                style={{ width: `${(data.payouts / 70000) * 100}%` }}
                              />
                            </div>
                            <span className="text-xs text-gray-500 w-16">Payouts</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-purple-600 h-2 rounded-full" 
                                style={{ width: `${(data.fees / 70000) * 100}%` }}
                              />
                            </div>
                            <span className="text-xs text-gray-500 w-16">Fees</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Transactions */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Recent Transactions
                  </CardTitle>
                  <CardDescription>Latest financial activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentTransactions.map((transaction, index) => (
                      <motion.div
                        key={transaction.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          {getTransactionIcon(transaction.type)}
                          <div>
                            <p className="font-medium text-gray-900 text-sm">{transaction.artist}</p>
                            <p className="text-xs text-gray-500">{transaction.method}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900 text-sm">{transaction.amount}</p>
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                            {transaction.status}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-4 text-center">
                    <Button variant="outline" size="sm">
                      <FileText className="h-3 w-3" />
                      View All Transactions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </>
      )}

      {activeTab === 'payout-issues' && (
        <div className="space-y-6">
          {/* Payout Issues Header */}
          <Card className="border-l-4 border-l-yellow-500 bg-yellow-50">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-900">Payout Issues Requiring Attention</h3>
                  <p className="text-yellow-700">Review and resolve payment processing issues</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payout Issues List */}
          <div className="space-y-4">
            {payoutIssues.map((issue, index) => (
              <motion.div
                key={issue.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`${issue.artist === 'Marcus Rodriguez' ? 'ring-2 ring-yellow-200 bg-yellow-50' : ''}`}>
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
                            <h3 className="text-lg font-semibold text-gray-900">{issue.artist}</h3>
                            <span className="text-sm text-gray-500">({issue.artistId})</span>
                            {issue.artist === 'Marcus Rodriguez' && (
                              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                                NEEDS ATTENTION
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 mb-2">{issue.issue}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>Amount: {issue.amount}</span>
                            <span>•</span>
                            <span>Method: {issue.paymentMethod}</span>
                            <span>•</span>
                            <span>{issue.attempts} attempt{issue.attempts > 1 ? 's' : ''}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getIssuePriorityColor(issue.priority)}`}>
                          {issue.priority}
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
                          <p className="text-sm text-gray-600 mb-2">{issue.description}</p>
                          <p className="text-xs text-gray-500">
                            <strong>Error Code:</strong> {issue.errorCode}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Payment Info</h4>
                          <div className="space-y-1 text-sm">
                            <p><strong>Bank Details:</strong> {issue.bankDetails}</p>
                            <p><strong>Contact:</strong> {issue.contactInfo}</p>
                            <p><strong>Created:</strong> {issue.createdAt}</p>
                            <p><strong>Last Attempt:</strong> {issue.lastAttempt}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>Created {issue.createdAt}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handlePayoutAction(issue.id, 'contact')}
                        >
                          <User className="h-3 w-3" />
                          Contact Artist
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handlePayoutAction(issue.id, 'retry')}
                        >
                          <RefreshCw className="h-3 w-3" />
                          Retry Payout
                        </Button>
                        <Button 
                          size="sm" 
                          onClick={() => handlePayoutAction(issue.id, 'resolve')}
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

          {/* Payout Issues Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Issues</p>
                    <p className="text-2xl font-bold text-gray-900">23</p>
                    <p className="text-xs text-gray-500">This month</p>
                  </div>
                  <AlertTriangle className="h-8 w-8 text-yellow-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Resolved</p>
                    <p className="text-2xl font-bold text-gray-900">18</p>
                    <p className="text-xs text-gray-500">78% resolution rate</p>
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
                    <p className="text-2xl font-bold text-gray-900">5</p>
                    <p className="text-xs text-gray-500">Awaiting action</p>
                  </div>
                  <Clock className="h-8 w-8 text-yellow-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Failed Amount</p>
                    <p className="text-2xl font-bold text-gray-900">$8,450</p>
                    <p className="text-xs text-gray-500">Needs resolution</p>
                  </div>
                  <XCircle className="h-8 w-8 text-red-600" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}

export default FinancialReports
