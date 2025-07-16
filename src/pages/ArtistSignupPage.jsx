import React, { useState } from 'react'
import Layout from '../components/Layout'
import { 
  Music, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Upload, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Play,
  Headphones,
  Users,
  DollarSign,
  ChevronRight,
  Instagram,
  Youtube,
  Globe,
  Mic
} from 'lucide-react'

const ArtistSignupPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    
    // Artist Info
    artistName: '',
    genre: '',
    yearsPerforming: '',
    performanceStyle: '',
    
    // Music & Media
    spotifyUrl: '',
    youtubeUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    
    // Experience
    previousVenues: '',
    audienceSize: '',
    equipment: [],
    
    // Availability
    availability: [],
    travelRadius: '',
    
    // Additional
    bio: '',
    specialRequests: ''
  })

  const steps = [
    { id: 1, title: 'Personal Info', icon: User },
    { id: 2, title: 'Artist Details', icon: Music },
    { id: 3, title: 'Music & Media', icon: Play },
    { id: 4, title: 'Experience', icon: Star },
    { id: 5, title: 'Availability', icon: Calendar },
    { id: 6, title: 'Review & Submit', icon: CheckCircle }
  ]

  const genres = [
    'Folk', 'Indie Rock', 'Singer-Songwriter', 'Acoustic Pop', 'Country', 
    'Blues', 'Jazz', 'Classical', 'Alternative', 'Americana', 'World Music', 'Other'
  ]

  const performanceStyles = [
    'Solo Acoustic', 'Solo with Backing Tracks', 'Duo', 'Small Band (3-4 members)', 
    'Full Band (5+ members)', 'Storytelling with Music'
  ]

  const equipmentOptions = [
    { id: 'acoustic-guitar', label: 'Acoustic Guitar' },
    { id: 'electric-guitar', label: 'Electric Guitar' },
    { id: 'keyboard', label: 'Keyboard/Piano' },
    { id: 'vocals', label: 'Vocals Only' },
    { id: 'harmonica', label: 'Harmonica' },
    { id: 'violin', label: 'Violin/Fiddle' },
    { id: 'drums', label: 'Percussion/Drums' },
    { id: 'bass', label: 'Bass Guitar' },
    { id: 'other', label: 'Other Instruments' }
  ]

  const availabilityOptions = [
    'Weekday Evenings', 'Friday Nights', 'Saturday Afternoons', 
    'Saturday Evenings', 'Sunday Afternoons', 'Weekend Mornings'
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: 'Earn $560 Average Per Show',
      description: '70% of donations go directly to you'
    },
    {
      icon: Users,
      title: 'Intimate Audiences',
      description: '15-50 engaged fans who came to hear you'
    },
    {
      icon: Headphones,
      title: 'Professional Support',
      description: 'Full booking and technical assistance'
    }
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleArrayToggle = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }))
  }

  const nextStep = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1)
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
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your city"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="State"
                  required
                />
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Artist/Stage Name *</label>
              <input
                type="text"
                value={formData.artistName}
                onChange={(e) => handleInputChange('artistName', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="The name you perform under"
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Primary Genre *</label>
                <select
                  value={formData.genre}
                  onChange={(e) => handleInputChange('genre', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                >
                  <option value="">Select your primary genre</option>
                  {genres.map(genre => (
                    <option key={genre} value={genre}>{genre}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Years Performing *</label>
                <select
                  value={formData.yearsPerforming}
                  onChange={(e) => handleInputChange('yearsPerforming', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                >
                  <option value="">Select experience level</option>
                  <option value="less-than-1">Less than 1 year</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10-plus">10+ years</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Performance Style *</label>
              <select
                value={formData.performanceStyle}
                onChange={(e) => handleInputChange('performanceStyle', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              >
                <option value="">Select your performance style</option>
                {performanceStyles.map(style => (
                  <option key={style} value={style}>{style}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Artist Bio</label>
              <textarea
                value={formData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Tell us about your musical journey, influences, and what makes your performances special..."
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Share Your Music</h3>
              <p className="text-blue-800">Help hosts and fans discover your sound by sharing your online presence.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Spotify Profile</label>
                <div className="relative">
                  <input
                    type="url"
                    value={formData.spotifyUrl}
                    onChange={(e) => handleInputChange('spotifyUrl', e.target.value)}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="https://open.spotify.com/artist/..."
                  />
                  <Music className="w-5 h-5 text-gray-400 absolute left-3 top-4" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">YouTube Channel</label>
                <div className="relative">
                  <input
                    type="url"
                    value={formData.youtubeUrl}
                    onChange={(e) => handleInputChange('youtubeUrl', e.target.value)}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="https://youtube.com/@yourname"
                  />
                  <Youtube className="w-5 h-5 text-gray-400 absolute left-3 top-4" />
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Instagram</label>
                <div className="relative">
                  <input
                    type="url"
                    value={formData.instagramUrl}
                    onChange={(e) => handleInputChange('instagramUrl', e.target.value)}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="https://instagram.com/yourname"
                  />
                  <Instagram className="w-5 h-5 text-gray-400 absolute left-3 top-4" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                <div className="relative">
                  <input
                    type="url"
                    value={formData.websiteUrl}
                    onChange={(e) => handleInputChange('websiteUrl', e.target.value)}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="https://yourwebsite.com"
                  />
                  <Globe className="w-5 h-5 text-gray-400 absolute left-3 top-4" />
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <h4 className="font-bold text-yellow-900 mb-2">Music Samples Required</h4>
              <p className="text-yellow-800 mb-4">
                Please upload 2-3 of your best songs that represent your live performance style. 
                These will be reviewed as part of your application.
              </p>
              <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-700 transition-colors flex items-center">
                <Upload className="w-5 h-5 mr-2" />
                Upload Music Files
              </button>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">What instruments/equipment do you use? *</label>
              <div className="grid md:grid-cols-2 gap-4">
                {equipmentOptions.map((equipment) => (
                  <button
                    key={equipment.id}
                    onClick={() => handleArrayToggle('equipment', equipment.id)}
                    className={`flex items-center p-4 border-2 rounded-lg transition-all ${
                      formData.equipment.includes(equipment.id)
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Mic className="w-5 h-5 mr-3" />
                    <span className="font-medium">{equipment.label}</span>
                    {formData.equipment.includes(equipment.id) && (
                      <CheckCircle className="w-5 h-5 ml-auto text-purple-600" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Previous Performance Venues</label>
              <textarea
                value={formData.previousVenues}
                onChange={(e) => handleInputChange('previousVenues', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="List venues where you've performed (coffee shops, bars, festivals, house concerts, etc.)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Typical Audience Size</label>
              <select
                value={formData.audienceSize}
                onChange={(e) => handleInputChange('audienceSize', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select typical audience size</option>
                <option value="5-15">5-15 people</option>
                <option value="15-30">15-30 people</option>
                <option value="30-50">30-50 people</option>
                <option value="50-100">50-100 people</option>
                <option value="100-plus">100+ people</option>
              </select>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">When are you typically available to perform? *</label>
              <div className="grid md:grid-cols-2 gap-4">
                {availabilityOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleArrayToggle('availability', option)}
                    className={`flex items-center p-4 border-2 rounded-lg transition-all ${
                      formData.availability.includes(option)
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Calendar className="w-5 h-5 mr-3" />
                    <span className="font-medium">{option}</span>
                    {formData.availability.includes(option) && (
                      <CheckCircle className="w-5 h-5 ml-auto text-purple-600" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Travel Radius *</label>
              <select
                value={formData.travelRadius}
                onChange={(e) => handleInputChange('travelRadius', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              >
                <option value="">How far are you willing to travel?</option>
                <option value="10-miles">Within 10 miles</option>
                <option value="25-miles">Within 25 miles</option>
                <option value="50-miles">Within 50 miles</option>
                <option value="100-miles">Within 100 miles</option>
                <option value="statewide">Anywhere in state</option>
                <option value="regional">Regional (multi-state)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests or Requirements</label>
              <textarea
                value={formData.specialRequests}
                onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Any special technical requirements, accessibility needs, or other requests..."
              />
            </div>
          </div>
        )

      case 6:
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
                  <h4 className="font-medium text-gray-700 mb-2">Artist Details</h4>
                  <p className="text-gray-600">Artist Name: {formData.artistName}</p>
                  <p className="text-gray-600">Genre: {formData.genre}</p>
                  <p className="text-gray-600">Style: {formData.performanceStyle}</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-lg font-bold text-green-900">Ready to Submit</h3>
              </div>
              <p className="text-green-800 mb-4">
                Your application looks great! Once submitted, our team will review it within 2-3 business days.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-bold text-gray-900 mb-2">What happens next?</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Application review (2-3 business days)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Music sample evaluation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Video interview (if approved)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Profile activation and first bookings!
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-700">
                  By submitting, you agree to our Terms of Service and Artist Guidelines
                </span>
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors">
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
      title="Artist Application" 
      description="Join TrueFans JAM and start earning through intimate house concerts"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Music className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Apply to Become a TrueFans JAM Artist</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community of independent artists and start earning through intimate house concerts with engaged audiences.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6">
            <h2 className="text-2xl font-bold text-white mb-2">Artist Application</h2>
            <p className="text-purple-100">Complete all steps to join our artist community</p>
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
                    <span className={`ml-3 font-medium hidden sm:block ${
                      isActive ? 'text-purple-600' : 'text-gray-600'
                    }`}>
                      {step.title}
                    </span>
                    {index < steps.length - 1 && (
                      <ChevronRight className="w-5 h-5 text-gray-400 mx-4 hidden sm:block" />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Form Content */}
          <div className="px-8 py-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Step {currentStep}: {steps.find(s => s.id === currentStep)?.title}
            </h3>
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
            
            {currentStep < 6 ? (
              <button
                onClick={nextStep}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center"
              >
                Next Step <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            ) : (
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Submit Application
              </button>
            )}
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Need Help with Your Application?</h3>
            <p className="text-blue-200 mb-6">
              Our artist success team is here to help you through the application process.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Get Application Help
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join the Artist Community</h3>
            <p className="text-gray-600 mb-6">
              Connect with other artists and get tips for a successful application.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors">
              Join Discord Community
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ArtistSignupPage
