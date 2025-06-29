import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card'
import { 
  MapPin, 
  Calendar, 
  Users, 
  Route, 
  Clock, 
  DollarSign,
  ArrowLeft,
  Plus,
  Trash2,
  Edit,
  Send,
  Save,
  AlertCircle,
  CheckCircle,
  Music,
  Target
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useCreateTour } from '../../hooks/useTours'
import { toast } from 'react-hot-toast'

interface TourFormData {
  title: string
  description: string
  startDate: string
  endDate: string
  targetStates: string[]
  targetCities: string[]
  minCapacity: number
  maxCapacity: number
  expectedShows: number
  baseGuarantee: number
  revenueSplitPercentage: number
  ticketPriceSuggested: number
  genreRequirements: string[]
  venueTypePreferences: string[]
  specialRequirements: string
}

const CreateTour: React.FC = () => {
  const navigate = useNavigate()
  const createTourMutation = useCreateTour()
  
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<TourFormData>({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    targetStates: [],
    targetCities: [],
    minCapacity: 15,
    maxCapacity: 50,
    expectedShows: 10,
    baseGuarantee: 200,
    revenueSplitPercentage: 70,
    ticketPriceSuggested: 25,
    genreRequirements: [],
    venueTypePreferences: [],
    specialRequirements: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const states = [
    'California', 'Oregon', 'Washington', 'Nevada', 'Arizona', 'Utah', 'Colorado',
    'New Mexico', 'Texas', 'Montana', 'Idaho', 'Wyoming', 'North Dakota', 'South Dakota',
    'Nebraska', 'Kansas', 'Oklahoma', 'Arkansas', 'Louisiana', 'Mississippi', 'Alabama',
    'Tennessee', 'Kentucky', 'Missouri', 'Iowa', 'Minnesota', 'Wisconsin', 'Illinois',
    'Michigan', 'Indiana', 'Ohio', 'West Virginia', 'Virginia', 'North Carolina',
    'South Carolina', 'Georgia', 'Florida', 'Maine', 'New Hampshire', 'Vermont',
    'Massachusetts', 'Rhode Island', 'Connecticut', 'New York', 'New Jersey',
    'Pennsylvania', 'Delaware', 'Maryland'
  ]

  const genres = [
    'Indie Folk', 'Acoustic', 'Singer-Songwriter', 'Alternative Rock', 'Indie Pop',
    'Folk Rock', 'Americana', 'Country', 'Blues', 'Jazz', 'Classical', 'Electronic'
  ]

  const venueTypes = [
    'living_room', 'backyard', 'basement', 'garage', 'studio', 'barn', 
    'rooftop', 'patio', 'music_room', 'other'
  ]

  const handleInputChange = (field: keyof TourFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleArrayToggle = (field: keyof TourFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).includes(value)
        ? (prev[field] as string[]).filter(item => item !== value)
        : [...(prev[field] as string[]), value]
    }))
  }

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.title && formData.startDate && formData.endDate)
      case 2:
        return formData.targetStates.length > 0
      case 3:
        return formData.expectedShows > 0 && formData.baseGuarantee > 0
      default:
        return true
    }
  }

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) {
      toast.error('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Create the tour
      await createTourMutation.mutateAsync({
        title: formData.title,
        description: formData.description,
        start_date: formData.startDate,
        end_date: formData.endDate,
        target_states: formData.targetStates,
        target_cities: formData.targetCities,
        min_capacity: formData.minCapacity,
        max_capacity: formData.maxCapacity,
        expected_shows: formData.expectedShows,
        base_guarantee: formData.baseGuarantee,
        revenue_split_percentage: formData.revenueSplitPercentage,
        ticket_price_suggested: formData.ticketPriceSuggested,
        genre_requirements: formData.genreRequirements,
        venue_type_preferences: formData.venueTypePreferences,
        special_requirements: formData.specialRequirements,
        status: 'planning',
        visibility: 'public'
      })

      toast.success('Tour created successfully! Fan invitations will be sent shortly.')
      navigate('/artist/dashboard')
    } catch (error) {
      console.error('Error creating tour:', error)
      toast.error('Failed to create tour. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4))
    } else {
      toast.error('Please fill in all required fields')
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const steps = [
    { number: 1, title: 'Tour Details', description: 'Basic information about your tour' },
    { number: 2, title: 'Target Locations', description: 'Where you want to perform' },
    { number: 3, title: 'Performance Details', description: 'Show requirements and pricing' },
    { number: 4, title: 'Review & Submit', description: 'Confirm your tour details' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/artist/dashboard')}
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-xl font-display font-bold text-gray-900">
                  Create New Tour
                </h1>
                <p className="text-sm text-gray-600">
                  Set up your tour and invite fans to host shows
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.number
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'border-gray-300 text-gray-500'
                }`}>
                  {currentStep > step.number ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <span className="text-sm font-medium">{step.number}</span>
                  )}
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.number ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </p>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-blue-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <Card>
          <CardContent className="p-8">
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Tour Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tour Title *
                      </label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., Pacific Northwest Acoustic Tour 2024"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell fans about your tour, what to expect, and why they should host you..."
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Start Date *
                        </label>
                        <input
                          type="date"
                          value={formData.startDate}
                          onChange={(e) => handleInputChange('startDate', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          End Date *
                        </label>
                        <input
                          type="date"
                          value={formData.endDate}
                          onChange={(e) => handleInputChange('endDate', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Target Locations</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Target States * (Select at least one)
                      </label>
                      <div className="grid grid-cols-3 gap-2 max-h-60 overflow-y-auto border border-gray-200 rounded-lg p-4">
                        {states.map(state => (
                          <label key={state} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.targetStates.includes(state)}
                              onChange={() => handleArrayToggle('targetStates', state)}
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700">{state}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Specific Cities (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Portland, Seattle, San Francisco (comma separated)"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        onChange={(e) => handleInputChange('targetCities', e.target.value.split(',').map(city => city.trim()).filter(Boolean))}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Leave blank to include all cities in selected states
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Details</h3>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Min Capacity
                        </label>
                        <input
                          type="number"
                          value={formData.minCapacity}
                          onChange={(e) => handleInputChange('minCapacity', parseInt(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Max Capacity
                        </label>
                        <input
                          type="number"
                          value={formData.maxCapacity}
                          onChange={(e) => handleInputChange('maxCapacity', parseInt(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expected Shows
                        </label>
                        <input
                          type="number"
                          value={formData.expectedShows}
                          onChange={(e) => handleInputChange('expectedShows', parseInt(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Base Guarantee ($)
                        </label>
                        <input
                          type="number"
                          value={formData.baseGuarantee}
                          onChange={(e) => handleInputChange('baseGuarantee', parseInt(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Revenue Split (%)
                        </label>
                        <input
                          type="number"
                          value={formData.revenueSplitPercentage}
                          onChange={(e) => handleInputChange('revenueSplitPercentage', parseInt(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Suggested Ticket Price ($)
                        </label>
                        <input
                          type="number"
                          value={formData.ticketPriceSuggested}
                          onChange={(e) => handleInputChange('ticketPriceSuggested', parseInt(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Genre Requirements
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {genres.map(genre => (
                          <label key={genre} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.genreRequirements.includes(genre)}
                              onChange={() => handleArrayToggle('genreRequirements', genre)}
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700">{genre}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Preferred Venue Types
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {venueTypes.map(type => (
                          <label key={type} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.venueTypePreferences.includes(type)}
                              onChange={() => handleArrayToggle('venueTypePreferences', type)}
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700 capitalize">
                              {type.replace('_', ' ')}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Special Requirements
                      </label>
                      <textarea
                        value={formData.specialRequirements}
                        onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Any special equipment, setup, or other requirements..."
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Review & Submit</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-medium text-gray-900 mb-3">Tour Summary</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Title:</span>
                          <span className="ml-2 font-medium">{formData.title}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Duration:</span>
                          <span className="ml-2 font-medium">
                            {formData.startDate} to {formData.endDate}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600">Target States:</span>
                          <span className="ml-2 font-medium">
                            {formData.targetStates.join(', ')}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600">Expected Shows:</span>
                          <span className="ml-2 font-medium">{formData.expectedShows}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Base Guarantee:</span>
                          <span className="ml-2 font-medium">${formData.baseGuarantee}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Revenue Split:</span>
                          <span className="ml-2 font-medium">{formData.revenueSplitPercentage}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-blue-900">What happens next?</h4>
                          <ul className="text-sm text-blue-800 mt-2 space-y-1">
                            <li>• Fan invitations will be sent to your target locations</li>
                            <li>• Our algorithm will optimize show scheduling based on geography and dates</li>
                            <li>• You'll receive a proposed tour plan for approval</li>
                            <li>• Once approved, host confirmations will be sent</li>
                            <li>• Tour constraints: Max 300 miles/day, 1 day off every 3rd show, arrive by 4pm</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          
          <div className="flex space-x-3">
            {currentStep < 4 ? (
              <Button onClick={nextStep}>
                Next
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Creating Tour...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Create Tour & Send Invitations
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateTour
