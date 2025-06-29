import React from 'react'
import { Calendar, MapPin, Users, Plus } from 'lucide-react'
import { Button } from './ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card'

const TourManagementModule: React.FC = () => {
  const tours = [
    {
      id: 1,
      name: 'Acoustic Sessions Tour',
      dates: '15 shows',
      locations: 'West Coast',
      status: 'Active',
      nextShow: 'Dec 15, 2024'
    },
    {
      id: 2,
      name: 'House Concert Series',
      dates: '8 shows',
      locations: 'Pacific Northwest',
      status: 'Planning',
      nextShow: 'Jan 20, 2025'
    }
  ]

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tour Management</h1>
          <p className="text-gray-600 mt-2">Manage your tours and intimate performances</p>
        </div>
        <Button>
          <Plus className="h-4 w-4" />
          New Tour
        </Button>
      </div>

      <div className="grid gap-6">
        {tours.map((tour) => (
          <Card key={tour.id} hover>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{tour.name}</CardTitle>
                  <CardDescription>Next show: {tour.nextShow}</CardDescription>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  tour.status === 'Active' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {tour.status}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{tour.dates}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{tour.locations}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>Intimate venues</span>
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <Button variant="outline" size="sm">View Details</Button>
                <Button size="sm">Manage</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default TourManagementModule
