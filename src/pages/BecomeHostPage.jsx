import React, { useState } from 'react'
import Layout from '../components/Layout'
import { 
  Home, 
  Users, 
  DollarSign, 
  Calendar, 
  Shield, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Music, 
  Heart, 
  Award, 
  TrendingUp,
  Clock,
  MapPin,
  Camera,
  Headphones,
  Coffee,
  Wifi,
  Car,
  Phone,
  Mail,
  ChevronRight,
  Play
} from 'lucide-react'

const BecomeHostPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    venueType: '',
    capacity: '',
    amenities: [],
    experience: '',
    motivation: ''
  })

  const steps = [
    { id: 1, title: 'Personal Info', icon: Users },
    { id: 2, title: 'Venue Details', icon: Home },
    { id: 3, title: 'Hosting Goals', icon: Star },
    { id: 4, title: 'Review & Submit', icon: CheckCircle }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: 'Earn Extra Income',
      description: 'Generate $60-120+ per show while supporting independent artists',
      highlight: '$80 avg per show'
    },
    {
      icon: Music,
      title: 'Discover Amazing Artists',
      description: 'Be the first to experience breakthrough talent in your living room',
      highlight: 'Exclusive access'
    },
    {
      icon: Users,
      title: 'Build Community',
      description: 'Connect with music lovers and create lasting friendships',
      highlight: 'Growing network'
    },
    {
      icon: Heart,
      title: 'Make a Difference',
      description: 'Directly support independent artists and help them grow their careers',
      highlight: 'Real impact'
    }
  ]

  const requirements = [
    {
      category: 'Space Requirements',
      items: [
        'Living room, backyard, or similar intimate space',
        'Capacity for 15-50 guests',
        'Basic seating arrangements',
        'Access to power outlets'
      ]
    },
    {
      category: 'Hosting Essentials',
      items: [
        'Welcoming and friendly personality',
        'Ability to manage small groups',
        'Basic event coordination skills',
        'Passion for live music'
      ]
    },
    {
      category: 'Technical Needs',
      items: [
        'Reliable WiFi connection',
        'Basic sound system (we can help!)',
        'Adequate lighting',
        'Parking availability preferred'
      ]
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      location: 'Austin, TX',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Hosting house concerts has been incredibly rewarding. I\'ve earned over $960 this year while discovering amazing artists.',
      shows: 12,
      earnings: '$960'
    },
    {
      name: 'Mike Rodriguez',
      location: 'Denver, CO',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'The community aspect is what I love most. My neighbors now look forward to our monthly shows.',
      shows: 8,
      earnings: '$640'
    },
    {
      name: 'Lisa Thompson',
      location: 'Portland, OR',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'TrueFans JAM made it so easy to get started. The support team helped me with everything.',
      shows: 15,
      earnings: '$1,200'
    }
  ]

  const venueTypes = [
    { id: 'living-room', label: 'Living Room', icon: Home },
    { id: 'backyard', label: 'Backyard/Patio', icon: Coffee },
    { id: 'basement', label: 'Basement/Den', icon: Music },
    { id: 'garage', label: 'Garage/Studio', icon: Car },
    { id: 'other', label: 'Other Space', icon: MapPin }
  ]

  const amenities = [
    { id: 'sound-system', label: 'Sound System', icon: Headphones },
    { id: 'lighting', label: 'Stage Lighting', icon: Camera },
    { id: 'parking', label: 'Parking Available', icon: Car },
    { id: 'wifi', label: 'High-Speed WiFi', icon: Wifi },
    { id: 'refreshments', label: 'Can Provide Refreshments', icon: Coffee },
    { id: 'seating', label: 'Flexible Seating', icon: Users }
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleAmenityToggle = (amenityId) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenityId)
        ? prev.amenities.filter(id => id !== amenityId)
        : [...prev.amenities, amenityId]
    }))
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="123 Main Street"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="City"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="State"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                <input
                  type="text"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange('zipCode', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="12345"
                />
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">What type of space will you use?</label>
              <div className="grid md:grid-cols-3 gap-4">
                {venueTypes.map((type) => {
                  const Icon = type.icon
                  return (
                    <button
                      key={type.id}
                      onClick={() => handleInputChange('venueType', type.id)}
                      className={`p-4 border-2 rounded-lg text-center transition-all ${
                        formData.venueType === type.id
                          ? 'border-purple-500 bg-purple-50 text-purple-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Icon className="w-8 h-8 mx-auto mb-2" />
                      <span className="font-medium">{type.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Expected Capacity</label>
              <select
                value={formData.capacity}
                onChange={(e) => handleInputChange('capacity', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select capacity range</option>
                <option value="15-25">15-25 guests</option>
                <option value="25-35">25-35 guests</option>
                <option value="35-50">35-50 guests</option>
                <option value="50+">50+ guests</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Available Amenities</label>
              <div className="grid md:grid-cols-2 gap-4">
                {amenities.map((amenity) => {
                  const Icon = amenity.icon
                  return (
                    <button
                      key={amenity.id}
                      onClick={() => handleAmenityToggle(amenity.id)}
                      className={`flex items-center p-4 border-2 rounded-lg transition-all ${
                        formData.amenities.includes(amenity.id)
                          ? 'border-purple-500 bg-purple-50 text-purple-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      <span className="font-medium">{amenity.label}</span>
                      {formData.amenities.includes(amenity.id) && (
                        <CheckCircle className="w-5 h-5 ml-auto text-purple-600" />
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Previous hosting experience</label>
              <select
                value={formData.experience}
                onChange={(e) => handleInputChange('experience', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select your experience level</option>
                <option value="none">No previous experience</option>
                <option value="some">Some event hosting experience</option>
                <option value="experienced">Experienced event host</option>
                <option value="professional">Professional event coordinator</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">What motivates you to become a host?</label>
              <textarea
                value={formData.motivation}
                onChange={(e) => handleInputChange('motivation', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Tell us why you're excited to host house concerts..."
              />
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-900 mb-4">What happens next?</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-purple-800">Application review (1-2 business days)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-purple-800">Virtual venue walkthrough</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-purple-800">Host onboarding and training</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-purple-800">Your first show booking!</span>
                </div>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Application Summary</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Personal Information</h4>
                  <p className="text-gray-600">{formData.firstName} {formData.lastName}</p>
                  <p className="text-gray-600">{formData.email}</p>
                  <p className="text-gray-600">{formData.city}, {formData.state}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Venue Details</h4>
                  <p className="text-gray-600">Type: {venueTypes.find(v => v.id === formData.venueType)?.label}</p>
                  <p className="text-gray-600">Capacity: {formData.capacity}</p>
                  <p className="text-gray-600">Amenities: {formData.amenities.length} selected</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-lg font-bold text-green-900">Ready to Submit</h3>
              </div>
              <p className="text-green-800 mb-4">
                Your application looks great! Once submitted, our team will review it within 1-2 business days.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-700">
                  By submitting, you agree to our Terms of Service and Host Guidelines
                </span>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors">
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <Layout 
      title="Become a Host" 
      description="Join our community of hosts and start earning while supporting independent artists"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Home className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Become a TrueFans JAM Host</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Open your home to incredible live music experiences. Earn extra income while supporting independent artists and building community.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <DollarSign className="w-4 h-4 mr-2 text-green-600" />
              <span>$60-120+ per show</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-blue-600" />
              <span>2-3 hours per event</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-purple-600" />
              <span>15-50 guests</span>
            </div>
          </div>
        </div>

        {/* Revenue Breakdown Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Host Revenue Breakdown</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Typical Show Scenario */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Typical Show Scenario</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Attendees</span>
                      <span className="font-semibold">50 people</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Donation rate</span>
                      <span className="font-semibold">80% (40 people)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Average donation</span>
                      <span className="font-semibold">$20</span>
                    </div>
                    <div className="flex justify-between items-center py-3 bg-blue-50 rounded-lg px-4">
                      <span className="font-bold text-gray-900">Total Donations</span>
                      <span className="font-bold text-xl text-blue-600">$800</span>
                    </div>
                  </div>
                </div>

                {/* Revenue Split */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Revenue Distribution</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Artist (70%)</span>
                      <span className="font-semibold text-purple-600">$560</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 bg-green-50 rounded px-3">
                      <span className="text-gray-900 font-medium">Host (10%)</span>
                      <span className="font-bold text-green-600">$80</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Referral commissions (5%)</span>
                      <span className="font-semibold text-orange-600">$40</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">Platform (15%)</span>
                      <span className="font-semibold text-gray-600">$120</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="bg-white rounded-xl p-6 shadow-lg inline-block">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Your Monthly Potential</h4>
                  <p className="text-gray-600 mb-4">Host 4 shows per month at average performance</p>
                  <div className="text-3xl font-bold text-green-600">$320/month</div>
                  <div className="text-lg text-gray-600 mt-2">+ referral bonuses</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Host with TrueFans JAM?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 mb-3">{benefit.description}</p>
                  <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {benefit.highlight}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Host Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Hosts Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex justify-between text-sm">
                  <span className="text-purple-600 font-medium">{testimonial.shows} shows hosted</span>
                  <span className="text-green-600 font-medium">{testimonial.earnings} earned</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Host Requirements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{req.category}</h3>
                <ul className="space-y-3">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Host Application</h2>
              <p className="text-purple-100">Join our community of amazing hosts in just a few steps</p>
            </div>

            {/* Progress Steps */}
            <div className="px-8 py-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  const isActive = currentStep === step.id
                  const isCompleted = currentStep > step.id
                  
                  return (
                    <div key={step.id} className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isCompleted ? 'bg-green-600 text-white' :
                        isActive ? 'bg-purple-600 text-white' :
                        'bg-gray-200 text-gray-600'
                      }`}>
                        {isCompleted ? <CheckCircle className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                      </div>
                      <span className={`ml-3 font-medium ${
                        isActive ? 'text-purple-600' : 'text-gray-600'
                      }`}>
                        {step.title}
                      </span>
                      {index < steps.length - 1 && (
                        <ChevronRight className="w-5 h-5 text-gray-400 mx-4" />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Form Content */}
            <div className="px-8 py-8">
              {renderStepContent()}
            </div>

            {/* Form Navigation */}
            <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 flex justify-between">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  currentStep === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-600 text-white hover:bg-gray-700'
                }`}
              >
                Previous
              </button>
              
              {currentStep < 4 ? (
                <button
                  onClick={nextStep}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center"
                >
                  Next Step <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                  Submit Application
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Questions About Hosting?</h3>
            <p className="text-blue-200 mb-6">
              Our host success team is here to help you every step of the way.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Schedule a Call
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mb-6">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Host Resources</h3>
            <p className="text-gray-600 mb-6">
              Access our comprehensive host guide and join the community.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors">
              View Resources
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BecomeHostPage
