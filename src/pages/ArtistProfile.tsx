import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { Input } from '../components/ui/Input'
import { Music, Star, MapPin, Calendar, Users, ExternalLink, Upload, Save } from 'lucide-react'

const ArtistProfile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Music className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-display font-bold text-gray-900">Artist Profile</h1>
                <p className="text-sm text-gray-600">Manage your artist information and settings</p>
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
                <CardDescription>Your public artist profile information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input label="Stage Name" placeholder="Your stage name" defaultValue="Luna Rivers" />
                  <Input label="Legal Name" placeholder="Your legal name" defaultValue="Luna Marie Rivers" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                  <textarea
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    rows={4}
                    placeholder="Tell your story..."
                    defaultValue="Indie folk artist from Portland, blending acoustic melodies with heartfelt storytelling. Known for intimate performances that create deep connections with audiences."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Primary Genre</label>
                    <select className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
                      <option>Indie Folk</option>
                      <option>Acoustic</option>
                      <option>Singer-Songwriter</option>
                      <option>Alternative</option>
                      <option>Pop</option>
                      <option>Rock</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                    <select className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option selected>Experienced</option>
                      <option>Professional</option>
                    </select>
                  </div>
                </div>

                <Input label="Website URL" placeholder="https://your-website.com" defaultValue="https://lunarivesmusic.com" />
              </CardContent>
            </Card>

            {/* Social Media & Streaming */}
            <Card>
              <CardHeader>
                <CardTitle>Social Media & Streaming Platforms</CardTitle>
                <CardDescription>Connect your social media and streaming accounts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input label="Spotify Artist ID" placeholder="4Z8W4fKeB5YxbusRsdQVPb" />
                  <Input label="Apple Music ID" placeholder="Your Apple Music ID" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Input label="Instagram" placeholder="@yourusername" defaultValue="@lunarivesmusic" />
                  <Input label="TikTok" placeholder="@yourusername" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Input label="YouTube Channel" placeholder="Channel URL or ID" />
                  <Input label="SoundCloud" placeholder="Your SoundCloud username" />
                </div>
              </CardContent>
            </Card>

            {/* Performance Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Requirements</CardTitle>
                <CardDescription>Technical and logistical requirements for your shows</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <Input label="Setup Time (minutes)" type="number" defaultValue="30" />
                  <Input label="Performance Duration" placeholder="60-90 minutes" defaultValue="75 minutes" />
                  <Input label="Breakdown Time (minutes)" type="number" defaultValue="15" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Equipment Requirements</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                      <span className="ml-2 text-sm text-gray-700">Sound system required</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                      <span className="ml-2 text-sm text-gray-700">Lighting setup needed</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">Power outlets (2+ required)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                      <span className="ml-2 text-sm text-gray-700">Recording friendly environment</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements</label>
                  <textarea
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    rows={3}
                    placeholder="Any special requirements or notes for hosts..."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card>
              <CardHeader>
                <CardTitle>Pricing & Payments</CardTitle>
                <CardDescription>Set your performance fees and payment preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input label="Base Performance Fee" type="number" placeholder="0" defaultValue="250" />
                  <Input label="Travel Fee (per mile)" type="number" placeholder="0" defaultValue="1" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Input label="Minimum Guarantee" type="number" placeholder="0" defaultValue="150" />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Revenue Share %</label>
                    <select className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
                      <option>70%</option>
                      <option selected>80%</option>
                      <option>85%</option>
                      <option>90%</option>
                    </select>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Payment Integration</h4>
                  <p className="text-sm text-blue-700 mb-3">
                    Connect your Manifest account to receive payments automatically.
                  </p>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4" />
                    Connect Manifest Account
                  </Button>
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
                <CardDescription>How your profile appears to hosts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                      alt="Profile"
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                    <Button size="sm" variant="outline" className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Upload className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900">Luna Rivers</h3>
                    <p className="text-sm text-gray-600">Indie Folk • Portland, OR</p>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">4.9 (127 reviews)</span>
                  </div>
                  
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex items-center justify-center gap-1">
                      <Music className="h-3 w-3" />
                      <span>24 shows performed</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>1,247 followers</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Shows</span>
                  <span className="font-medium">24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Earnings</span>
                  <span className="font-medium text-green-600">$2,840</span>
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
                  <span className="font-medium">98%</span>
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
                  <span className="text-sm text-gray-600">Spotify Connected</span>
                  <span className="text-gray-400 text-sm">Not connected</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Background Check</span>
                  <span className="text-gray-400 text-sm">Pending</span>
                </div>
                
                <Button variant="outline" size="sm" fullWidth className="mt-4">
                  Complete Verification
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
                  <MapPin className="h-4 w-4" />
                  Find Venues Near Me
                </Button>
                <Button variant="outline" size="sm" fullWidth>
                  <Calendar className="h-4 w-4" />
                  View My Calendar
                </Button>
                <Button variant="outline" size="sm" fullWidth>
                  <Users className="h-4 w-4" />
                  Manage Followers
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistProfile
