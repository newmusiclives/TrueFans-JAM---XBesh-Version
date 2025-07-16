import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { 
  MapPin, 
  Calendar, 
  Route, 
  Users, 
  Mail, 
  Car, 
  Clock, 
  Music, 
  CheckCircle, 
  ArrowRight,
  Settings,
  Target,
  Zap,
  Brain,
  Globe,
  Send,
  FileCheck,
  Phone,
  Home,
  Star,
  TrendingUp,
  Shield,
  Coffee,
  Play,
  Pause,
  Heart,
  Headphones,
  Mic,
  Navigation,
  Hotel,
  DollarSign,
  Fuel,
  Utensils,
  Bed,
  AlertTriangle,
  TrendingDown,
  Calculator,
  Smartphone,
  ExternalLink,
  Copy,
  MessageCircle,
  Volume2,
  Wifi,
  Battery,
  Signal,
  ChevronRight,
  MapIcon,
  Compass,
  CreditCard,
  PieChart,
  BarChart3,
  TrendingUpIcon,
  Percent,
  Receipt,
  Banknote
} from 'lucide-react'

const TourPlannerPage = () => {
  // All hooks must be at the top level - no conditional hooks
  const [currentStep, setCurrentStep] = useState(1)
  const [isDemo, setIsDemo] = useState(false)
  const [demoProcessing, setDemoProcessing] = useState(false)
  const [processingStep, setProcessingStep] = useState(0)
  const [tourData, setTourData] = useState({
    // Tour Basics
    startLocation: '',
    startDate: '',
    endDate: '',
    tourDuration: '2-weeks',
    
    // Show Timing
    showStartTime: '19:30', // 7:30 PM default
    arrivalTime: '16:00', // 4:00 PM default
    setupTime: 60, // minutes needed for setup
    
    // Travel Criteria
    maxDriveDistance: 300,
    showsBeforeBreak: 3,
    allowDrivingDays: true,
    
    // Fan Base
    fanEmails: '',
    expectedFanResponses: 50,
    
    // Host Preferences
    includeVettedHosts: true,
    venueTypes: ['living-rooms', 'backyards', 'studios'],
    
    // Donation Model
    expectedAttendance: 25,
    donationRate: 80, // percentage who donate
    averageDonation: 20,
    hostFee: 200,
    merchandiseGoal: 150,
    
    // Performance
    setLength: 90,
    encorePreference: true,
    soundRequirements: 'basic-pa',
    
    // Additional
    specialRequests: ''
  })

  // Demo processing simulation - useEffect must be at top level
  useEffect(() => {
    if (demoProcessing && currentStep === 8) {
      const interval = setInterval(() => {
        setProcessingStep(prev => {
          if (prev < processingSteps.length - 1) {
            return prev + 1
          } else {
            clearInterval(interval)
            setTimeout(() => {
              setDemoProcessing(false)
              setCurrentStep(9)
            }, 1500)
            return prev
          }
        })
      }, 2000)

      return () => clearInterval(interval)
    }
  }, [demoProcessing, currentStep])

  // Constants and data - these can be after hooks
  const demoData = {
    startLocation: 'Nashville, TN',
    startDate: '2024-03-15',
    endDate: '2024-04-05',
    tourDuration: '3-weeks',
    showStartTime: '19:30',
    arrivalTime: '16:00',
    setupTime: 75,
    maxDriveDistance: 350,
    showsBeforeBreak: 3,
    allowDrivingDays: true,
    fanEmails: `sarah.music.fan@email.com
mike.songwriter@email.com
emma.acoustic@email.com
david.livemusic@email.com
lisa.houseconcerts@email.com
tom.musiclover@email.com
jenny.songwriter@email.com
alex.acoustic@email.com
maria.concerts@email.com
chris.livemusic@email.com
katie.musicfan@email.com
ryan.houseshows@email.com
amanda.acoustic@email.com
josh.musiclover@email.com
nicole.concerts@email.com`,
    expectedFanResponses: 65,
    includeVettedHosts: true,
    venueTypes: ['living-rooms', 'backyards', 'studios', 'cafes'],
    expectedAttendance: 30,
    donationRate: 80,
    averageDonation: 20,
    hostFee: 250,
    merchandiseGoal: 200,
    setLength: 90,
    encorePreference: true,
    soundRequirements: 'full-pa',
    specialRequests: 'Prefer venues with piano available. Need accessible parking for equipment.'
  }

  const processingSteps = [
    'Fan email responses collected',
    'Geographic mapping completed', 
    'Show timing preferences integrated',
    'Route optimization in progress',
    'Venue matching completed',
    'Schedule optimization completed'
  ]

  const steps = [
    { id: 1, title: 'Tour Details', icon: Calendar },
    { id: 2, title: 'Show Timing', icon: Clock },
    { id: 3, title: 'Travel Criteria', icon: Car },
    { id: 4, title: 'Fan Outreach', icon: Mail },
    { id: 5, title: 'Host Network', icon: Home },
    { id: 6, title: 'Donation Model', icon: Heart },
    { id: 7, title: 'Performance Setup', icon: Headphones },
    { id: 8, title: 'AI Processing', icon: Brain },
    { id: 9, title: 'Tour Draft', icon: FileCheck },
    { id: 10, title: 'Mobile Experience', icon: Smartphone }
  ]

  const tourFeatures = [
    {
      icon: Brain,
      title: 'AI-Powered Route Optimization',
      description: 'Advanced algorithms analyze fan locations, travel distances, and venue availability to create the perfect tour route'
    },
    {
      icon: Mail,
      title: 'Fan Base Integration',
      description: 'Automatically email your existing fans to gauge interest and collect potential venue locations'
    },
    {
      icon: Route,
      title: 'Smart Scheduling',
      description: 'Balance show frequency with travel time, ensuring sustainable touring that maximizes both reach and revenue'
    },
    {
      icon: Shield,
      title: 'Vetted Host Network',
      description: 'Fill gaps in your tour with our network of verified hosts who provide quality venues and engaged audiences'
    }
  ]

  // Functions
  const startDemo = () => {
    setIsDemo(true)
    setTourData(demoData)
    setCurrentStep(1)
  }

  const stopDemo = () => {
    setIsDemo(false)
    setDemoProcessing(false)
    setProcessingStep(0)
    setTourData({
      startLocation: '',
      startDate: '',
      endDate: '',
      tourDuration: '2-weeks',
      showStartTime: '19:30',
      arrivalTime: '16:00',
      setupTime: 60,
      maxDriveDistance: 300,
      showsBeforeBreak: 3,
      allowDrivingDays: true,
      fanEmails: '',
      expectedFanResponses: 50,
      includeVettedHosts: true,
      venueTypes: ['living-rooms', 'backyards', 'studios'],
      expectedAttendance: 25,
      donationRate: 80,
      averageDonation: 20,
      hostFee: 200,
      merchandiseGoal: 150,
      setLength: 90,
      encorePreference: true,
      soundRequirements: 'basic-pa',
      specialRequests: ''
    })
    setCurrentStep(1)
  }

  const handleInputChange = (field, value) => {
    if (isDemo) return // Prevent changes during demo
    
    setTourData(prev => {
      const newData = { ...prev, [field]: value }
      
      // Auto-adjust arrival time based on show start time
      if (field === 'showStartTime') {
        const showHour = parseInt(value.split(':')[0])
        let arrivalHour = showHour - 3.5 // 3.5 hours before show (default)
        
        // Adjust for common show times
        if (showHour >= 19 && showHour <= 20) { // 7-8 PM shows
          arrivalHour = 16 // 4 PM arrival
        } else if (showHour >= 21) { // 9 PM+ shows
          arrivalHour = 17 // 5 PM arrival
        } else if (showHour <= 18) { // Earlier shows
          arrivalHour = Math.max(14, showHour - 4) // At least 2 PM, or 4 hours before
        }
        
        newData.arrivalTime = `${arrivalHour.toString().padStart(2, '0')}:00`
      }
      
      return newData
    })
  }

  const nextStep = () => {
    if (currentStep < 10) {
      if (currentStep === 7 && isDemo) {
        setDemoProcessing(true)
        setProcessingStep(0)
      }
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const formatTime = (time24) => {
    const [hours, minutes] = time24.split(':')
    const hour = parseInt(hours)
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
    return `${displayHour}:${minutes} ${ampm}`
  }

  const calculateDonationRevenue = () => {
    return Math.round((tourData.expectedAttendance * tourData.donationRate / 100) * tourData.averageDonation)
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 min-h-[600px]">
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Plan Your Custom Tour</h3>
              <p className="text-blue-800">Tell us your tour preferences and we'll use AI to create the perfect route through your fan base.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tour Start Location *</label>
                <div className="relative">
                  <input
                    type="text"
                    value={tourData.startLocation}
                    onChange={(e) => handleInputChange('startLocation', e.target.value)}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="City, State (e.g., Nashville, TN)"
                    required
                    disabled={isDemo}
                  />
                  <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-4" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tour Duration *</label>
                <select
                  value={tourData.tourDuration}
                  onChange={(e) => handleInputChange('tourDuration', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                  disabled={isDemo}
                >
                  <option value="2-weeks">2 Weeks</option>
                  <option value="3-weeks">3 Weeks</option>
                  <option value="4-weeks">4 Weeks</option>
                  <option value="custom">Custom Duration</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date *</label>
                <input
                  type="date"
                  value={tourData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                  disabled={isDemo}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Date *</label>
                <input
                  type="date"
                  value={tourData.endDate}
                  onChange={(e) => handleInputChange('endDate', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                  disabled={isDemo}
                />
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <h4 className="font-bold text-yellow-900 mb-2">How It Works</h4>
              <ul className="text-yellow-800 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-yellow-600 mr-2" />
                  We'll email your fan base to find potential venues
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-yellow-600 mr-2" />
                  Our AI optimizes routes based on your travel preferences
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-yellow-600 mr-2" />
                  We fill gaps with our vetted host network
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-yellow-600 mr-2" />
                  You approve the final tour before we confirm with hosts
                </li>
              </ul>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6 min-h-[600px]">
            <div className="bg-purple-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-purple-900 mb-2">Show Timing Preferences</h3>
              <p className="text-purple-800">Set your preferred show times and arrival schedule to optimize your tour experience.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Show Start Time</label>
                <div className="relative">
                  <input
                    type="time"
                    value={tourData.showStartTime}
                    onChange={(e) => handleInputChange('showStartTime', e.target.value)}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    disabled={isDemo}
                  />
                  <Clock className="w-5 h-5 text-gray-400 absolute left-3 top-4" />
                </div>
                <p className="text-sm text-gray-500 mt-1">Most house concerts start between 7:00-8:30 PM</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Arrival Time (Auto-calculated)</label>
                <div className="relative">
                  <input
                    type="time"
                    value={tourData.arrivalTime}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg bg-gray-50"
                    disabled
                  />
                  <Car className="w-5 h-5 text-gray-400 absolute left-3 top-4" />
                </div>
                <p className="text-sm text-gray-500 mt-1">Allows time for setup and sound check</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Setup Time Required (minutes)</label>
              <input
                type="range"
                min="30"
                max="120"
                step="15"
                value={tourData.setupTime}
                onChange={(e) => handleInputChange('setupTime', parseInt(e.target.value))}
                className="w-full"
                disabled={isDemo}
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>30 min</span>
                <span className="font-medium">{tourData.setupTime} minutes</span>
                <span>2 hours</span>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-bold text-blue-900 mb-3">Your Schedule Preview</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-blue-800">Arrival Time:</span>
                  <span className="font-semibold text-blue-900">{formatTime(tourData.arrivalTime)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-800">Setup Duration:</span>
                  <span className="font-semibold text-blue-900">{tourData.setupTime} minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-800">Show Start:</span>
                  <span className="font-semibold text-blue-900">{formatTime(tourData.showStartTime)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-800">Estimated End:</span>
                  <span className="font-semibold text-blue-900">
                    {formatTime(`${parseInt(tourData.showStartTime.split(':')[0]) + 2}:00`)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6 min-h-[600px]">
            <div className="bg-green-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-green-900 mb-2">Travel Preferences</h3>
              <p className="text-green-800">Set your travel limits and preferences to create a sustainable tour schedule.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Maximum Drive Distance (miles)</label>
                <input
                  type="range"
                  min="100"
                  max="500"
                  step="25"
                  value={tourData.maxDriveDistance}
                  onChange={(e) => handleInputChange('maxDriveDistance', parseInt(e.target.value))}
                  className="w-full"
                  disabled={isDemo}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>100 mi</span>
                  <span className="font-medium">{tourData.maxDriveDistance} miles</span>
                  <span>500 mi</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Shows Before Rest Day</label>
                <select
                  value={tourData.showsBeforeBreak}
                  onChange={(e) => handleInputChange('showsBeforeBreak', parseInt(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  disabled={isDemo}
                >
                  <option value={2}>2 shows</option>
                  <option value={3}>3 shows</option>
                  <option value={4}>4 shows</option>
                  <option value={5}>5 shows</option>
                </select>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-4">Travel Options</h4>
              <div className="space-y-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={tourData.allowDrivingDays}
                    onChange={(e) => handleInputChange('allowDrivingDays', e.target.checked)}
                    className="mr-3 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    disabled={isDemo}
                  />
                  <span className="text-gray-700">Allow driving-only days (no shows)</span>
                </label>
                <p className="text-sm text-gray-500 ml-7">
                  Enables longer routes by allowing travel days between distant venues
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <h4 className="font-bold text-yellow-900 mb-3">Route Impact</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-yellow-800">{Math.round(tourData.maxDriveDistance / 60)} hours</div>
                  <div className="text-sm text-yellow-700">Max drive time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-800">{tourData.showsBeforeBreak}</div>
                  <div className="text-sm text-yellow-700">Shows per cycle</div>
                </div>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6 min-h-[600px]">
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Fan Base Outreach</h3>
              <p className="text-blue-800">We'll email your fans to find potential hosts and gauge interest in each city.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fan Email List</label>
              <textarea
                value={tourData.fanEmails}
                onChange={(e) => handleInputChange('fanEmails', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent h-48"
                placeholder="Paste your fan email list here (one email per line)&#10;&#10;example@email.com&#10;fan2@email.com&#10;supporter@email.com"
                disabled={isDemo}
              />
              <p className="text-sm text-gray-500 mt-1">
                {tourData.fanEmails.split('\n').filter(email => email.trim()).length} emails detected
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Expected Response Rate</label>
              <input
                type="range"
                min="20"
                max="80"
                step="5"
                value={tourData.expectedFanResponses}
                onChange={(e) => handleInputChange('expectedFanResponses', parseInt(e.target.value))}
                className="w-full"
                disabled={isDemo}
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>20%</span>
                <span className="font-medium">{tourData.expectedFanResponses}% response rate</span>
                <span>80%</span>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-bold text-green-900 mb-3">Email Campaign Preview</h4>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="text-sm text-gray-600 mb-2">Subject: Help bring [Your Name] to your city!</div>
                <div className="text-sm text-gray-800">
                  Hi [Fan Name],<br/><br/>
                  I'm planning a tour and would love to perform in your area! I'm looking for intimate venues like living rooms, 
                  backyards, or small spaces where we can create a special musical experience together.<br/><br/>
                  Would you be interested in hosting a house concert or know someone who might? 
                  I'll handle all the details - you just provide the space and invite some friends!<br/><br/>
                  Let me know if you're interested!<br/>
                  [Your Name]
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">
                  {tourData.fanEmails.split('\n').filter(email => email.trim()).length}
                </div>
                <div className="text-sm text-gray-600">Emails to send</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">
                  {Math.round(tourData.fanEmails.split('\n').filter(email => email.trim()).length * tourData.expectedFanResponses / 100)}
                </div>
                <div className="text-sm text-gray-600">Expected responses</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <Home className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">
                  {Math.round(tourData.fanEmails.split('\n').filter(email => email.trim()).length * tourData.expectedFanResponses / 100 * 0.3)}
                </div>
                <div className="text-sm text-gray-600">Potential hosts</div>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6 min-h-[600px]">
            <div className="bg-purple-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-purple-900 mb-2">Host Network Preferences</h3>
              <p className="text-purple-800">Configure how we'll fill gaps in your tour with our vetted host network.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-4">Vetted Host Integration</h4>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={tourData.includeVettedHosts}
                  onChange={(e) => handleInputChange('includeVettedHosts', e.target.checked)}
                  className="mr-3 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  disabled={isDemo}
                />
                <span className="text-gray-700">Include TrueFans vetted hosts to fill tour gaps</span>
              </label>
              <p className="text-sm text-gray-500 mt-2 ml-7">
                Our network of verified hosts can provide venues where your fans don't have suitable spaces
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Preferred Venue Types</label>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { id: 'living-rooms', label: 'Living Rooms', icon: Home },
                  { id: 'backyards', label: 'Backyards', icon: Coffee },
                  { id: 'studios', label: 'Home Studios', icon: Headphones },
                  { id: 'cafes', label: 'Small Cafes', icon: Coffee },
                  { id: 'galleries', label: 'Art Galleries', icon: Star },
                  { id: 'libraries', label: 'Libraries', icon: FileCheck }
                ].map((venue) => {
                  const Icon = venue.icon
                  return (
                    <label key={venue.id} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={tourData.venueTypes.includes(venue.id)}
                        onChange={(e) => {
                          const newTypes = e.target.checked
                            ? [...tourData.venueTypes, venue.id]
                            : tourData.venueTypes.filter(type => type !== venue.id)
                          handleInputChange('venueTypes', newTypes)
                        }}
                        className="mr-3 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        disabled={isDemo}
                      />
                      <Icon className="w-5 h-5 text-gray-400 mr-2" />
                      <span className="text-gray-700">{venue.label}</span>
                    </label>
                  )
                })}
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <h4 className="font-bold text-yellow-900 mb-3">Host Network Benefits</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-yellow-800 mb-2">Your Fan Hosts</h5>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Already know and love your music</li>
                    <li>• Highly engaged audiences</li>
                    <li>• Personal connection to you</li>
                    <li>• Often invite other fans</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-yellow-800 mb-2">Vetted Hosts</h5>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Professional hosting experience</li>
                    <li>• Quality sound systems</li>
                    <li>• Established local audiences</li>
                    <li>• Reliable venue standards</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <Heart className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">85%</div>
                <div className="text-sm text-gray-600">Fan host shows</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">15%</div>
                <div className="text-sm text-gray-600">Vetted host shows</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Venue coverage</div>
              </div>
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6 min-h-[600px]">
            <div className="bg-green-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-green-900 mb-2">Revenue Model</h3>
              <p className="text-green-800">Configure your donation-based revenue model and earnings expectations.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expected Attendance per Show</label>
                <input
                  type="range"
                  min="15"
                  max="50"
                  step="5"
                  value={tourData.expectedAttendance}
                  onChange={(e) => handleInputChange('expectedAttendance', parseInt(e.target.value))}
                  className="w-full"
                  disabled={isDemo}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>15 people</span>
                  <span className="font-medium">{tourData.expectedAttendance} people</span>
                  <span>50 people</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Donation Participation Rate</label>
                <input
                  type="range"
                  min="60"
                  max="95"
                  step="5"
                  value={tourData.donationRate}
                  onChange={(e) => handleInputChange('donationRate', parseInt(e.target.value))}
                  className="w-full"
                  disabled={isDemo}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>60%</span>
                  <span className="font-medium">{tourData.donationRate}%</span>
                  <span>95%</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Average Donation Amount</label>
                <div className="relative">
                  <input
                    type="number"
                    value={tourData.averageDonation}
                    onChange={(e) => handleInputChange('averageDonation', parseInt(e.target.value))}
                    className="w-full px-4 py-3 pl-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    min="10"
                    max="50"
                    disabled={isDemo}
                  />
                  <DollarSign className="w-5 h-5 text-gray-400 absolute left-2 top-4" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Host Fee per Show</label>
                <div className="relative">
                  <input
                    type="number"
                    value={tourData.hostFee}
                    onChange={(e) => handleInputChange('hostFee', parseInt(e.target.value))}
                    className="w-full px-4 py-3 pl-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    min="100"
                    max="500"
                    disabled={isDemo}
                  />
                  <DollarSign className="w-5 h-5 text-gray-400 absolute left-2 top-4" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Merchandise Goal per Show</label>
              <div className="relative">
                <input
                  type="number"
                  value={tourData.merchandiseGoal}
                  onChange={(e) => handleInputChange('merchandiseGoal', parseInt(e.target.value))}
                  className="w-full px-4 py-3 pl-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  min="50"
                  max="300"
                  disabled={isDemo}
                />
                <DollarSign className="w-5 h-5 text-gray-400 absolute left-2 top-4" />
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-bold text-blue-900 mb-4">Revenue Breakdown per Show</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <Heart className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">${calculateDonationRevenue()}</div>
                  <div className="text-sm text-gray-600">Donations</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {Math.round(tourData.expectedAttendance * tourData.donationRate / 100)} people × ${tourData.averageDonation}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Home className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">${tourData.hostFee}</div>
                  <div className="text-sm text-gray-600">Host Fee</div>
                  <div className="text-xs text-gray-500 mt-1">Guaranteed payment</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">${tourData.merchandiseGoal}</div>
                  <div className="text-sm text-gray-600">Merchandise</div>
                  <div className="text-xs text-gray-500 mt-1">CDs, shirts, etc.</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-blue-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">
                    ${calculateDonationRevenue() + tourData.hostFee + tourData.merchandiseGoal}
                  </div>
                  <div className="text-blue-700">Total Revenue per Show</div>
                </div>
              </div>
            </div>
          </div>
        )

      case 7:
        return (
          <div className="space-y-6 min-h-[600px]">
            <div className="bg-orange-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-orange-900 mb-2">Performance Setup</h3>
              <p className="text-orange-800">Configure your technical requirements and performance preferences.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Set Length (minutes)</label>
                <input
                  type="range"
                  min="45"
                  max="120"
                  step="15"
                  value={tourData.setLength}
                  onChange={(e) => handleInputChange('setLength', parseInt(e.target.value))}
                  className="w-full"
                  disabled={isDemo}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>45 min</span>
                  <span className="font-medium">{tourData.setLength} minutes</span>
                  <span>2 hours</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sound Requirements</label>
                <select
                  value={tourData.soundRequirements}
                  onChange={(e) => handleInputChange('soundRequirements', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  disabled={isDemo}
                >
                  <option value="acoustic-only">Acoustic Only</option>
                  <option value="basic-pa">Basic PA System</option>
                  <option value="full-pa">Full PA with Monitors</option>
                  <option value="professional">Professional Sound Setup</option>
                </select>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-4">Performance Preferences</h4>
              <div className="space-y-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={tourData.encorePreference}
                    onChange={(e) => handleInputChange('encorePreference', e.target.checked)}
                    className="mr-3 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    disabled={isDemo}
                  />
                  <span className="text-gray-700">Plan for encore performances</span>
                </label>
                <p className="text-sm text-gray-500 ml-7">
                  Adds 15-20 minutes to your set for audience requests and additional songs
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests or Requirements</label>
              <textarea
                value={tourData.specialRequests}
                onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent h-32"
                placeholder="Any special equipment needs, accessibility requirements, or other requests..."
                disabled={isDemo}
              />
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="font-bold text-purple-900 mb-4">Performance Summary</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-purple-800">Set Duration:</span>
                    <span className="font-semibold text-purple-900">{tourData.setLength} minutes</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-purple-800">With Encore:</span>
                    <span className="font-semibold text-purple-900">
                      {tourData.encorePreference ? `${tourData.setLength + 20} minutes` : 'No encore'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-800">Sound Setup:</span>
                    <span className="font-semibold text-purple-900 capitalize">
                      {tourData.soundRequirements.replace('-', ' ')}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <Headphones className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-purple-800">Audio requirements communicated to hosts</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Clock className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-purple-800">Timing shared with venues</span>
                  </div>
                  <div className="flex items-center">
                    <Music className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-purple-800">Performance style optimized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 8:
        return (
          <div className="space-y-6 min-h-[600px]">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 text-center">
              <Brain className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Tour Processing</h3>
              <p className="text-gray-600 mb-6">
                Our advanced algorithms are analyzing your preferences, fan responses, and venue options to create the perfect tour route.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-4">Processing Steps</h4>
                  <div className="space-y-3 text-left">
                    {processingSteps.map((step, index) => (
                      <div key={index} className="flex items-center">
                        {index < processingStep ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        ) : index === processingStep ? (
                          <div className="w-5 h-5 mr-3 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <div className="w-5 h-5 mr-3 border-2 border-gray-300 rounded-full"></div>
                        )}
                        <span className={index <= processingStep ? 'text-gray-900' : 'text-gray-500'}>
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-4">AI Analysis</h4>
                  <div className="space-y-4 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Fan Responses</span>
                      <span className="font-semibold text-blue-600">65 locations</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Vetted Hosts</span>
                      <span className="font-semibold text-purple-600">12 available</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Route Options</span>
                      <span className="font-semibold text-green-600">847 analyzed</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Optimal Shows</span>
                      <span className="font-semibold text-orange-600">16 selected</span>
                    </div>
                  </div>
                </div>
              </div>

              {demoProcessing && (
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mr-3"></div>
                    <span className="text-lg font-semibold text-gray-900">Processing...</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((processingStep + 1) / processingSteps.length) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {processingSteps[processingStep]}
                  </p>
                </div>
              )}
            </div>
          </div>
        )

      case 9:
        return (
          <div className="space-y-6 min-h-[600px]">
            <div className="bg-green-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-green-900 mb-2">Your AI-Generated Tour Draft</h3>
              <p className="text-green-800">Review your optimized tour route and make any final adjustments before we contact hosts.</p>
            </div>

            {/* Tour Overview */}
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">21</div>
                <div className="text-sm text-gray-600">Days</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <Music className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">16</div>
                <div className="text-sm text-gray-600">Shows</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">12</div>
                <div className="text-sm text-gray-600">Cities</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <Route className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">2,847</div>
                <div className="text-sm text-gray-600">Miles</div>
              </div>
            </div>

            {/* Tour Route */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <Route className="w-5 h-5 text-purple-600 mr-2" />
                Tour Route
              </h4>
              <div className="space-y-3">
                {[
                  { date: 'Mar 15', city: 'Nashville, TN', venue: 'Sarah M. (Fan Host)', type: 'fan', distance: '0 mi' },
                  { date: 'Mar 17', city: 'Memphis, TN', venue: 'Mike R. (Fan Host)', type: 'fan', distance: '210 mi' },
                  { date: 'Mar 19', city: 'Little Rock, AR', venue: 'TrueFans Vetted Host', type: 'vetted', distance: '140 mi' },
                  { date: 'Mar 21', city: 'Tulsa, OK', venue: 'Emma K. (Fan Host)', type: 'fan', distance: '180 mi' },
                  { date: 'Mar 23', city: 'Oklahoma City, OK', venue: 'David L. (Fan Host)', type: 'fan', distance: '105 mi' },
                  { date: 'Mar 25', city: 'Dallas, TX', venue: 'Lisa H. (Fan Host)', type: 'fan', distance: '190 mi' },
                  { date: 'Mar 27', city: 'Austin, TX', venue: 'TrueFans Vetted Host', type: 'vetted', distance: '195 mi' },
                  { date: 'Mar 29', city: 'Houston, TX', venue: 'Tom W. (Fan Host)', type: 'fan', distance: '165 mi' }
                ].map((show, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-sm font-bold text-purple-600">{index + 1}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{show.city}</div>
                        <div className="text-sm text-gray-600">{show.date} • {show.venue}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        show.type === 'fan' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {show.type === 'fan' ? 'Fan Host' : 'Vetted Host'}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{show.distance}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue Projection */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                Revenue Projection
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-3">Revenue Breakdown</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Donations (16 shows)</span>
                      <span className="font-semibold">${(calculateDonationRevenue() * 16).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Host Fees (16 shows)</span>
                      <span className="font-semibold">${(tourData.hostFee * 16).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Merchandise (16 shows)</span>
                      <span className="font-semibold">${(tourData.merchandiseGoal * 16).toLocaleString()}</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-bold text-lg">
                      <span>Total Revenue</span>
                      <span className="text-green-600">
                        ${((calculateDonationRevenue() + tourData.hostFee + tourData.merchandiseGoal) * 16).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-3">Estimated Costs</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Gas (2,847 miles)</span>
                      <span className="font-semibold">$427</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Hotels (12 nights)</span>
                      <span className="font-semibold">$1,020</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Food (21 days)</span>
                      <span className="font-semibold">$945</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Miscellaneous</span>
                      <span className="font-semibold">$300</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-bold text-lg">
                      <span>Total Costs</span>
                      <span className="text-red-600">$2,692</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  ${((calculateDonationRevenue() + tourData.hostFee + tourData.merchandiseGoal) * 16 - 2692).toLocaleString()}
                </div>
                <div className="text-gray-700">Projected Net Profit</div>
                <div className="text-sm text-gray-500 mt-1">
                  {Math.round((((calculateDonationRevenue() + tourData.hostFee + tourData.merchandiseGoal) * 16 - 2692) / ((calculateDonationRevenue() + tourData.hostFee + tourData.merchandiseGoal) * 16)) * 100)}% profit margin
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-4 rounded-lg font-bold hover:from-green-700 hover:to-emerald-700 transition-colors flex items-center justify-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Approve & Contact Hosts
              </button>
              <button className="flex-1 bg-gray-200 text-gray-700 px-6 py-4 rounded-lg font-bold hover:bg-gray-300 transition-colors flex items-center justify-center">
                <Settings className="w-5 h-5 mr-2" />
                Request Changes
              </button>
            </div>
          </div>
        )

      case 10:
        return (
          <div className="space-y-6 min-h-[600px]">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Mobile Tour Experience</h3>
              <p className="text-blue-800">Your complete mobile companion for tour day success, navigation, and profitability tracking.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* iPhone Mockup */}
              <div className="flex justify-center">
                <div className="relative">
                  {/* iPhone Frame */}
                  <div className="w-80 h-[640px] bg-black rounded-[3rem] p-2 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                      {/* Status Bar */}
                      <div className="bg-gray-900 text-white px-6 py-2 flex justify-between items-center text-sm">
                        <div className="flex items-center space-x-1">
                          <Signal className="w-4 h-4" />
                          <Wifi className="w-4 h-4" />
                        </div>
                        <div className="font-semibold">9:41 AM</div>
                        <div className="flex items-center space-x-1">
                          <span className="text-xs">85%</span>
                          <Battery className="w-4 h-4" />
                        </div>
                      </div>

                      {/* App Content */}
                      <div className="p-4 h-full bg-gradient-to-br from-purple-600 to-blue-600">
                        <div className="text-center mb-4">
                          <h4 className="text-white font-bold text-lg">Today's Show</h4>
                          <p className="text-purple-100 text-sm">Austin, TX • 7:30 PM</p>
                        </div>

                        {/* Navigation Card */}
                        <div className="bg-white rounded-xl p-4 mb-4 shadow-lg">
                          <div className="flex items-center justify-between mb-3">
                            <h5 className="font-bold text-gray-900">Navigation</h5>
                            <Navigation className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            <strong>Current:</strong> Dallas, TX<br/>
                            <strong>Destination:</strong> 1247 Music Lane, Austin
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold text-blue-600">2h 45m</span>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                              Start GPS
                            </button>
                          </div>
                        </div>

                        {/* Hotel Finder */}
                        <div className="bg-white rounded-xl p-4 mb-4 shadow-lg">
                          <div className="flex items-center justify-between mb-3">
                            <h5 className="font-bold text-gray-900">Tonight's Hotel</h5>
                            <Hotel className="w-5 h-5 text-green-600" />
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            <strong>Budget Options Near Venue:</strong>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-semibold text-sm">Comfort Inn Austin</div>
                                <div className="text-xs text-gray-500">0.8 miles • 4.2★</div>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-green-600">$79</div>
                                <button className="text-xs text-blue-600">Book</button>
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-semibold text-sm">Red Roof Inn</div>
                                <div className="text-xs text-gray-500">1.2 miles • 3.9★</div>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-green-600">$69</div>
                                <button className="text-xs text-blue-600">Book</button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Profitability Tracker */}
                        <div className="bg-white rounded-xl p-4 shadow-lg">
                          <div className="flex items-center justify-between mb-3">
                            <h5 className="font-bold text-gray-900">Tour Profit</h5>
                            <TrendingUp className="w-5 h-5 text-green-600" />
                          </div>
                          <div className="grid grid-cols-2 gap-3 text-center">
                            <div>
                              <div className="text-lg font-bold text-green-600">$8,240</div>
                              <div className="text-xs text-gray-500">Revenue (8 shows)</div>
                            </div>
                            <div>
                              <div className="text-lg font-bold text-red-600">$1,340</div>
                              <div className="text-xs text-gray-500">Costs so far</div>
                            </div>
                          </div>
                          <div className="mt-3 pt-3 border-t border-gray-200 text-center">
                            <div className="text-xl font-bold text-blue-600">$6,900</div>
                            <div className="text-xs text-gray-500">Net Profit • 84% margin</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Mobile App Features</h4>
                  <div className="space-y-4">
                    {[
                      {
                        icon: Navigation,
                        title: 'GPS Navigation',
                        description: 'Turn-by-turn directions to each venue with real-time traffic updates and parking suggestions.',
                        color: 'text-blue-600'
                      },
                      {
                        icon: Hotel,
                        title: 'Budget Hotel Finder',
                        description: 'Curated list of clean, affordable hotels near each venue, filtered by price and ratings.',
                        color: 'text-green-600'
                      },
                      {
                        icon: Calculator,
                        title: 'Real-Time Profitability',
                        description: 'Track revenue vs expenses in real-time with detailed breakdowns and profit projections.',
                        color: 'text-purple-600'
                      },
                      {
                        icon: MessageCircle,
                        title: 'Host Communication',
                        description: 'Direct messaging with hosts, venue details, and last-minute coordination tools.',
                        color: 'text-orange-600'
                      },
                      {
                        icon: Receipt,
                        title: 'Expense Tracking',
                        description: 'Photo receipts, categorize expenses, and generate tax-ready reports automatically.',
                        color: 'text-red-600'
                      },
                      {
                        icon: Star,
                        title: 'Performance Analytics',
                        description: 'Track audience size, donation rates, and merchandise sales to optimize future tours.',
                        color: 'text-yellow-600'
                      }
                    ].map((feature, index) => {
                      const Icon = feature.icon
                      return (
                        <div key={index} className="flex items-start">
                          <div className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mr-4 flex-shrink-0`}>
                            <Icon className={`w-5 h-5 ${feature.color}`} />
                          </div>
                          <div>
                            <h5 className="font-bold text-gray-900 mb-1">{feature.title}</h5>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Profitability Analysis */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <BarChart3 className="w-5 h-5 text-green-600 mr-2" />
                    Complete Tour Analysis
                  </h4>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">$16,480</div>
                      <div className="text-sm text-gray-600">Total Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">$2,692</div>
                      <div className="text-sm text-gray-600">Total Expenses</div>
                    </div>
                  </div>
                  <div className="text-center pt-4 border-t border-gray-200">
                    <div className="text-3xl font-bold text-blue-600 mb-1">$13,788</div>
                    <div className="text-gray-700 font-semibold">Net Profit</div>
                    <div className="text-sm text-gray-500">84% profit margin</div>
                  </div>
                </div>

                {/* Download CTA */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white text-center">
                  <Smartphone className="w-12 h-12 mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Download TrueFans JAM™ Mobile</h4>
                  <p className="text-purple-100 mb-4">
                    Get the complete mobile experience for your tour success
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      App Store
                    </button>
                    <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Google Play
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="space-y-6 min-h-[600px]">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Step {currentStep}</h3>
              <p className="text-gray-600">This step is under development.</p>
            </div>
          </div>
        )
    }
  }

  return (
    <Layout 
      title="Plan AI Tour" 
      description="Create your perfect tour route using AI-powered optimization"
    >
      <div className="min-h-screen bg-gray-50 -mt-20">
        {/* Custom Header Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-4">
                  {!isDemo ? (
                    <button
                      onClick={startDemo}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors flex items-center"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Try Demo
                    </button>
                  ) : (
                    <button
                      onClick={stopDemo}
                      className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center"
                    >
                      <Pause className="w-5 h-5 mr-2" />
                      Exit Demo
                    </button>
                  )}
                </div>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center space-x-4 overflow-x-auto pb-4">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  const isActive = currentStep === step.id
                  const isCompleted = currentStep > step.id
                  
                  return (
                    <div key={step.id} className="flex items-center flex-shrink-0">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                        isActive 
                          ? 'border-purple-500 bg-purple-500 text-white' 
                          : isCompleted
                          ? 'border-green-500 bg-green-500 text-white'
                          : 'border-gray-300 bg-white text-gray-400'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <Icon className="w-5 h-5" />
                        )}
                      </div>
                      <div className="ml-3 min-w-0">
                        <p className={`text-sm font-medium ${
                          isActive ? 'text-purple-600' : isCompleted ? 'text-green-600' : 'text-gray-500'
                        }`}>
                          {step.title}
                        </p>
                      </div>
                      {index < steps.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-gray-400 mx-4 flex-shrink-0" />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Previous
              </button>

              <div className="text-sm text-gray-500">
                Step {currentStep} of {steps.length}
              </div>

              <button
                onClick={nextStep}
                disabled={currentStep === 10}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  currentStep === 10
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                }`}
              >
                {currentStep === 7 && isDemo ? 'Start Processing' : 'Next'}
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        {currentStep === 1 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Tour Planning</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our advanced algorithms create the perfect tour route by analyzing your fan base, travel preferences, and venue options
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tourFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default TourPlannerPage
