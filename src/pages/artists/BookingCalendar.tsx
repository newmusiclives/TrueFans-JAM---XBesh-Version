import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight, ArrowLeft, Plus, Edit, Trash2 } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const BookingCalendar: React.FC = () => {
  const navigate = useNavigate()
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'list'>('month')

  const bookings = [
    {
      id: 1,
      date: "2024-12-15",
      time: "7:00 PM",
      venue: "The Cozy Living Room",
      host: "Sarah Martinez",
      location: "Portland, OR",
      status: "confirmed",
      attendees: 25,
      fee: "$250"
    },
    {
      id: 2,
      date: "2024-12-20",
      time: "8:00 PM",
      venue: "Garden Studio Space",
      host: "Michael Chen",
      location: "Seattle, WA",
      status: "pending",
      attendees: 30,
      fee: "$300"
    },
    {
      id: 3,
      date: "2024-12-28",
      time: "7:30 PM",
      venue: "Downtown Loft",
      host: "Emma Thompson",
      location: "San Francisco, CA",
      status: "confirmed",
      attendees: 35,
      fee: "$275"
    },
    {
      id: 4,
      date: "2025-01-05",
      time: "8:00 PM",
      venue: "Acoustic Haven",
      host: "David Kim",
      location: "Austin, TX",
      status: "pending",
      attendees: 28,
      fee: "$225"
    }
  ]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }
    
    return days
  }

  const getBookingsForDate = (date: Date) => {
    const dateString = date.toISOString().split('T')[0]
    return bookings.filter(booking => booking.date === dateString)
  }

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const handleDateClick = (date: Date) => {
    setSelectedDate(date)
    const bookingsForDate = getBookingsForDate(date)
    if (bookingsForDate.length > 0) {
      toast.info(`${bookingsForDate.length} booking(s) on ${date.toLocaleDateString()}`)
    }
  }

  const handleBackToDashboard = () => {
    navigate('/artist-dashboard')
    window.scrollTo(0, 0)
  }

  const handleAddBooking = () => {
    toast.success('Opening booking form...')
  }

  const handleEditBooking = (booking: any) => {
    toast.info(`Editing booking at ${booking.venue}`)
  }

  const handleCancelBooking = (booking: any) => {
    toast.error(`Booking at ${booking.venue} cancelled`)
  }

  const handleViewBookingDetails = (booking: any) => {
    toast.info(`Opening details for ${booking.venue}`)
  }

  const handleExportCalendar = () => {
    toast.success('Calendar exported to your downloads')
  }

  const handleSyncCalendar = () => {
    toast.success('Calendar synced with Google Calendar')
  }

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                onClick={handleBackToDashboard}
                className="mr-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-xl font-display font-bold text-gray-900">Booking Calendar</h1>
                <p className="text-sm text-gray-600">Manage your performance schedule</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleExportCalendar}>
                Export
              </Button>
              <Button variant="outline" size="sm" onClick={handleSyncCalendar}>
                Sync
              </Button>
              <Button size="sm" onClick={handleAddBooking}>
                <Plus className="h-4 w-4 mr-2" />
                Add Booking
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* View Mode Toggle */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'month' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('month')}
            >
              Month
            </Button>
            <Button
              variant={viewMode === 'week' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('week')}
            >
              Week
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              List
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={handlePreviousMonth}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleNextMonth}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {viewMode === 'month' && (
                  <div className="grid grid-cols-7 gap-1">
                    {dayNames.map(day => (
                      <div key={day} className="p-2 text-center text-sm font-medium text-gray-600">
                        {day}
                      </div>
                    ))}
                    {getDaysInMonth(currentDate).map((date, index) => {
                      if (!date) {
                        return <div key={index} className="p-2 h-20" />
                      }
                      
                      const dayBookings = getBookingsForDate(date)
                      const isToday = date.toDateString() === new Date().toDateString()
                      const isSelected = selectedDate?.toDateString() === date.toDateString()
                      
                      return (
                        <motion.div
                          key={date.toISOString()}
                          whileHover={{ scale: 1.02 }}
                          className={`p-2 h-20 border rounded-lg cursor-pointer transition-colors ${
                            isToday ? 'bg-primary-100 border-primary-300' :
                            isSelected ? 'bg-blue-100 border-blue-300' :
                            dayBookings.length > 0 ? 'bg-green-50 border-green-200' :
                            'bg-white border-gray-200 hover:bg-gray-50'
                          }`}
                          onClick={() => handleDateClick(date)}
                        >
                          <div className="text-sm font-medium text-gray-900">
                            {date.getDate()}
                          </div>
                          <div className="mt-1 space-y-1">
                            {dayBookings.slice(0, 2).map(booking => (
                              <div
                                key={booking.id}
                                className={`text-xs px-1 py-0.5 rounded truncate ${getStatusColor(booking.status)}`}
                              >
                                {booking.time}
                              </div>
                            ))}
                            {dayBookings.length > 2 && (
                              <div className="text-xs text-gray-500">
                                +{dayBookings.length - 2} more
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                )}

                {viewMode === 'list' && (
                  <div className="space-y-4">
                    {bookings.map((booking, index) => (
                      <motion.div
                        key={booking.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <h4 className="font-medium text-gray-900">{booking.venue}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                              {booking.status}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(booking.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {booking.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {booking.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {booking.attendees}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-green-600">{booking.fee}</span>
                          <Button size="sm" variant="outline" onClick={() => handleViewBookingDetails(booking)}>
                            View
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleEditBooking(booking)}>
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleCancelBooking(booking)}>
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Selected Date Details */}
            {selectedDate && (
              <Card>
                <CardHeader>
                  <CardTitle>
                    {selectedDate.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {getBookingsForDate(selectedDate).length > 0 ? (
                    <div className="space-y-3">
                      {getBookingsForDate(selectedDate).map(booking => (
                        <div key={booking.id} className="p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-gray-900">{booking.venue}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                              {booking.status}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600 space-y-1">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {booking.time}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {booking.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {booking.attendees} attendees
                            </div>
                          </div>
                          <div className="mt-2 flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => handleViewBookingDetails(booking)}>
                              Details
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleEditBooking(booking)}>
                              Edit
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-gray-600 mb-3">No bookings on this date</p>
                      <Button size="sm" onClick={handleAddBooking}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Booking
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>This Month</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Shows</span>
                    <span className="font-medium">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Confirmed</span>
                    <span className="font-medium text-green-600">2</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Pending</span>
                    <span className="font-medium text-yellow-600">1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Expected Revenue</span>
                    <span className="font-medium text-green-600">$825</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button fullWidth variant="outline" onClick={handleAddBooking}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Booking
                </Button>
                <Button fullWidth variant="outline" onClick={() => navigate('/artist/find-venues')}>
                  <MapPin className="h-4 w-4 mr-2" />
                  Find Venues
                </Button>
                <Button fullWidth variant="outline" onClick={handleExportCalendar}>
                  Export Calendar
                </Button>
                <Button fullWidth variant="outline" onClick={handleSyncCalendar}>
                  Sync with Google
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingCalendar
