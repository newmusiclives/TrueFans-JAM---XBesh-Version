import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { Calculator, DollarSign, TrendingUp, Users, Music, Home, Award, Info } from 'lucide-react'

const RevenueCalculatorPage = () => {
  const [inputs, setInputs] = useState({
    showsPerMonth: 4,
    averageTicketPrice: 25,
    averageAttendance: 20,
    hostReferrals: 0,
    artistReferrals: 0
  })

  const [results, setResults] = useState({
    monthlyRevenue: 0,
    artistEarnings: 0,
    hostEarnings: 0,
    platformFee: 0,
    referralEarnings: 0,
    totalEarnings: 0,
    yearlyProjection: 0
  })

  const calculateRevenue = () => {
    const grossRevenue = inputs.showsPerMonth * inputs.averageTicketPrice * inputs.averageAttendance
    
    // Revenue split: 70% artist, 10% host, 20% platform
    const artistEarnings = grossRevenue * 0.70
    const hostEarnings = grossRevenue * 0.10
    const platformFee = grossRevenue * 0.20
    
    // Referral earnings: 2.5% of referred revenue
    const hostReferralEarnings = inputs.hostReferrals * grossRevenue * 0.025
    const artistReferralEarnings = inputs.artistReferrals * grossRevenue * 0.025
    const totalReferralEarnings = hostReferralEarnings + artistReferralEarnings
    
    const totalEarnings = artistEarnings + totalReferralEarnings
    const yearlyProjection = totalEarnings * 12

    setResults({
      monthlyRevenue: grossRevenue,
      artistEarnings,
      hostEarnings,
      platformFee,
      referralEarnings: totalReferralEarnings,
      totalEarnings,
      yearlyProjection
    })
  }

  useEffect(() => {
    calculateRevenue()
  }, [inputs])

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: Math.max(0, parseInt(value) || 0)
    }))
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  const scenarios = [
    {
      title: "Getting Started",
      description: "New artist building their fanbase",
      values: { showsPerMonth: 2, averageTicketPrice: 20, averageAttendance: 15, hostReferrals: 0, artistReferrals: 0 }
    },
    {
      title: "Growing Artist",
      description: "Established local following",
      values: { showsPerMonth: 4, averageTicketPrice: 25, averageAttendance: 25, hostReferrals: 1, artistReferrals: 0 }
    },
    {
      title: "Thriving Performer",
      description: "Popular artist with strong network",
      values: { showsPerMonth: 6, averageTicketPrice: 30, averageAttendance: 30, hostReferrals: 2, artistReferrals: 1 }
    },
    {
      title: "Top Tier Artist",
      description: "Established artist with referral network",
      values: { showsPerMonth: 8, averageTicketPrice: 35, averageAttendance: 35, hostReferrals: 3, artistReferrals: 2 }
    }
  ]

  const revenueBreakdown = [
    {
      label: "Artist Earnings",
      amount: results.artistEarnings,
      percentage: 70,
      color: "from-purple-600 to-purple-700",
      icon: Music,
      description: "Your direct performance earnings"
    },
    {
      label: "Host Earnings",
      amount: results.hostEarnings,
      percentage: 10,
      color: "from-blue-600 to-blue-700",
      icon: Home,
      description: "Venue host compensation"
    },
    {
      label: "Platform Fee",
      amount: results.platformFee,
      percentage: 20,
      color: "from-gray-600 to-gray-700",
      icon: Award,
      description: "Platform operations & support"
    }
  ]

  const applyScenario = (scenario) => {
    setInputs(scenario.values)
  }

  return (
    <Layout 
      title="Revenue Calculator" 
      description="Calculate your potential earnings as an artist on TrueFans JAM"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calculator className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Revenue Calculator</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your earning potential on TrueFans JAM. Calculate projected income based on your performance schedule and audience size.
          </p>
        </div>

        {/* Quick Scenarios */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Scenarios</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {scenarios.map((scenario, index) => (
              <button
                key={index}
                onClick={() => applyScenario(scenario)}
                className="bg-white rounded-lg p-4 shadow-lg border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all text-left"
              >
                <h3 className="font-bold text-gray-900 mb-2">{scenario.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{scenario.description}</p>
                <div className="text-xs text-purple-600">
                  {scenario.values.showsPerMonth} shows/month • ${scenario.values.averageTicketPrice} tickets • {scenario.values.averageAttendance} attendance
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Inputs */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Performance Details</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Shows Per Month
                </label>
                <input
                  type="number"
                  min="0"
                  value={inputs.showsPerMonth}
                  onChange={(e) => handleInputChange('showsPerMonth', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">How many shows do you plan to perform monthly?</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Average Ticket Price ($)
                </label>
                <input
                  type="number"
                  min="0"
                  value={inputs.averageTicketPrice}
                  onChange={(e) => handleInputChange('averageTicketPrice', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Typical ticket price for your performances</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Average Attendance
                </label>
                <input
                  type="number"
                  min="0"
                  value={inputs.averageAttendance}
                  onChange={(e) => handleInputChange('averageAttendance', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Expected number of attendees per show</p>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Referral Network (Optional)</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Host Referrals
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={inputs.hostReferrals}
                      onChange={(e) => handleInputChange('hostReferrals', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">Hosts you've referred (earn 2.5% of their revenue)</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Artist Referrals
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={inputs.artistReferrals}
                      onChange={(e) => handleInputChange('artistReferrals', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">Artists you've referred (earn 2.5% of their revenue)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Monthly Earnings Summary */}
            <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Your Monthly Earnings</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">Performance Earnings:</span>
                  <span className="text-2xl font-bold">{formatCurrency(results.artistEarnings)}</span>
                </div>
                
                {results.referralEarnings > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200">Referral Earnings:</span>
                    <span className="text-2xl font-bold">{formatCurrency(results.referralEarnings)}</span>
                  </div>
                )}
                
                <div className="border-t border-purple-700 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl">Total Monthly:</span>
                    <span className="text-3xl font-bold">{formatCurrency(results.totalEarnings)}</span>
                  </div>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-4 mt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-purple-200">Yearly Projection:</span>
                    <span className="text-2xl font-bold">{formatCurrency(results.yearlyProjection)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue Breakdown */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Revenue Breakdown</h3>
              
              <div className="space-y-4">
                {revenueBreakdown.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mr-3`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{item.label}</div>
                        <div className="text-sm text-gray-600">{item.description}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{formatCurrency(item.amount)}</div>
                      <div className="text-sm text-gray-600">{item.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start">
                  <Info className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-800">
                    <strong>Monthly Gross Revenue:</strong> {formatCurrency(results.monthlyRevenue)}
                    <br />
                    Based on {inputs.showsPerMonth} shows × {inputs.averageAttendance} attendees × ${inputs.averageTicketPrice} tickets
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Growth Potential</h3>
            <p className="text-gray-600 text-sm">
              Most artists see 20-40% growth in earnings within their first 6 months as they build their fanbase and referral network.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Referral Benefits</h3>
            <p className="text-gray-600 text-sm">
              Build passive income by referring hosts and artists. Earn 2.5% of their revenue for life with no limits on referrals.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mb-4">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Fair Revenue Split</h3>
            <p className="text-gray-600 text-sm">
              Artists keep 70% of ticket sales - the highest percentage in the industry. No hidden fees or surprise deductions.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Earning?</h2>
            <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
              Join TrueFans JAM today and start building sustainable income from your music. No upfront costs, no monthly fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                Start Your Artist Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors">
                Learn More About Hosting
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default RevenueCalculatorPage
