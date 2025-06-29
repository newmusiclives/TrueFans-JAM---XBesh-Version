import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card'
import { 
  ArrowLeft, 
  DollarSign, 
  TrendingUp, 
  Calendar, 
  Download, 
  CreditCard,
  Banknote,
  PiggyBank,
  Receipt,
  Filter,
  Search,
  Eye,
  ExternalLink
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const RevenueTracking: React.FC = () => {
  const navigate = useNavigate()
  const [timeRange, setTimeRange] = useState('30d')
  const [filterStatus, setFilterStatus] = useState('all')

  const revenueStats = [
    { 
      label: 'Total Earnings', 
      value: '$12,450', 
      change: '+18%', 
      icon: <DollarSign className="h-5 w-5" />,
      color: 'bg-green-100 text-green-600'
    },
    { 
      label: 'This Month', 
      value: '$2,680', 
      change: '+25%', 
      icon: <TrendingUp className="h-5 w-5" />,
      color: 'bg-blue-100 text-blue-600'
    },
    { 
      label: 'Pending Payouts', 
      value: '$840', 
      change: '3 shows', 
      icon: <PiggyBank className="h-5 w-5" />,
      color: 'bg-yellow-100 text-yellow-600'
    },
    { 
      label: 'Average per Show', 
      value: '$265', 
      change: '+12%', 
      icon: <Receipt className="h-5 w-5" />,
      color: 'bg-purple-100 text-purple-600'
    }
  ]

  const transactions = [
    {
      id: 1,
      type: 'payout',
      venue: 'The Cozy Living Room',
      host: 'Sarah Martinez',
      date: '2024-01-15',
      amount: 350,
      status: 'completed',
      payoutDate: '2024-01-17',
      attendees: 25,
      fee: 350,
      platformFee: 35,
      netAmount: 315
    },
    {
      id: 2,
      type: 'payout',
      venue: 'Garden Studio Space',
      host: 'Michael Chen',
      date: '2024-01-10',
      amount: 425,
      status: 'completed',
      payoutDate: '2024-01-12',
      attendees: 30,
      fee: 425,
      platformFee: 42.5,
      netAmount: 382.5
    },
    {
      id: 3,
      type: 'pending',
      venue: 'Downtown Loft',
      host: 'Emma Thompson',
      date: '2024-01-05',
      amount: 475,
      status: 'pending',
      payoutDate: '2024-01-07',
      attendees: 35,
      fee: 475,
      platformFee: 47.5,
      netAmount: 427.5
    },
    {
      id: 4,
      type: 'payout',
      venue: 'Acoustic Haven',
      host: 'David Kim',
      date: '2024-01-01',
      amount: 380,
      status: 'completed',
      payoutDate: '2024-01-03',
      attendees: 28,
      fee: 380,
      platformFee: 38,
      netAmount: 342
    },
    {
      id: 5,
      type: 'pending',
      venue: 'Music Room Sessions',
      host: 'Lisa Park',
      date: '2023-12-28',
      amount: 290,
      status: 'pending',
      payoutDate: '2023-12-30',
      attendees: 20,
      fee: 290,
      platformFee: 29,
      netAmount: 261
    }
  ]

  const monthlyBreakdown = [
    { month: 'August 2023', shows: 3, gross: 850, fees: 85, net: 765, growth: 0 },
    { month: 'September 2023', shows: 5, gross: 1420, fees: 142, net: 1278, growth: 67 },
    { month: 'October 2023', shows: 7, gross: 1980, fees: 198, net: 1782, growth: 39 },
    { month: 'November 2023', shows: 6, gross: 1750, fees: 175, net: 1575, growth: -12 },
    { month: 'December 2023', shows: 8, gross: 2340, fees: 234, net: 2106, growth: 34 },
    { month: 'January 2024', shows: 9, gross: 2680, fees: 268, net: 2412, growth: 15 }
  ]

  const handleExportTransactions = () => {
    toast.success('Transaction history exported to CSV')
  }

  const handleViewTransaction = (transaction: any) => {
    toast.info(`Opening details for ${transaction.venue}`)
  }

  const handleRequestPayout = () => {
    toast.success('Payout request submitted')
  }

  const handleSetupDirectDeposit = () => {
    toast.info('Opening banking setup...')
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'processing':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredTransactions = transactions.filter(transaction => {
    if (filterStatus === 'all') return true
    return transaction.status === filterStatus
  })

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
                  Revenue Tracking
                </h1>
                <p className="text-sm text-gray-600">
                  Monitor your earnings and payouts
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleExportTransactions}>
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button size="sm" onClick={handleRequestPayout}>
                <CreditCard className="h-4 w-4 mr-2" />
                Request Payout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Revenue Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {revenueStats.map((stat, index) => (
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
                      <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                    </div>
                    <div className={`p-3 rounded-lg ${stat.color}`}>
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
            {/* Transaction History */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Receipt className="h-5 w-5" />
                      Transaction History
                    </CardTitle>
                    <CardDescription>
                      Your earnings and payout history
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <select 
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    >
                      <option value="all">All Status</option>
                      <option value="completed">Completed</option>
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                    </select>
                    <select 
                      value={timeRange}
                      onChange={(e) => setTimeRange(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    >
                      <option value="30d">Last 30 days</option>
                      <option value="90d">Last 3 months</option>
                      <option value="1y">Last year</option>
                      <option value="all">All time</option>
                    </select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredTransactions.map((transaction, index) => (
                    <motion.div
                      key={transaction.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-lg ${
                          transaction.status === 'completed' ? 'bg-green-100 text-green-600' :
                          transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-blue-100 text-blue-600'
                        }`}>
                          {transaction.status === 'completed' ? <Banknote className="h-4 w-4" /> :
                           transaction.status === 'pending' ? <PiggyBank className="h-4 w-4" /> :
                           <CreditCard className="h-4 w-4" />}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{transaction.venue}</h4>
                          <p className="text-sm text-gray-600">Hosted by {transaction.host}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>Show: {transaction.date}</span>
                            <span>Payout: {transaction.payoutDate}</span>
                            <span>{transaction.attendees} attendees</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">
                          ${transaction.netAmount}
                        </div>
                        <div className="text-sm text-gray-600">
                          ${transaction.fee} - ${transaction.platformFee} fee
                        </div>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${getStatusColor(transaction.status)}`}>
                          {transaction.status}
                        </span>
                        <div className="mt-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleViewTransaction(transaction)}
                          >
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Monthly Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Monthly Revenue Breakdown
                </CardTitle>
                <CardDescription>
                  Detailed monthly earnings analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 font-medium text-gray-600">Month</th>
                        <th className="text-right py-3 font-medium text-gray-600">Shows</th>
                        <th className="text-right py-3 font-medium text-gray-600">Gross</th>
                        <th className="text-right py-3 font-medium text-gray-600">Fees</th>
                        <th className="text-right py-3 font-medium text-gray-600">Net</th>
                        <th className="text-right py-3 font-medium text-gray-600">Growth</th>
                      </tr>
                    </thead>
                    <tbody>
                      {monthlyBreakdown.map((month, index) => (
                        <tr key={month.month} className="border-b border-gray-100">
                          <td className="py-3 text-gray-900">{month.month}</td>
                          <td className="py-3 text-right text-gray-900">{month.shows}</td>
                          <td className="py-3 text-right text-gray-900">${month.gross}</td>
                          <td className="py-3 text-right text-gray-600">${month.fees}</td>
                          <td className="py-3 text-right font-medium text-gray-900">${month.net}</td>
                          <td className={`py-3 text-right font-medium ${
                            month.growth > 0 ? 'text-green-600' : 
                            month.growth < 0 ? 'text-red-600' : 'text-gray-600'
                          }`}>
                            {month.growth > 0 ? '+' : ''}{month.growth}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Payout Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payout Settings
                </CardTitle>
                <CardDescription>
                  Manage your payment preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Banknote className="h-4 w-4 text-blue-600" />
                    <span className="font-medium text-blue-900">Direct Deposit</span>
                  </div>
                  <p className="text-sm text-blue-800">
                    Bank: **** **** **** 1234
                  </p>
                  <p className="text-sm text-blue-800">
                    Next payout: 2-3 business days
                  </p>
                </div>
                
                <Button fullWidth variant="outline" onClick={handleSetupDirectDeposit}>
                  <CreditCard className="h-4 w-4 mr-2" />
                  Update Banking Info
                </Button>
                
                <Button fullWidth onClick={handleRequestPayout}>
                  <DollarSign className="h-4 w-4 mr-2" />
                  Request Payout
                </Button>
              </CardContent>
            </Card>

            {/* Payout Schedule */}
            <Card>
              <CardHeader>
                <CardTitle>Payout Schedule</CardTitle>
                <CardDescription>
                  When you'll receive your earnings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Payout Frequency</span>
                    <span className="text-sm font-medium">Weekly</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Next Payout</span>
                    <span className="text-sm font-medium">Jan 22, 2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Pending Amount</span>
                    <span className="text-sm font-medium text-green-600">$840</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Processing Time</span>
                    <span className="text-sm font-medium">2-3 business days</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tax Information */}
            <Card>
              <CardHeader>
                <CardTitle>Tax Information</CardTitle>
                <CardDescription>
                  Important tax documents and info
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button fullWidth variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download 1099
                </Button>
                <Button fullWidth variant="outline">
                  <Receipt className="h-4 w-4 mr-2" />
                  Tax Summary
                </Button>
                <Button fullWidth variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Tax Resources
                </Button>
                
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>2023 Total:</strong> $10,847
                  </p>
                  <p className="text-xs text-yellow-700 mt-1">
                    1099 will be available by Jan 31st
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RevenueTracking
