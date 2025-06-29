import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card'
import { 
  ArrowLeft, 
  MapPin, 
  Search, 
  Filter, 
  Star, 
  Users, 
  Calendar, 
  DollarSign,
  Heart,
  Send,
  Eye,
  Music,
  Home,
  Coffee,
  Building
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const FindVenues: React.FC = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [priceRange, setPriceRange] = useState('all')

  const venues = [
    {
      id: 1,
      name: 'The Cozy Living Room',
      host: 'Sarah Martinez',
      location: 'Portland, OR',
      type: 'Living Room',
      capacity: 25,
      priceRange: '$200-300',
      rating: 4.9,
      reviews: 24,
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'Intimate acoustic setting with excellent sound quality and warm atmosphere.',
      amenities: ['Piano', 'Sound System', 'Parking', 'Refreshments'],
      nextAvailable: '2024-02-15',
      distance: '2.3 miles'
    },
    {
      id: 2,
      name: 'Garden Studio Space',
      host: 'Michael Chen',
      location: 'Seattle, WA',
      type: 'Studio',
      capacity: 30,
      priceRange: '$300-400',
      rating: 4.8,
      reviews: 18,
      image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'Professional studio with natural lighting and garden views.',
      amenities: ['Recording Equipment', 'Instruments', 'Green Room', 'Catering'],
      nextAvailable: '2024-02-20',
      distance: '45 miles'
    },
    {
      id: 3,
      name: 'Downtown Loft',
      host: 'Emma Thompson',
      location: 'San Francisco, CA',
      type: 'Loft',
      capacity: 35,
      priceRange: '$400-500',
      rating: 4.7,
      reviews: 31,
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'Modern loft space in the heart of downtown with city views.',
      amenities: ['City Views', 'Bar Setup', 'Lighting', 'Valet Parking'],
      nextAvailable: '2024-02-25',
      distance: '120 miles'
    },
    {
      id: 4,
      name: 'Acoustic Haven',
      host: 'David Kim',
      location: 'Austin, TX',
      type: 'Music Room',
      capacity: 28,
      priceRange: '$250-350',
      rating: 4.9,
      reviews: 22,
      image: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'Dedicated music room with perfect acoustics and vintage instruments.',
      amenities: ['Vintage Guitars', 'Amplifiers', 'Microphones', 'Seating'],
      nextAvailable: '2024-03-01',
      distance: '280 miles'
    },
    {
      id: 5,
      name: 'Rooftop Sessions',
      host: 'Lisa Park',
      location: 'Eugene, OR',
      type: 'Rooftop',
      capacity: 40,
      priceRange: '$350-450',
      rating: 4.6,
      reviews: 15,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'Beautiful rooftop space perfect for sunset concerts.',
      amenities: ['Outdoor Setup', 'Weather Protection', 'Bar', 'City Views'],
      nextAvailable: '2024-03-05',
      distance: '95 miles'
    },
    {
      id: 6,
      name: 'Coffee House Corner',
      host: 'Robert Wilson',
      location: 'Bend, OR',
      type: 'Cafe',
      capacity: 20,
      priceRange: '$150-250',
      rating: 4.8,
      reviews: 28,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'Cozy coffee house with regular music nights and loyal audience.',
      amenities: ['Coffee Bar', 'Stage Area', 'Regular Audience', 'Merchandise Table'],
      nextAvailable: '2024-02-18',
      distance: '65 miles'
    }
  ]

  const handleSearch = () => {
    toast.info(`Searching for venues: "${searchQuery}"`)
  }

  const handleContactHost = (venue: any) => {
    toast.success(`Message sent to ${venue.host}!`)
  }

  const handleSaveVenue = (venue: any) => {
    toast.success(`${venue.name} saved to favorites!`)
  }

  const handleViewDetails = (venue: any) => {
    toast.info(`Opening details for ${venue.name}`)
  }

  const handleRequestBooking = (venue: any) => {
    toast.success(`Booking request sent to ${venue.name}!`)
  }

  const getVenueIcon = (type: string) => {
    switch (type) {
      case 'Living Room':
        return <Home className="h-4 w-4" />
      case 'Studio':
        return <Music className="h-4 w-4" />
      case 'Cafe':
        return <Coffee className="h-4 w-4" />
      default:
        return <Building className="h-4 w-4" />
    }
  }

  const filteredVenues = venues.filter(venue => {
    const matchesSearch = venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         venue.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         venue.host.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesLocation = selectedLocation === 'all' || venue.location.includes(selectedLocation)
    const matchesType = selectedType === 'all' || venue.type === selectedType
    
    return matchesSearch && matchesLocation && matchesType
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
                onClick={() => navigate('/artist/dashboard')}
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-xl font-display font-bold text-gray-900">
                  Find Venues
                </h1>
                <p className="text-sm text-gray-600">
                  Discover amazing spaces to perform
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search venues, hosts, or locations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <select 
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Locations</option>
                <option value="OR">Oregon</option>
                <option value="WA">Washington</option>
                <option value="CA">California</option>
                <option value="TX">Texas</option>
              </select>

              <select 
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="Living Room">Living Room</option>
                <option value="Studio">Studio</option>
                <option value="Loft">Loft</option>
                <option value="Music Room">Music Room</option>
                <option value="Rooftop">Rooftop</option>
                <option value="Cafe">Cafe</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900">
            {filteredVenues.length} venues found
          </h2>
          <p className="text-sm text-gray-600">
            Perfect spaces for your next performance
          </p>
        </div>

        {/* Venue Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVenues.map((venue, index) => (
            <motion.div
              key={venue.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-48 object-cover"
                  />
                  <button
                    onClick={() => handleSaveVenue(venue)}
                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                  >
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-900">
                      {venue.priceRange}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900">{venue.name}</h3>
                      <p className="text-sm text-gray-600">Hosted by {venue.host}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{venue.rating}</span>
                      <span className="text-sm text-gray-500">({venue.reviews})</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {venue.location}
                    </div>
                    <div className="flex items-center gap-1">
                      {getVenueIcon(venue.type)}
                      {venue.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {venue.capacity}
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 mb-3">{venue.description}</p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {venue.amenities.slice(0, 3).map((amenity, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {amenity}
                      </span>
                    ))}
                    {venue.amenities.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        +{venue.amenities.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>Next available: {venue.nextAvailable}</span>
                    <span>{venue.distance} away</span>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      fullWidth
                      onClick={() => handleRequestBooking(venue)}
                    >
                      Request Booking
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleContactHost(venue)}
                    >
                      <Send className="h-3 w-3" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleViewDetails(venue)}
                    >
                      <Eye className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredVenues.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No venues found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or location filters
            </p>
            <Button onClick={() => {
              setSearchQuery('')
              setSelectedLocation('all')
              setSelectedType('all')
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default FindVenues
