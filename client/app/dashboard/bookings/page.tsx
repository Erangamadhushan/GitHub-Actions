"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  MapPin,
  Clock,
  Download,
  MessageCircle,
  Trash2,
} from "lucide-react";
import type { Appointment } from "@/types";

export default function BookingsPage() {
  const router = useRouter();
  const [bookings, setBookings] = useState<Appointment[]>([
    {
      id: "1",
      customerId: "customer-1",
      serviceId: "service-1",
      eventType: "wedding",
      eventDate: new Date("2024-05-15"),
      eventTime: "10:00 AM",
      eventLocation: "Grand Banquet Hall, Delhi",
      eventDescription: "Our wedding reception",
      organizerName: "Raj Kumar",
      organizerEmail: "raj@example.com",
      status: "confirmed",
      totalPrice: 50000,
      createdAt: new Date("2024-01-15"),
      updatedAt: new Date("2024-01-15"),
    },
    {
      id: "2",
      customerId: "customer-1",
      serviceId: "service-2",
      eventType: "birthday",
      eventDate: new Date("2024-03-20"),
      eventTime: "02:00 PM",
      eventLocation: "Home, Mumbai",
      eventDescription: "Birthday party for my daughter",
      organizerName: "Priya Sharma",
      organizerEmail: "priya@example.com",
      status: "completed",
      totalPrice: 5000,
      createdAt: new Date("2024-02-10"),
      updatedAt: new Date("2024-03-20"),
    },
  ]);

  const upcomingBookings = bookings.filter(
    (b) => b.status === "confirmed" || b.status === "pending",
  );
  const completedBookings = bookings.filter((b) => b.status === "completed");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500/20 text-yellow-700";
      case "confirmed":
        return "bg-green-500/20 text-green-700";
      case "completed":
        return "bg-blue-500/20 text-blue-700";
      case "cancelled":
        return "bg-red-500/20 text-red-700";
      default:
        return "bg-gray-500/20 text-gray-700";
    }
  };

  const BookingCard = ({ booking }: { booking: Appointment }) => (
    <Card className="border-border bg-card">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold text-foreground capitalize">
                {booking.eventType} Photography
              </h3>
              <Badge className={getStatusColor(booking.status)}>
                {booking.status.charAt(0).toUpperCase() +
                  booking.status.slice(1)}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              {booking.eventDescription}
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">
              ₹{booking.totalPrice.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6 py-4 border-y border-border">
          <div className="flex items-center gap-3">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Date</p>
              <p className="text-sm font-medium text-foreground">
                {booking.eventDate.toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Time</p>
              <p className="text-sm font-medium text-foreground">
                {booking.eventTime}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="text-sm font-medium text-foreground">
                {booking.eventLocation}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {booking.status === "completed" && (
            <>
              <Button
                size="sm"
                variant="outline"
                className="gap-2 bg-transparent"
              >
                <Download className="w-4 h-4" />
                View Photos
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="gap-2 bg-transparent"
              >
                <Download className="w-4 h-4" />
                Download All
              </Button>
            </>
          )}
          {booking.status === "pending" && (
            <Button
              size="sm"
              variant="outline"
              className="gap-2 text-yellow-600 bg-transparent"
            >
              <MessageCircle className="w-4 h-4" />
              Awaiting Confirmation
            </Button>
          )}
          {booking.status === "confirmed" && (
            <>
              <Button size="sm" variant="outline">
                View Details
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="gap-2 text-destructive hover:bg-destructive/10 bg-transparent"
              >
                <Trash2 className="w-4 h-4" />
                Cancel Booking
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">My Bookings</h1>
        <p className="text-muted-foreground mt-2">
          Manage and track your photography appointments
        </p>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-6">
        <TabsList className="bg-secondary/50">
          <TabsTrigger value="upcoming">
            Upcoming ({upcomingBookings.length})
          </TabsTrigger>
          <TabsTrigger value="completed">
            Completed ({completedBookings.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          {upcomingBookings.length === 0 ? (
            <Card className="border-border bg-card">
              <CardContent className="pt-12 pb-12 text-center">
                <Calendar className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No Upcoming Bookings
                </h3>
                <p className="text-muted-foreground mb-4">
                  You don't have any upcoming photography sessions scheduled.
                </p>
                <Button
                  onClick={() => router.push("/book")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ) : (
            upcomingBookings.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))
          )}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {completedBookings.length === 0 ? (
            <Card className="border-border bg-card">
              <CardContent className="pt-12 pb-12 text-center">
                <Calendar className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No Completed Bookings
                </h3>
                <p className="text-muted-foreground">
                  Once your photography session is completed, it will appear
                  here.
                </p>
              </CardContent>
            </Card>
          ) : (
            completedBookings.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
