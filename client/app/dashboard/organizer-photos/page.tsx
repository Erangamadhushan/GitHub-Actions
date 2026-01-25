'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Download, ImageIcon, Search, Eye, Share2 } from 'lucide-react'
import type { PhotoGallery } from '@/types'

interface SharedGallery extends PhotoGallery {
  sharedBy: string
  sharedDate: Date
}

export default function OrganizerPhotosPage() {
  const [sharedGalleries, setSharedGalleries] = useState<SharedGallery[]>([
    {
      id: '1',
      appointmentId: 'appt-1',
      title: 'Raj & Priya Wedding',
      description: 'Beautiful wedding ceremony and reception photos',
      cloudinaryFolderId: 'lensclick/wedding-raj-priya-2024',
      photoCount: 487,
      accessGrantedTo: ['organizer@example.com'],
      createdAt: new Date('2024-03-15'),
      updatedAt: new Date('2024-03-20'),
      sharedBy: 'LensClick Admin',
      sharedDate: new Date('2024-03-16'),
    },
    {
      id: '2',
      appointmentId: 'appt-3',
      title: 'University Convocation 2024',
      description: 'Annual convocation ceremony with graduates and faculty',
      cloudinaryFolderId: 'lensclick/convocation-university-2024',
      photoCount: 612,
      accessGrantedTo: ['organizer@example.com'],
      createdAt: new Date('2024-04-10'),
      updatedAt: new Date('2024-04-15'),
      sharedBy: 'LensClick Admin',
      sharedDate: new Date('2024-04-12'),
    },
  ])

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGallery, setSelectedGallery] = useState<SharedGallery | null>(null)
  const [showPreview, setShowPreview] = useState(false)

  const filteredGalleries = sharedGalleries.filter(g =>
    g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    g.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleDownload = (gallery: SharedGallery) => {
    console.log('Download initiated for:', gallery.title)
    alert(`Downloading ${gallery.photoCount} photos from ${gallery.title}...`)
  }

  const GalleryCard = ({ gallery }: { gallery: SharedGallery }) => (
    <Card className="border-border bg-card hover:border-primary/50 transition-all">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground">{gallery.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{gallery.description}</p>
          </div>
          <Badge variant="outline" className="bg-primary/10 text-primary">
            {gallery.photoCount} photos
          </Badge>
        </div>

        <div className="space-y-3 py-4 border-y border-border mb-4">
          <div>
            <p className="text-xs text-muted-foreground">Shared by</p>
            <p className="text-sm font-medium text-foreground">{gallery.sharedBy}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Shared on</p>
            <p className="text-sm font-medium text-foreground">
              {gallery.sharedDate.toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Dialog open={showPreview && selectedGallery?.id === gallery.id} onOpenChange={(open) => {
            setShowPreview(open)
            if (open) setSelectedGallery(gallery)
          }}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                <Eye className="w-4 h-4" />
                Preview
              </Button>
            </DialogTrigger>
            <DialogContent className="border-border bg-card max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-foreground">Gallery Preview</DialogTitle>
                <DialogDescription>
                  {selectedGallery?.title} - {selectedGallery?.photoCount} photos
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg bg-secondary/50 border border-border flex items-center justify-center"
                  >
                    <ImageIcon className="w-8 h-8 text-muted-foreground/50" />
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Click "Download All" to get the complete gallery
              </p>
            </DialogContent>
          </Dialog>

          <Button
            size="sm"
            onClick={() => handleDownload(gallery)}
            className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Download className="w-4 h-4" />
            Download All
          </Button>

          <Button size="sm" variant="outline" className="gap-2 bg-transparent">
            <Share2 className="w-4 h-4" />
            Share
          </Button>
        </div>

        {/* Photo Stats */}
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground mb-3">Storage Info</p>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-muted-foreground">Photos uploaded</span>
              <span className="text-foreground font-medium">{gallery.photoCount}/500</span>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all"
                style={{ width: `${(gallery.photoCount / 500) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">My Event Photos</h1>
        <p className="text-muted-foreground mt-2">Access and download photos from your shared event galleries</p>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search galleries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-input border-border text-foreground"
          />
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="bg-secondary/50">
          <TabsTrigger value="all">
            All Galleries ({sharedGalleries.length})
          </TabsTrigger>
          <TabsTrigger value="recent">
            Recently Shared
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {filteredGalleries.length === 0 ? (
            <Card className="border-border bg-card">
              <CardContent className="pt-12 pb-12 text-center">
                <ImageIcon className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {searchQuery ? 'No galleries found' : 'No Shared Galleries Yet'}
                </h3>
                <p className="text-muted-foreground">
                  {searchQuery
                    ? 'Try adjusting your search terms'
                    : 'Once the photographer shares your event photos, they will appear here.'}
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {filteredGalleries.map(gallery => (
                <GalleryCard key={gallery.id} gallery={gallery} />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="recent" className="space-y-4">
          <div className="grid gap-6">
            {sharedGalleries
              .sort((a, b) => new Date(b.sharedDate).getTime() - new Date(a.sharedDate).getTime())
              .map(gallery => (
                <GalleryCard key={gallery.id} gallery={gallery} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Info Banner */}
      <Card className="border-primary/50 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">About Your Photo Access</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
            <li>Event organizers can view and download photos shared by the photographer</li>
            <li>Access is granted through secure email links sent by the photographer</li>
            <li>Downloaded photos are high-quality and ready for use</li>
            <li>You can share galleries with other people through the Share button</li>
            <li>All photos are secure and backed up on Cloudinary cloud storage</li>
          </ul>
        </CardContent>
      </Card>

      {/* Download Instructions */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-lg">Download Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
            <li>Click "Download All" on any gallery to get all photos as a ZIP file</li>
            <li>Individual photos can be viewed and downloaded from the preview</li>
            <li>Use the Share button to send galleries to friends and family</li>
            <li>Keep your downloads organized by event type</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}
