import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card'
import { 
  ArrowLeft, 
  Camera, 
  Music, 
  MapPin, 
  Calendar, 
  Star, 
  Save,
  Upload,
  Plus,
  Trash2,
  Edit
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const ArtistProfile: React.FC = () => {
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    displayName: 'Alex Rivers',
    bio: 'Indie folk singer-songwriter with a passion for intimate acoustic performances. I create music that tells stories and connects hearts.',
    location: 'Portland, OR',
    genres: ['Indie Folk', 'Acoustic', 'Singer-Songwriter'],
    experience: '5+ years',
    instruments: ['Guitar', 'Piano', 'Harmonica'],
    website: 'www.alexriversmusic.com',
    socialMedia: {
      instagram: '@alexriversmusic',
      spotify: 'Alex Rivers',
      youtube: 'Alex Rivers Music'
    }
  })

  const [photos, setPhotos] = useState([
    'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
    'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
    'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
  ])

  const [musicSamples, setMusicSamples] = useState([
    { title: 'Midnight Highway', duration: '3:42', plays: 1247 },
    { title: 'Coffee Shop Dreams', duration: '4:15', plays: 892 },
    { title: 'River Song', duration: '3:28', plays: 1534 }
  ])

  const handleSaveProfile = () => {
    setIsEditing(false)
    toast.success('Profile updated successfully!')
  }

  const handleUploadPhoto = () => {
    toast.success('Photo upload feature coming soon!')
  }

  const handleUploadMusic = () => {
    toast.success('Music upload feature coming soon!')
  }

  const handleDeletePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index))
    toast.success('Photo removed')
  }

  const handleDeleteMusic = (index: number) => {
    setMusicSamples(musicSamples.filter((_, i) => i !== index))
    toast.success('Music sample removed')
  }

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
                onClick={() => navigate('/artist-dashboard')}
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-xl font-display font-bold text-gray-900">
                  Artist Profile
                </h1>
                <p className="text-sm text-gray-600">
                  Manage your artist information and media
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {isEditing ? (
                <>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleSaveProfile}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </>
              ) : (
                <Button onClick={() => setIsEditing(true)}>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex items-start space-x-6">
              <div className="relative">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                  <Music className="h-12 w-12 text-gray-400" />
                </div>
                {isEditing && (
                  <button
                    onClick={handleUploadPhoto}
                    className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
                  >
                    <Camera className="h-4 w-4" />
                  </button>
                )}
              </div>
              <div className="flex-1">
                {isEditing ? (
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={profileData.displayName}
                      onChange={(e) => setProfileData({...profileData, displayName: e.target.value})}
                      className="text-2xl font-bold bg-transparent border-b border-gray-300 focus:border-blue-500 outline-none"
                    />
                    <textarea
                      value={profileData.bio}
                      onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                      rows={3}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                ) : (
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">{profileData.displayName}</h1>
                    <p className="text-gray-600 mb-4">{profileData.bio}</p>
                  </div>
                )}
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {profileData.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {profileData.experience}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    4.8 rating
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Your core artist details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.location}
                    onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900">{profileData.location}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Genres
                </label>
                <div className="flex flex-wrap gap-2">
                  {profileData.genres.map((genre, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Instruments
                </label>
                <div className="flex flex-wrap gap-2">
                  {profileData.instruments.map((instrument, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                    >
                      {instrument}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                {isEditing ? (
                  <input
                    type="url"
                    value={profileData.website}
                    onChange={(e) => setProfileData({...profileData, website: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <a href={`https://${profileData.website}`} className="text-blue-600 hover:underline">
                    {profileData.website}
                  </a>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card>
            <CardHeader>
              <CardTitle>Social Media</CardTitle>
              <CardDescription>Connect your social profiles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Instagram
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.socialMedia.instagram}
                    onChange={(e) => setProfileData({
                      ...profileData, 
                      socialMedia: {...profileData.socialMedia, instagram: e.target.value}
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900">{profileData.socialMedia.instagram}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Spotify
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.socialMedia.spotify}
                    onChange={(e) => setProfileData({
                      ...profileData, 
                      socialMedia: {...profileData.socialMedia, spotify: e.target.value}
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900">{profileData.socialMedia.spotify}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  YouTube
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.socialMedia.youtube}
                    onChange={(e) => setProfileData({
                      ...profileData, 
                      socialMedia: {...profileData.socialMedia, youtube: e.target.value}
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900">{profileData.socialMedia.youtube}</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Photos */}
        <Card className="mt-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Photos</CardTitle>
                <CardDescription>Showcase your performances and style</CardDescription>
              </div>
              <Button onClick={handleUploadPhoto}>
                <Upload className="h-4 w-4 mr-2" />
                Upload Photo
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {photos.map((photo, index) => (
                <div key={index} className="relative group">
                  <img
                    src={photo}
                    alt={`Performance ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  {isEditing && (
                    <button
                      onClick={() => handleDeletePhoto(index)}
                      className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
              ))}
              <div className="border-2 border-dashed border-gray-300 rounded-lg h-48 flex items-center justify-center cursor-pointer hover:border-gray-400 transition-colors">
                <div className="text-center">
                  <Plus className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Add Photo</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Music Samples */}
        <Card className="mt-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Music Samples</CardTitle>
                <CardDescription>Let hosts hear your music</CardDescription>
              </div>
              <Button onClick={handleUploadMusic}>
                <Upload className="h-4 w-4 mr-2" />
                Upload Music
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {musicSamples.map((sample, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 text-white p-2 rounded-lg">
                      <Music className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{sample.title}</h4>
                      <p className="text-sm text-gray-600">{sample.duration} • {sample.plays} plays</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline">
                      Play
                    </Button>
                    {isEditing && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDeleteMusic(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ArtistProfile
