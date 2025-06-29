import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card'
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Route, 
  Users, 
  DollarSign,
  ArrowLeft,
  Check,
  X,
  Edit,
  Send,
  AlertTriangle,
  CheckCircle,
  Navigation,
  Bed,
  Music
} from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTour, useUpdateTour } from '../../hooks/useTours'
import { toast } from 'react-hot-toast'

interface TourStop {
  id: string
  hostName: string
  city: string
  state: string
  date: string
  arrivalTime: string
  venueType: string
  capacity: number
  drivingDistance: number
  drivingTime: number
  isRestDay: boolean
  guaranteedAmount: number
  hostImage: string
}

interface TourPlan {
  stops: TourStop[]
  totalDistance: number
  totalDrivingTime: number
  totalShows: number
  restDays: number
  projectedRevenue: number
  feasible: boolean
  violations: string[]
}

const TourPlanReview: React.FC = () => {
  const navigate = useNavigate()
  const { tourId } = useParams<{ tourId: string }>()
  const { data: tour, isLoading } = useTour(tourId!)
  const updateTourMutation = useUpdateTour()
  
  const [tourPlan, setTourPlan] = useState<TourPlan | null>(null)
  const [isApproving, setIsApproving] = useState(false)
  const [feedback, setFeedback] = useState('')

  // Mock tour plan data - in real implementation, this would come from the algorithm
  useEffect(() => {
    if (tour) {
      // Simulate loading tour plan from algorithm
      setTimeout(() => {
        setTourPlan({
          stops: [
            {
              id: '1',
              hostName: 'Sarah Chen',
              city: 'Portland',
              state: 'OR',
              date: '2024-03-15',
              arrivalTime: '14:30',
              venueType: 'Living Room',
              capacity: 25,
              drivingDistance: 0,
              drivingTime: 0,
              isRestDay: false,
              guaranteedAmount: 250,
              hostImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
            },
            {
              id: '2',
              hostName: 'Marcus Rodriguez',
              city: 'Eugene',
              state: 'OR',
              date: '2024-03-17',
              arrivalTime: '15:00',
              venueType: 'Backyard',
              capacity: 30,
              drivingDistance: 110,
              drivingTime: 2.0,
              isRestDay: false,
              guaranteedAmount: 275,
              hostImage: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
            },
            {
              id: 'rest-1',
              hostName: '',
              city: 'Medford',
              state: 'OR',
              date: '2024-03-18',
              arrivalTime: '',
              venueType: '',
              capacity: 0,
              drivingDistance: 180,
              drivingTime: 3.0,
              isRestDay: true,
              guaranteedAmount: 0,
              hostImage: ''
            },
            {
              id: '3',
              hostName: 'Emma Thompson',
              city: 'Redding',
              state: 'CA',
              date: '2024-03-19',
              arrivalTime: '15:30',
              venueType: 'Music Room',
              capacity: 20,
              drivingDistance: 150,
              drivingTime: 2.5,
              isRestDay: false,
              guaranteedAmount: 225,
              hostImage: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
            },
            {
              id: '4',
              hostName: 'David Kim',
              city: 'Sacramento',
              state: 'CA',
              date: '2024-03-21',
              arrivalTime: '14:00',
              venueType: 'Garage',
              capacity: 35,
              drivingDistance: 160,
              drivingTime: 2.8,
              isRestDay: false,
              guaranteedAmount: 300,
              hostImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
            },
            {
              id: '5',
              hostName: 'Lisa Park',
              city: 'San Francisco',
              state: 'CA',
              date: '2024-03-23',
              arrivalTime: '13:45',
              venueType: 'Living Room',
              capacity: 18,
              drivingDistance: 90,
              drivingTime: 1.5,
              isRestDay: false,
              guaranteedAmount: 275,
              hostImage: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
            }
          ],
          totalDistance: 690,
          totalDrivingTime: 11.8,
          totalShows: 5,
          restDays: 1,
          projectedRevenue: 1325,
          feasible: true,
          violations: []
        })
      }, 1500)
    }
  }, [tour])

  const handleApproveTour = async () => {
    if (!tourPlan || !tourId) return

    setIsApproving(true)
    try {
      await updateTourMutation.mutateAsync({
        tourId,
        updates: {
          status: 'confirmed',
          confirmed_shows: tourPlan.totalShows,
          total_projected_revenue: tourPlan.projectedRevenue
        }
      })

      toast.success('Tour approved! Host confirmations are being sent.')
      navigate('/artist/dashboard')
    } catch (error) {
      console.error('Error approving tour:', error)
      toast.error('Failed to approve tour. Please try again.')
    } finally {
      setIsApproving(false)
    }
  }

  const handleRequestChanges = async () => {
    if (!tourId) return

    try {
      await updateTourMutation.mutateAsync({
        tourId,
        updates: {
          status: 'planning',
          special_requirements: feedback
        }
      })

      toast.success('Changes requested. A new tour plan will be generated.')
      navigate('/artist/dashboard')
    } catch (error) {
      console.error('Error requesting changes:', error)
      toast.error('Failed to request changes. Please try again.')
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading tour details...</p>
        </div>
      </div>
    )
  }

  if (!tour) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <p className="text-gray-600">Tour not found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  Tour Plan Review
                </h1>
                <p className="text-sm text-gray-600">
                  {tour.title} - Review and approve your optimized tour route
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!tourPlan ? (
          <Card>
            <CardContent className="p-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Generating Your Optimal Tour Route
              </h3>
              <p className="text-gray-600 mb-4">
                Our algorithm is analyzing host responses and optimizing your tour route based on:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Geographic proximity and driving distances</li>
                <li>• Host availability and venue capacity</li>
                <li>• Maximum 300 miles per day driving constraint</li>
                <li>• Rest day scheduling (every 3rd show)</li>
                <li>• 4 PM arrival time requirement</li>
              </ul>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Tour Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Route className="h-5 w-5" />
                  Tour Overview
                </CardTitle>
                <CardDescription>
                  Optimized route for {tour.title}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{tourPlan.totalShows}</div>
                    <div className="text-sm text-gray-600">Total Shows</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{tourPlan.totalDistance}</div>
                    <div className="text-sm text-gray-600">Miles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{tourPlan.restDays}</div>
                    <div className="text-sm text-gray-600">Rest Days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">${tourPlan.projectedRevenue}</div>
                    <div className="text-sm text-gray-600">Projected Revenue</div>
                  </div>
                </div>

                {tourPlan.feasible ? (
                  <div className="mt-6 flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Tour plan meets all constraints</span>
                  </div>
                ) : (
                  <div className="mt-6">
                    <div className="flex items-center gap-2 text-red-600 mb-2">
                      <AlertTriangle className="h-5 w-5" />
                      <span className="font-medium">Tour plan has constraint violations</span>
                    </div>
                    <ul className="text-sm text-red-600 space-y-1">
                      {tourPlan.violations.map((violation, index) => (
                        <li key={index}>• {violation}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Tour Route */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Navigation className="h-5 w-5" />
                  Tour Route
                </CardTitle>
                <CardDescription>
                  Detailed itinerary with driving times and host information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tourPlan.stops.map((stop, index) => (
                    <motion.div
                      key={stop.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`border rounded-lg p-4 ${
                        stop.isRestDay 
                          ? 'bg-yellow-50 border-yellow-200' 
                          : 'bg-white border-gray-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-medium ${
                            stop.isRestDay ? 'bg-yellow-500' : 'bg-blue-600'
                          }`}>
                            {stop.isRestDay ? <Bed className="h-4 w-4" /> : index + 1}
                          </div>
                          
                          {stop.isRestDay ? (
                            <div>
                              <h4 className="font-medium text-gray-900">Rest Day</h4>
                              <p className="text-sm text-gray-600">
                                Travel to {stop.city}, {stop.state}
                              </p>
                              <p className="text-xs text-gray-500">
                                {stop.drivingDistance} miles • {stop.drivingTime.toFixed(1)} hours driving
                              </p>
                            </div>
                          ) : (
                            <div className="flex items-center space-x-4">
                              <img
                                src={stop.hostImage}
                                alt={stop.hostName}
                                className="w-12 h-12 rounded-full object-cover"
                              />
                              <div>
                                <h4 className="font-medium text-gray-900">{stop.hostName}</h4>
                                <p className="text-sm text-gray-600">
                                  {stop.city}, {stop.state} • {stop.venueType}
                                </p>
                                <div className="flex items-center space-x-4 text-xs text-gray-500">
                                  <span className="flex items-center gap-1">
                                    <Users className="h-3 w-3" />
                                    {stop.capacity} capacity
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <DollarSign className="h-3 w-3" />
                                    ${stop.guaranteedAmount} guarantee
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-900">
                            {new Date(stop.date).toLocaleDateString('en-US', {
                              weekday: 'short',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </div>
                          {!stop.isRestDay && (
                            <div className="text-sm text-gray-600">
                              Arrive by {stop.arrivalTime}
                            </div>
                          )}
                          {stop.drivingDistance > 0 && (
                            <div className="text-xs text-gray-500 mt-1">
                              {stop.drivingDistance} mi • {stop.drivingTime.toFixed(1)}h drive
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Feedback Section */}
            <Card>
              <CardHeader>
                <CardTitle>Feedback & Changes</CardTitle>
                <CardDescription>
                  Request modifications to the tour plan if needed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Any specific changes you'd like to request? (e.g., different dates, venues, routing preferences)"
                />
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handleRequestChanges}
                disabled={isApproving}
              >
                <Edit className="h-4 w-4 mr-2" />
                Request Changes
              </Button>

              <Button
                onClick={handleApproveTour}
                disabled={isApproving || !tourPlan.feasible}
                className="bg-green-600 hover:bg-green-700"
              >
                {isApproving ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Approving...
                  </>
                ) : (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Approve Tour & Send Confirmations
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TourPlanReview
