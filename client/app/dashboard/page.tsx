"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DashboardStats {
  totalBookings?: number;
  upcomingAppointments?: number;
  photoGalleries?: number;
  completedBookings?: number;
}

export default function DashboardPage() {
  const router = useRouter();
  const [userRole, setUserRole] = useState<string>("customer");
  const [stats, setStats] = useState<DashboardStats>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const role = localStorage.getItem("user_role") || "customer";
    setUserRole(role);

    // Simulate loading data
    setTimeout(() => {
      if (role === "customer") {
        setStats({
          totalBookings: 5,
          upcomingAppointments: 2,
          completedBookings: 3,
        });
      } else if (role === "admin") {
        setStats({
          totalBookings: 24,
          upcomingAppointments: 8,
          photoGalleries: 12,
        });
      } else if (role === "organizer") {
        setStats({
          photoGalleries: 3,
        });
      }
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div>
        <h2 className="text-3xl font-bold text-foreground">Welcome Back!</h2>
        <p className="text-muted-foreground mt-2">
          {userRole === "customer" &&
            "Manage your photography bookings and view your photos"}
          {userRole === "admin" &&
            "Manage appointments, customers, and photo galleries"}
          {userRole === "organizer" && "Access your event photos"}
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {userRole === "customer" && (
          <>
            <Card className="border-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Bookings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-foreground">
                  {stats.totalBookings || 0}
                </p>
                <p className="text-xs text-muted-foreground mt-1">All time</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Upcoming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-foreground">
                  {stats.upcomingAppointments || 0}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Next 30 days
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Completed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-foreground">
                  {stats.completedBookings || 0}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Finished shoots
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Ready to Book?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  size="sm"
                  onClick={() => router.push("/book")}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  New Booking
                </Button>
              </CardContent>
            </Card>
          </>
        )}

        {userRole === "admin" && (
          <>
            <Card className="border-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Bookings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-foreground">
                  {stats.totalBookings || 0}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  All appointments
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-primary" />
                  Pending Review
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-foreground">
                  {stats.upcomingAppointments || 0}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Awaiting confirmation
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Photo Galleries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-foreground">
                  {stats.photoGalleries || 0}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Total galleries
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => router.push("/dashboard/appointments")}
                  className="w-full text-xs"
                >
                  View Appointments
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => router.push("/dashboard/gallery")}
                  className="w-full text-xs"
                >
                  Manage Photos
                </Button>
              </CardContent>
            </Card>
          </>
        )}

        {userRole === "organizer" && (
          <>
            <Card className="border-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Event Photos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-foreground">
                  {stats.photoGalleries || 0}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Accessible galleries
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card md:col-span-2">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Your Photos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Access the photo galleries shared with you
                </p>
                <Button
                  size="sm"
                  onClick={() => router.push("/dashboard/organizer-photos")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  View All Photos
                </Button>
              </CardContent>
            </Card>
          </>
        )}
      </div>

      {/* Recent Activity / Next Steps */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {userRole === "customer" && (
              <>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Browse Services
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Choose from our photography packages
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">2</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Book a Date & Time
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Select your preferred date and time slot
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">3</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Receive Your Photos
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Access your edited photos in your gallery
                    </p>
                  </div>
                </li>
              </>
            )}
            {userRole === "admin" && (
              <>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Manage Appointments
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Review and confirm customer bookings
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">2</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Upload Photos
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Upload event photos to Cloudinary
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">3</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Grant Access
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Share galleries with event organizers
                    </p>
                  </div>
                </li>
              </>
            )}
            {userRole === "organizer" && (
              <>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Access Shared Photos
                    </p>
                    <p className="text-xs text-muted-foreground">
                      View galleries that have been shared with you
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">2</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Download Photos
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Download high-quality photos for your event
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">3</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Share with Others
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Forward galleries to your guests
                    </p>
                  </div>
                </li>
              </>
            )}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
