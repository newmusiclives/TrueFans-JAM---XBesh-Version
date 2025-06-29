import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card'
import { 
  ArrowLeft, 
  Upload, 
  Music, 
  Play, 
  Pause, 
  Trash2, 
  Edit,
  Plus,
  Volume2,
  Download,
  Share2,
  BarChart3
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const MusicUpload: React.FC = () => {
  const navigate = useNavigate()
  const [isUploading, setIsUploading] = useState(false)
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null)

  const [musicTracks, setMusicTracks] = useState([
    {
      id: 1,
      title: 'Midnight Highway',
      duration: '3:42',
      fileSize: '8.2 MB',
      uploadDate: '2024-01-15',
      plays: 1247,
      downloads: 89,
      genre: 'Indie Folk',
      status: 'published'
    },
    {
      id: 2,
      title: 'Coffee Shop Dreams',
      duration: '4:15',
      fileSize: '9.8 MB',
      uploadDate: '2024-01-10',
      plays: 892,
      downloads: 67,
      genre: 'Acoustic',
      status: 'published'
    },
    {
      id: 3,
      title: 'River Song',
      duration: '3:28',
      fileSize: '7.9 MB',
      uploadDate: '2024-01-05',
      plays: 1534,
      downloads: 123,
      genre: 'Singer-Songwriter',
      status: 'published'
    },
    {
      id: 4,
      title: 'Urban Lullaby',
      duration: '4:02',
      fileSize: '9.1 MB',
      uploadDate: '2024-01-01',
      plays: 0,
      downloads: 0,
      genre: 'Indie Folk',
      status: 'draft'
    }
  ])

  const handleFileUpload = () => {
    setIsUploading(true)
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false)
      toast.success('Music uploaded successfully!')
      // Add new track to the list
      const newTrack = {
        id: musicTracks.length + 1,
        title: 'New Song',
        duration: '3:30',
        fileSize: '8.0 MB',
        uploadDate: new Date().toISOString().split('T')[0],
        plays: 0,
        downloads: 0,
        genre: 'Acoustic',
        status: 'draft'
      }
      setMusicTracks([newTrack, ...musicTracks])
    }, 2000)
  }

  const handlePlayPause = (trackId: number) => {
    if (currentlyPlaying === trackId) {
      setCurrentlyPlaying(null)
      toast.info('Playback paused')
    } else {
      setCurrentlyPlaying(trackId)
      toast.info('Playing track...')
    }
  }

  const handleDeleteTrack = (trackId: number) => {
    setMusicTracks(musicTracks.filter(track => track.id !== trackId))
    toast.success('Track deleted successfully')
  }

  const handleEditTrack = (trackId: number) => {
    toast.info('Opening track editor...')
  }

  const handlePublishTrack = (trackId: number) => {
    setMusicTracks(musicTracks.map(track => 
      track.id === trackId ? { ...track, status: 'published' } : track
    ))
    toast.success('Track published successfully!')
  }

  const handleShareTrack = (trackId: number) => {
    toast.success('Share link copied to clipboard!')
  }

  const handleDownloadTrack = (trackId: number) => {
    toast.success('Download started...')
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800'
      case 'draft':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const totalPlays = musicTracks.reduce((sum, track) => sum + track.plays, 0)
  const totalDownloads = musicTracks.reduce((sum, track) => sum + track.downloads, 0)
  const publishedTracks = musicTracks.filter(track => track.status === 'published').length

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
                  Music Library
                </h1>
                <p className="text-sm text-gray-600">
                  Upload and manage your music tracks
                </p>
              </div>
            </div>
            <Button onClick={handleFileUpload} disabled={isUploading}>
              {isUploading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Music
                </>
              )}
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Tracks</p>
                  <p className="text-2xl font-bold text-gray-900">{musicTracks.length}</p>
                </div>
                <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                  <Music className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Published</p>
                  <p className="text-2xl font-bold text-gray-900">{publishedTracks}</p>
                </div>
                <div className="bg-green-100 text-green-600 p-3 rounded-lg">
                  <Volume2 className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Plays</p>
                  <p className="text-2xl font-bold text-gray-900">{totalPlays.toLocaleString()}</p>
                </div>
                <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                  <Play className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Downloads</p>
                  <p className="text-2xl font-bold text-gray-900">{totalDownloads}</p>
                </div>
                <div className="bg-orange-100 text-orange-600 p-3 rounded-lg">
                  <Download className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upload Area */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Upload New Music</CardTitle>
            <CardDescription>
              Upload your music tracks to share with potential hosts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Drop your music files here
              </h3>
              <p className="text-gray-600 mb-4">
                Supported formats: MP3, WAV, FLAC (Max 50MB per file)
              </p>
              <Button onClick={handleFileUpload} disabled={isUploading}>
                {isUploading ? 'Uploading...' : 'Choose Files'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Music Library */}
        <Card>
          <CardHeader>
            <CardTitle>Your Music Library</CardTitle>
            <CardDescription>
              Manage your uploaded tracks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {musicTracks.map((track, index) => (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handlePlayPause(track.id)}
                      className="w-10 h-10 p-0"
                    >
                      {currentlyPlaying === track.id ? (
                        <Pause className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                    </Button>
                    
                    <div className="bg-blue-600 text-white p-2 rounded-lg">
                      <Music className="h-4 w-4" />
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900">{track.title}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{track.duration}</span>
                        <span>{track.fileSize}</span>
                        <span>{track.genre}</span>
                        <span>Uploaded {track.uploadDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-right text-sm">
                      <div className="text-gray-900 font-medium">{track.plays} plays</div>
                      <div className="text-gray-600">{track.downloads} downloads</div>
                    </div>
                    
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(track.status)}`}>
                      {track.status}
                    </span>

                    <div className="flex items-center space-x-2">
                      {track.status === 'draft' && (
                        <Button 
                          size="sm" 
                          onClick={() => handlePublishTrack(track.id)}
                        >
                          Publish
                        </Button>
                      )}
                      
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleShareTrack(track.id)}
                      >
                        <Share2 className="h-3 w-3" />
                      </Button>
                      
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDownloadTrack(track.id)}
                      >
                        <Download className="h-3 w-3" />
                      </Button>
                      
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleEditTrack(track.id)}
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                      
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDeleteTrack(track.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {musicTracks.length === 0 && (
              <div className="text-center py-12">
                <Music className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No music uploaded yet
                </h3>
                <p className="text-gray-600 mb-4">
                  Upload your first track to get started
                </p>
                <Button onClick={handleFileUpload}>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Music
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default MusicUpload
