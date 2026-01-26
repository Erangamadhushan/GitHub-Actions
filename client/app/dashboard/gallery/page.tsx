"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Upload,
  ImageIcon,
  Users,
  Lock,
  Share2,
  Trash2,
  Eye,
  MoreVertical,
  Plus,
} from "lucide-react";
import type { PhotoGallery } from "@/types";

export default function GalleryPage() {
  const [galleries, setGalleries] = useState<PhotoGallery[]>([
    {
      id: "1",
      appointmentId: "appt-1",
      title: "Raj & Priya Wedding",
      description: "Beautiful wedding ceremony and reception photos",
      cloudinaryFolderId: "lensclick/wedding-raj-priya-2024",
      photoCount: 487,
      accessGrantedTo: ["raj@example.com", "priya@example.com"],
      createdAt: new Date("2024-03-15"),
      updatedAt: new Date("2024-03-20"),
    },
    {
      id: "2",
      appointmentId: "appt-2",
      title: "Aarav Birthday Party",
      description: "Fun birthday celebration with family and friends",
      cloudinaryFolderId: "lensclick/birthday-aarav-2024",
      photoCount: 234,
      accessGrantedTo: ["parent@example.com"],
      createdAt: new Date("2024-03-25"),
      updatedAt: new Date("2024-03-26"),
    },
  ]);

  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [showAccessDialog, setShowAccessDialog] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState<PhotoGallery | null>(
    null,
  );
  const [newAccessEmail, setNewAccessEmail] = useState("");
  const [uploadData, setUploadData] = useState({
    appointmentId: "",
    title: "",
    description: "",
  });

  const handleAddAccess = () => {
    if (!selectedGallery || !newAccessEmail) return;

    setGalleries(
      galleries.map((g) =>
        g.id === selectedGallery.id
          ? {
              ...g,
              accessGrantedTo: [
                ...new Set([...g.accessGrantedTo, newAccessEmail]),
              ],
              updatedAt: new Date(),
            }
          : g,
      ),
    );

    setNewAccessEmail("");
    alert(`Access granted to ${newAccessEmail}`);
  };

  const handleRemoveAccess = (galleryId: string, email: string) => {
    setGalleries(
      galleries.map((g) =>
        g.id === galleryId
          ? {
              ...g,
              accessGrantedTo: g.accessGrantedTo.filter((e) => e !== email),
              updatedAt: new Date(),
            }
          : g,
      ),
    );
  };

  const GalleryCard = ({ gallery }: { gallery: PhotoGallery }) => (
    <Card className="border-border bg-card hover:border-primary/50 transition-all">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              {gallery.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {gallery.description}
            </p>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <Eye className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 py-4 mb-4 border-y border-border">
          <div>
            <p className="text-xs text-muted-foreground">Photos</p>
            <p className="text-lg font-bold text-foreground">
              {gallery.photoCount}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Access Granted</p>
            <p className="text-lg font-bold text-foreground">
              {gallery.accessGrantedTo.length}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Updated</p>
            <p className="text-sm font-medium text-foreground">
              {gallery.updatedAt.toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase">
            Cloudinary Folder
          </p>
          <div className="bg-secondary/30 border border-border rounded-lg p-3">
            <p className="text-xs font-mono text-foreground break-all">
              {gallery.cloudinaryFolderId}
            </p>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-muted-foreground uppercase">
              Access List
            </p>
            <Dialog
              open={showAccessDialog && selectedGallery?.id === gallery.id}
              onOpenChange={(open) => {
                setShowAccessDialog(open);
                if (open) setSelectedGallery(gallery);
              }}
            >
              <DialogTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs gap-1 bg-transparent"
                >
                  <Plus className="w-3 h-3" />
                  Grant Access
                </Button>
              </DialogTrigger>
              <DialogContent className="border-border bg-card max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-foreground">
                    Grant Photo Access
                  </DialogTitle>
                  <DialogDescription>
                    Enter the email address of the event organizer to grant them
                    access to this gallery.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="access-email" className="text-foreground">
                      Email Address
                    </Label>
                    <Input
                      id="access-email"
                      type="email"
                      placeholder="organizer@example.com"
                      value={newAccessEmail}
                      onChange={(e) => setNewAccessEmail(e.target.value)}
                      className="bg-input border-border text-foreground"
                    />
                  </div>
                  <Button
                    onClick={handleAddAccess}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Grant Access
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {gallery.accessGrantedTo.length === 0 ? (
            <p className="text-xs text-muted-foreground italic">
              No access granted yet
            </p>
          ) : (
            <div className="space-y-2">
              {gallery.accessGrantedTo.map((email) => (
                <div
                  key={email}
                  className="flex items-center justify-between bg-secondary/20 border border-border rounded-lg p-2"
                >
                  <div className="flex items-center gap-2">
                    <Lock className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-foreground">{email}</span>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-5 w-5 p-0 text-destructive hover:bg-destructive/10"
                    onClick={() => handleRemoveAccess(gallery.id, email)}
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Photo Galleries
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage event photos and control access
          </p>
        </div>
        <Dialog open={showUploadDialog} onOpenChange={setShowUploadDialog}>
          <DialogTrigger asChild>
            <Button className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Upload className="w-4 h-4" />
              New Gallery
            </Button>
          </DialogTrigger>
          <DialogContent className="border-border bg-card max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-foreground">
                Create New Photo Gallery
              </DialogTitle>
              <DialogDescription>
                Create a new gallery for your event photos. You'll configure
                Cloudinary upload settings next.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="appointment-id" className="text-foreground">
                  Select Appointment
                </Label>
                <select
                  id="appointment-id"
                  value={uploadData.appointmentId}
                  onChange={(e) =>
                    setUploadData((prev) => ({
                      ...prev,
                      appointmentId: e.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-border bg-input text-foreground px-3 py-2 text-sm"
                >
                  <option value="">Choose an appointment</option>
                  <option value="appt-1">
                    Raj & Priya Wedding (May 15, 2024)
                  </option>
                  <option value="appt-2">
                    Aarav Birthday (March 20, 2024)
                  </option>
                  <option value="appt-3">
                    University Convocation (April 10, 2024)
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="gallery-title" className="text-foreground">
                  Gallery Title
                </Label>
                <Input
                  id="gallery-title"
                  placeholder="e.g., Wedding Ceremony & Reception"
                  value={uploadData.title}
                  onChange={(e) =>
                    setUploadData((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                  className="bg-input border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="gallery-description"
                  className="text-foreground"
                >
                  Description
                </Label>
                <Textarea
                  id="gallery-description"
                  placeholder="Describe the gallery content..."
                  value={uploadData.description}
                  onChange={(e) =>
                    setUploadData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  className="bg-input border-border text-foreground min-h-20 resize-none"
                />
              </div>

              <div className="space-y-3 pt-4 border-t border-border">
                <p className="text-sm font-semibold text-foreground">
                  Cloudinary Integration
                </p>
                <p className="text-xs text-muted-foreground">
                  To upload photos, you'll need to:
                </p>
                <ol className="text-xs text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Connect your Cloudinary account in Settings</li>
                  <li>Create an upload preset for this gallery</li>
                  <li>Use the upload interface on the next page</li>
                </ol>
              </div>

              <Button
                onClick={() => setShowUploadDialog(false)}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Create Gallery
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="bg-secondary/50">
          <TabsTrigger value="all">
            All Galleries ({galleries.length})
          </TabsTrigger>
          <TabsTrigger value="recent">Recently Updated</TabsTrigger>
          <TabsTrigger value="access">Shared with Organizers</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {galleries.length === 0 ? (
            <Card className="border-border bg-card">
              <CardContent className="pt-12 pb-12 text-center">
                <ImageIcon className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No Galleries Yet
                </h3>
                <p className="text-muted-foreground mb-4">
                  Create your first photo gallery to get started.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Create Gallery
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {galleries.map((gallery) => (
                <GalleryCard key={gallery.id} gallery={gallery} />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="recent" className="space-y-4">
          <div className="grid gap-6">
            {galleries
              .sort(
                (a, b) =>
                  new Date(b.updatedAt).getTime() -
                  new Date(a.updatedAt).getTime(),
              )
              .map((gallery) => (
                <GalleryCard key={gallery.id} gallery={gallery} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="access" className="space-y-4">
          <div className="grid gap-6">
            {galleries
              .filter((g) => g.accessGrantedTo.length > 0)
              .map((gallery) => (
                <GalleryCard key={gallery.id} gallery={gallery} />
              ))}
          </div>
          {galleries.every((g) => g.accessGrantedTo.length === 0) && (
            <Card className="border-border bg-card">
              <CardContent className="pt-12 pb-12 text-center">
                <Users className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No Shared Galleries
                </h3>
                <p className="text-muted-foreground">
                  Grant access to event organizers to share galleries.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {/* Cloudinary Setup Info */}
      <Card className="border-primary/50 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Cloudinary Setup Guide</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            To start uploading photos, integrate your Cloudinary account:
          </p>
          <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
            <li>
              Sign up for a free account at{" "}
              <span className="font-mono text-foreground">cloudinary.com</span>
            </li>
            <li>Go to Settings and find your Cloud Name and API Key</li>
            <li>
              Update your environment variables with Cloudinary credentials
            </li>
            <li>
              Create upload presets for different event types in Cloudinary
              dashboard
            </li>
            <li>
              Configure folder structure for organizing photos by event type
            </li>
          </ol>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Upload className="w-4 h-4" />
            Go to Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
