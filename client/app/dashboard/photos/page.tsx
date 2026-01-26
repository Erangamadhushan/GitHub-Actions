'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, Share2, Eye, Trash2, Search } from 'lucide-react'

interface Photo {
  id: string
  title: string
  eventType: string
  eventDate: string
  photoCount: number
  thumbnail: string
  url: string
  sharedWith: string[]
}

interface PhotoGallery {
  id: string
  eventName: string
  eventType: 'wedding' | 'birthday' | 'convocation' | 'other'
  eventDate: string
  photoCount: number
  uploadDate: string
  thumbnail: string
  status: 'ready' | 'processing' | 'archived'
}

export default function MyPhotosPage() {
  const [galleries, setGalleries] = useState<PhotoGallery[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGallery, setSelectedGallery] = useState<PhotoGallery | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showPreview, setShowPreview] = useState(false)

  useEffect(() => {
    // Simulate loading photo galleries
    setTimeout(() => {
      setGalleries([
        {
          id: '1',
          eventName: "Sarah & John's Wedding",
          eventType: 'wedding',
          eventDate: '2024-06-15',
          photoCount: 287,
          uploadDate: '2024-06-20',
          thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=200&h=200&fit=crop',
          status: 'ready'
        },
        {
          id: '2',
          eventName: "Emma's 25th Birthday",
          eventType: 'birthday',
          eventDate: '2024-05-10',
          photoCount: 156,
          uploadDate: '2024-05-12',
          thumbnail: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=200&h=200&fit=crop',
          status: 'ready'
        },
        {
          id: '3',
          eventName: 'Class of 2024 Convocation',
          eventType: 'convocation',
          eventDate: '2024-04-28',
          photoCount: 412,
          uploadDate: '2024-04-30',
          thumbnail: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=200&h=200&fit=crop',
          status: 'ready'
        },
        {
          id: '4',
          eventName: 'Corporate Team Building',
          eventType: 'other',
          eventDate: '2024-03-15',
          photoCount: 98,
          uploadDate: '2024-03-17',
          thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop',
          status: 'ready'
        },
      ])
      setIsLoading(false)
    }, 500)
  }, [])

  const filteredGalleries = galleries.filter(gallery =>
    gallery.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    gallery.eventType.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleDownload = (gallery: PhotoGallery) => {
    // TODO: Integrate with backend to download photos
    console.log('Downloading photos from gallery:', gallery.id)
    alert(`Starting download of ${gallery.photoCount} photos from "${gallery.eventName}"`)
  }

  const handleShare = (gallery: PhotoGallery) => {
    setSelectedGallery(gallery)
    // TODO: Open share modal
    alert(`Share functionality for "${gallery.eventName}" - implement modal`)
  }

  const handlePreview = (gallery: PhotoGallery) => {
    setSelectedGallery(gallery)
    setShowPreview(true)
  }

  const handleDelete = (galleryId: string) => {
    if (confirm('Are you sure you want to delete this gallery? This action cannot be undone.')) {
      setGalleries(galleries.filter(g => g.id !== galleryId))
      alert('Gallery deleted successfully')
    }
  }

  const getEventTypeColor = (eventType: string) => {
    switch (eventType) {
      case 'wedding':
        return 'bg-red-500/10 text-red-500'
      case 'birthday':
        return 'bg-blue-500/10 text-blue-500'
      case 'convocation':
        return 'bg-purple-500/10 text-purple-500'
      default:
        return 'bg-primary/10 text-primary'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ready':
        return 'bg-green-500/10 text-green-500'
      case 'processing':
        return 'bg-yellow-500/10 text-yellow-500'
      case 'archived':
        return 'bg-gray-500/10 text-gray-500'
      default:
        return 'bg-secondary text-muted-foreground'
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-foreground">My Photos</h2>
        <p className="text-muted-foreground mt-2">Access and manage all your event photo galleries</p>
      </div>

      {/* Search and Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search galleries by event name or type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
        <Card className="border-border bg-card">
          <CardContent className="pt-6">
            <p className="text-2xl font-bold text-foreground">{galleries.length}</p>
            <p className="text-xs text-muted-foreground">Total galleries</p>
          </CardContent>
        </Card>
      </div>

      {/* Photo Galleries Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="border-border bg-card animate-pulse">
              <div className="h-40 bg-secondary rounded-t-lg" />
              <CardContent className="pt-4 space-y-3">
                <div className="h-4 bg-secondary rounded w-3/4" />
                <div className="h-3 bg-secondary rounded w-1/2" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : filteredGalleries.length === 0 ? (
        <Card className="border-border bg-card">
          <CardContent className="pt-12 pb-12 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary mb-4">
              <Eye className="w-6 h-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No galleries found</h3>
            <p className="text-muted-foreground">
              {searchQuery ? 'Try adjusting your search terms' : 'Your photo galleries will appear here once events are completed'}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredGalleries.map((gallery) => (
            <Card key={gallery.id} className="border-border bg-card hover:border-primary/50 transition-colors overflow-hidden">
              {/* Thumbnail */}
              <div className="relative h-40 bg-secondary overflow-hidden group">
                <img
                  src={gallery.thumbnail || "/placeholder.svg"}
                  alt={gallery.eventName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handlePreview(gallery)}
                    className="text-white hover:bg-white/20"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDownload(gallery)}
                    className="text-white hover:bg-white/20"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
                <div className="absolute top-2 right-2 flex gap-2">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getEventTypeColor(gallery.eventType)} capitalize`}>
                    {gallery.eventType}
                  </span>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(gallery.status)} capitalize`}>
                    {gallery.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <CardContent className="pt-4 space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground line-clamp-1">{gallery.eventName}</h3>
                  <p className="text-sm text-muted-foreground">
                    {new Date(gallery.eventDate).toLocaleDateString()}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-3">
                  <span>{gallery.photoCount} photos</span>
                  <span className="text-xs">
                    Uploaded {new Date(gallery.uploadDate).toLocaleDateString()}
                  </span>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handlePreview(gallery)}
                    className="text-xs"
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    View
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleShare(gallery)}
                    className="text-xs"
                  >
                    <Share2 className="w-3 h-3 mr-1" />
                    Share
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(gallery.id)}
                    className="text-xs text-red-500 hover:text-red-600 hover:bg-red-500/10"
                  >
                    <Trash2 className="w-3 h-3 mr-1" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Preview Modal */}
      {showPreview && selectedGallery && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <Card className="border-border bg-card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>{selectedGallery.eventName}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {selectedGallery.photoCount} photos • {new Date(selectedGallery.eventDate).toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={() => setShowPreview(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square bg-secondary rounded-lg overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-${1519741497674 + i}?w=300&h=300&fit=crop`}
                      alt={`Photo ${i}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                ))}
              </div>
              <Button
                onClick={() => handleDownload(selectedGallery)}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Download className="w-4 h-4 mr-2" />
                Download All Photos
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
