import React, { useState } from 'react'
import Layout from '../components/Layout'
import { 
  Shield, 
  Star, 
  Award, 
  Users, 
  Home, 
  DollarSign, 
  CheckCircle, 
  ArrowRight, 
  Music, 
  Heart, 
  TrendingUp,
  Clock,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Play,
  Target,
  Zap,
  Crown,
  Gift,
  Calendar,
  MessageCircle,
  BookOpen,
  Camera,
  Headphones,
  Coffee,
  Wifi,
  Car,
  Volume2,
  Eye,
  Lock,
  Globe,
  Sparkles,
  Trophy,
  BadgeCheck,
  Flame,
  Diamond,
  FileCheck
} from 'lucide-react'

const VettedHostsPage = () => {
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
    experience: '',
    motivation: '',
    references: '',
    portfolio: '',
    availability: []
  })

  const vettedBenefits = [
    {
      icon: Crown,
      title: 'Premium Artist Access',
      description: 'First access to touring headliners and exclusive TrueFans CONNECT™ artists',
      highlight: 'VIP Priority'
    },
    {
      icon: DollarSign,
      title: 'Higher Revenue Share',
      description: 'Earn 15% of donations (vs 10% standard) plus exclusive performance bonuses',
      highlight: '50% more earnings'
    },
    {
      icon: Shield,
      title: 'Enhanced Support',
      description: 'Dedicated account manager, 24/7 priority support, and technical assistance',
      highlight: 'White-glove service'
    },
    {
      icon: Trophy,
      title: 'Recognition & Rewards',
      description: 'Featured in marketing, annual awards, and exclusive host community events',
      highlight: 'Elite status'
    }
  ]

  const requirements = [
    {
      category: 'Experience Requirements',
      items: [
        'Minimum 10 successfully hosted house concerts',
        'Average guest rating of 4.8+ stars',
        'Zero safety incidents or complaints',
        'Demonstrated ability to promote shows effectively'
      ]
    },
    {
      category: 'Venue Standards',
      items: [
        'Professional-grade sound system and lighting',
        'Capacity for 25-75 guests comfortably',
        'Dedicated performance space with optimal acoustics',
        'Premium amenities (parking, refreshments, accessibility)'
      ]
    },
    {
      category: 'Commitment Level',
      items: [
        'Host minimum 12 shows per year',
        'Available for weekend and weeknight performances',
        'Participate in host training and community events',
        'Maintain consistent quality and professionalism'
      ]
    }
  ]

  const applicationSteps = [
    { id: 1, title: 'Application', icon: FileCheck },
    { id: 2, title: 'Portfolio Review', icon: Eye },
    { id: 3, title: 'Virtual Interview', icon: MessageCircle },
    { id: 4, title: 'Venue Inspection', icon: Home },
    { id: 5, title: 'Trial Period', icon: Clock },
    { id: 6, title: 'Certification', icon: BadgeCheck }
  ]

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      location: 'Nashville, TN',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Being a Vetted Host has transformed my hosting experience. The caliber of artists and support is incredible.',
      shows: 45,
      earnings: '$6,750',
      badge: 'Gold Tier'
    },
    {
      name: 'Marcus Chen',
      location: 'Austin, TX',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'The exclusive artist access means my guests experience breakthrough talent before anyone else.',
      shows: 38,
      earnings: '$5,700',
      badge: 'Platinum Tier'
    },
    {
      name: 'Sarah Kim',
      location: 'Portland, OR',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'The dedicated support team makes hosting effortless. I can focus on creating amazing experiences.',
      shows: 52,
      earnings: '$7,800',
      badge: 'Diamond Tier'
    }
  ]

  const tiers = [
    {
      name: 'Gold Tier',
      icon: Award,
      color: 'from-yellow-400 to-yellow-600',
      requirements: '10-24 shows annually',
      benefits: ['15% revenue share', 'Priority booking', 'Monthly check-ins'],
      badge: '🥇'
    },
    {
      name: 'Platinum Tier',
      icon: Star,
      color: 'from-gray-400 to-gray-600',
      requirements: '25-39 shows annually',
      benefits: ['17% revenue share', 'Exclusive artists', 'Quarterly rewards'],
      badge: '🥈'
    },
    {
      name: 'Diamond Tier',
      icon: Diamond,
      color: 'from-blue-400 to-purple-600',
      requirements: '40+ shows annually',
      benefits: ['20% revenue share', 'VIP events', 'Annual recognition'],
      badge: '💎'
    }
  ]

  const exclusiveFeatures = [
    {
      title: 'TrueFans CONNECT™ Integration',
      description: 'Direct access to artists building their fanbase through our premium platform',
      icon: Zap
    },
    {
      title: 'Advanced Analytics Dashboard',
      description: 'Detailed insights on audience engagement, revenue trends, and performance metrics',
      icon: TrendingUp
    },
    {
      title: 'Professional Marketing Support',
      description: 'Custom promotional materials, social media assets, and PR assistance',
      icon: Sparkles
    },
    {
      title: 'Exclusive Artist Showcases',
      description: 'Host invite-only events featuring breakthrough artists and industry professionals',
      icon: Crown
    }
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
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
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="text-lg font-bold text-blue-900 mb-2">Vetted Host Application</h4>
              <p className="text-blue-800">
                This application is for experienced hosts seeking to join our elite Vetted Host program. 
                Standard host applications are available separately.
              </p>
            </div>
            
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
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hosting Experience</label>
              <textarea
                value={formData.experience}
                onChange={(e) => handleInputChange('experience', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Describe your house concert hosting experience, including number of shows, notable artists, and achievements..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio/References</label>
              <textarea
                value={formData.portfolio}
                onChange={(e) => handleInputChange('portfolio', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Provide links to photos, videos, testimonials, or references from previous shows..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Why Vetted Host Program?</label>
              <textarea
                value={formData.motivation}
                onChange={(e) => handleInputChange('motivation', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="What motivates you to join the Vetted Host program? How do you plan to contribute to the community?"
              />
            </div>
          </div>
        )

      default:
        return (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for your interest in the Vetted Host program. Our team will review your application 
              and contact you within 3-5 business days.
            </p>
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h4 className="font-bold text-green-900 mb-2">What's Next?</h4>
              <ul className="text-green-800 text-left space-y-2">
                <li>• Portfolio and reference review (3-5 days)</li>
                <li>• Virtual interview scheduling</li>
                <li>• Venue inspection appointment</li>
                <li>• Trial period assignment</li>
              </ul>
            </div>
          </div>
        )
    }
  }

  return (
    <Layout 
      title="Vetted Hosts Program" 
      description="Join our elite community of premium hosts and unlock exclusive benefits, higher earnings, and VIP artist access"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Crown className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Vetted Hosts Program</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join our elite community of premium hosts. Unlock exclusive artist access, higher earnings, 
            and VIP support while hosting the most sought-after performances.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Crown className="w-4 h-4 mr-2 text-yellow-600" />
              <span>Elite Status</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="w-4 h-4 mr-2 text-green-600" />
              <span>15-20% Revenue Share</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-purple-600" />
              <span>Exclusive Artists</span>
            </div>
          </div>
        </div>

        {/* Program Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Exclusive Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vettedBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 mb-3">{benefit.description}</p>
                  <span className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {benefit.highlight}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Tier System */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Recognition Tiers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => {
              const Icon = tier.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl mb-2">{tier.badge}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.requirements}</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        {/* Revenue Comparison */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Earnings Comparison</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Standard Host */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Standard Host</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Revenue share</span>
                      <span className="font-semibold">10%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Average show earnings</span>
                      <span className="font-semibold">$80</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Monthly potential (4 shows)</span>
                      <span className="font-semibold">$320</span>
                    </div>
                    <div className="flex justify-between items-center py-3 bg-gray-50 rounded-lg px-4">
                      <span className="font-bold text-gray-900">Annual potential</span>
                      <span className="font-bold text-xl text-gray-600">$3,840</span>
                    </div>
                  </div>
                </div>

                {/* Vetted Host */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-200">
                  <h3 className="text-lg font-bold text-purple-900 mb-4">Vetted Host (Gold Tier)</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Revenue share</span>
                      <span className="font-semibold text-purple-600">15%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Average show earnings</span>
                      <span className="font-semibold text-purple-600">$120</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Monthly potential (4 shows)</span>
                      <span className="font-semibold text-purple-600">$480</span>
                    </div>
                    <div className="flex justify-between items-center py-3 bg-purple-50 rounded-lg px-4">
                      <span className="font-bold text-gray-900">Annual potential</span>
                      <span className="font-bold text-xl text-purple-600">$5,760</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="bg-white rounded-xl p-6 shadow-lg inline-block">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Additional Earning Opportunities</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-green-600">Performance Bonuses</div>
                      <div className="text-gray-600">Up to $200/show</div>
                    </div>
                    <div>
                      <div className="font-semibold text-blue-600">Referral Rewards</div>
                      <div className="text-gray-600">$100 per new host</div>
                    </div>
                    <div>
                      <div className="font-semibold text-purple-600">Annual Recognition</div>
                      <div className="text-gray-600">$500-2,000 bonus</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Program Requirements</h2>
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

        {/* Exclusive Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Exclusive Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {exclusiveFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Vetted Host Success Stories</h2>
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
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                      {testimonial.badge}
                    </span>
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

        {/* Application Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Application Process</h2>
          <div className="grid md:grid-cols-6 gap-4">
            {applicationSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.id} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{step.title}</h4>
                  <div className="text-xs text-gray-600">Step {step.id}</div>
                  {index < applicationSteps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-gray-400 mx-auto mt-2 hidden md:block" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Application Form */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Vetted Host Application</h2>
              <p className="text-purple-100">Apply to join our elite community of premium hosts</p>
            </div>

            {/* Progress Steps */}
            <div className="px-8 py-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                {applicationSteps.slice(0, 3).map((step, index) => {
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
                      {index < 2 && (
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
            {currentStep <= 2 && (
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
                
                {currentStep < 2 ? (
                  <button
                    onClick={nextStep}
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center"
                  >
                    Next Step <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                ) : (
                  <button 
                    onClick={nextStep}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-colors"
                  >
                    Submit Application
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Support Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-8 text-white">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Questions About the Program?</h3>
            <p className="text-purple-200 mb-6">
              Our Vetted Host success team is here to answer questions and guide you through the application process.
            </p>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mb-6">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Elite Community</h3>
            <p className="text-gray-600 mb-6">
              Connect with other Vetted Hosts, share best practices, and access exclusive resources 
              in our private community.
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:from-yellow-600 hover:to-orange-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default VettedHostsPage
