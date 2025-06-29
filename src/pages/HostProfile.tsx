import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { Input } from '../components/ui/Input'
import { Home, Star, MapPin, Calendar, Users, Upload, Save, Wifi, Car, Music } from 'lucide-react'

const HostProfile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Home className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-display font-bold text-gray-900">Host Profile</h1>
                <p className="text-sm text-gray-600">Manage your venue information and hosting preferences</p>
              </div>
            </div>
            
            <Button>
              <Save className="h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Profile Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Your public host profile information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input label="Display Name" placeholder="Your display name" defaultValue="Sarah's Music Haven" />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Host Type</label>
                    <select className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
                      <option selected>Individual</option>
                      <option>Business</option>
                      <option>Venue</option>
                      <option>Organization</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                  <textarea
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    rows={4}
                    placeholder="Tell artists about yourself and your space..."
                    defaultValue="Music lover and community builder hosting intimate concerts in my cozy living room. I believe in the power of live music to bring people together and create lasting memories."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input label="Hosting Since" type="date" defaultValue="2022-03-15" />
                  <Input label="Venue Name (Optional)" placeholder="Optional venue name" defaultValue="The Living Room Sessions" />
                </div>
              </CardContent>
            </Card>

            {/* Location & Address */}
            <Card>
              <CardHeader>
                <CardTitle>Location & Address</CardTitle>
                <CardDescription>Your venue location (exact address kept private until booking)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input label="Address Line 1" placeholder="123 Main Street" defaultValue="456 Oak Avenue" />
                <Input label="Address Line 2 (Optional)" placeholder="Apartment, suite, etc." />
                
                <div className="grid md:grid-cols-3 gap-4">
                  <Input label="City" placeholder="City" defaultValue="Portland" />
                  <Input label="State" placeholder="State" defaultValue="OR" />
                  <Input label="ZIP Code" placeholder="ZIP" defaultValue="97205" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location Privacy</label>
                  <select className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
                    <option>Exact address (shown after booking)</option>
                    <option selected>Approximate location (neighborhood)</option>
                    <option>City only</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Venue Details */}
            <Card>
              <CardHeader>
                <CardTitle>Venue Details</CardTitle>
                <CardDescription>Describe your performance space</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Venue Type</label>
                    <select className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
                      <option selected>Living Room</option>
                      <option>Backyard</option>
                      <option>Basement</option>
                      <option>Garage</option>
                      <option>Studio</option>
                      <option>Barn</option>
                      <option>Rooftop</option>
                      <option>Patio</option>
                      <option>Music Room</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Stage Setup</label>
                    <select className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
                      <option selected>Corner</option>
                      <option>Center</option>
                      <option>Wall</option>
                      <option>Outdoor</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input label="Maximum Capacity" type="number" defaultValue="25" />
                  <Input label="Preferred Capacity" type="number" defaultValue="20" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Venue Description</label>
                  <textarea
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    rows={3}
                    placeholder="Describe your space, atmosphere, and what makes it special..."
                    defaultValue="Cozy living room with excellent acoustics, comfortable seating for 20, and a warm, intimate atmosphere perfect for acoustic performances."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Venue Amenities</label>
                  <div className="grid md:grid-cols-2 gap-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">Comfortable seating</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">Restroom access</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">Parking available</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                      <span className="ml-2 text-sm text-gray-700">Kitchen access</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">WiFi available</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                      <span className="ml-2 text-sm text-gray-700">Recording friendly</span>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Specifications */}
            <Card>
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
                <CardDescription>Equipment and technical capabilities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Sound System</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="sound_system" className="text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">Not available</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="sound_system" className="text-primary-600 focus:ring-primary-500" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700">Basic system available</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="sound_system" className="text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">Professional system</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Lighting</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="lighting" className="text-primary-600 focus:ring-primary-500" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700">Ambient lighting only</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="lighting" className="text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">Stage lighting available</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="lighting" className="text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">Professional lighting</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input label="Power Outlets Available" type="number" defaultValue="4" />
                  <Input label="Maximum Volume Level (1-10)" type="number" min="1" max="10" defaultValue="7" />
                </div>
              </CardContent>
            </Card>

            {/* House Rules & Preferences */}
            <Card>
              <CardHeader>
                <CardTitle>House Rules & Preferences</CardTitle>
                <CardDescription>Set your hosting preferences and policies</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Preferred Genres</label>
                  <div className="grid md:grid-cols-3 gap-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">Acoustic</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">Folk</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                      <span className="ml-2 text-sm text-gray-700">Jazz</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">Indie</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                      <span className="ml-2 text-sm text-gray-700">Classical</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                      <span className="ml-2 text-sm text-gray-700">World Music</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">House Policies</label>
                  <div className="grid md:grid-cols-2 gap-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">Alcohol allowed</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                      <span className="ml-2 text-sm text-gray-700">Smoking allowed</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                      <span className="ml-2 text-sm text-gray-700">Food provided</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">Children welcome</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                      <span className="ml-2 text-sm text-gray-700">Pets allowed</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                      <span className="ml-2 text-sm text-gray-700">Overnight accommodation</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional House Rules</label>
                  <textarea
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    rows={3}
                    placeholder="Any additional rules or guidelines for guests..."
                    defaultValue="Please remove shoes at the door. Quiet hours after 10 PM. Feel free to bring a friend!"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Preview</CardTitle>
                <CardDescription>How your profile appears to artists</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                      alt="Profile"
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                    <Button size="sm" variant="outline" className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Upload className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900">Sarah's Music Haven</h3>
                    <p className="text-sm text-gray-600">Living Room • Portland, OR</p>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">4.9 (89 reviews)</span>
                  </div>
                  
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex items-center justify-center gap-1">
                      <Home className="h-3 w-3" />
                      <span>18 shows hosted</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>Capacity: 20 guests</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Venue Photos */}
            <Card>
              <CardHeader>
                <CardTitle>Venue Photos</CardTitle>
                <CardDescription>Upload photos of your space</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <img
                    src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop"
                    alt="Venue"
                    className="w-full h-20 object-cover rounded-lg"
                  />
                  <img
                    src="https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop"
                    alt="Venue"
                    className="w-full h-20 object-cover rounded-lg"
                  />
                </div>
                <Button variant="outline" size="sm" fullWidth>
                  <Upload className="h-4 w-4" />
                  Add More Photos
                </Button>
              </CardContent>
            </Card>

            {/* Hosting Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Hosting Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Shows Hosted</span>
                  <span className="font-medium">18</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Revenue Generated</span>
                  <span className="font-medium text-green-600">$1,680</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Average Rating</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="font-medium">4.9</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Response Rate</span>
                  <span className="font-medium">100%</span>
                </div>
              </CardContent>
            </Card>

            {/* Verification Status */}
            <Card>
              <CardHeader>
                <CardTitle>Verification Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Identity Verified</span>
                  <span className="text-green-600 text-sm font-medium">✓ Verified</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Address Verified</span>
                  <span className="text-green-600 text-sm font-medium">✓ Verified</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Background Check</span>
                  <span className="text-gray-400 text-sm">Optional</span>
                </div>
                
                <Button variant="outline" size="sm" fullWidth className="mt-4">
                  Enhance Verification
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" size="sm" fullWidth>
                  <Music className="h-4 w-4" />
                  Browse Artists
                </Button>
                <Button variant="outline" size="sm" fullWidth>
                  <Calendar className="h-4 w-4" />
                  Manage Calendar
                </Button>
                <Button variant="outline" size="sm" fullWidth>
                  <Users className="h-4 w-4" />
                  View Bookings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostProfile
