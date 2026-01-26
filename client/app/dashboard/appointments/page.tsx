"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  Mail,
  Phone,
  Eye,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import type { Appointment } from "@/types";

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: "1",
      customerId: "customer-1",
      serviceId: "service-1",
      eventType: "wedding",
      eventDate: new Date("2024-05-15"),
      eventTime: "10:00 AM",
      eventLocation: "Grand Banquet Hall, Delhi",
      eventDescription: "Wedding reception",
      organizerName: "Raj Kumar",
      organizerEmail: "raj@example.com",
      status: "pending",
      totalPrice: 50000,
      createdAt: new Date("2024-01-15"),
      updatedAt: new Date("2024-01-15"),
    },
    {
      id: "2",
      customerId: "customer-2",
      serviceId: "service-2",
      eventType: "birthday",
      eventDate: new Date("2024-03-20"),
      eventTime: "02:00 PM",
      eventLocation: "Home, Mumbai",
      eventDescription: "Birthday party",
      organizerName: "Priya Sharma",
      organizerEmail: "priya@example.com",
      status: "confirmed",
      totalPrice: 5000,
      createdAt: new Date("2024-02-10"),
      updatedAt: new Date("2024-02-15"),
    },
    {
      id: "3",
      customerId: "customer-3",
      serviceId: "service-3",
      eventType: "convocation",
      eventDate: new Date("2024-04-10"),
      eventTime: "09:00 AM",
      eventLocation: "University Auditorium, Bangalore",
      eventDescription: "Annual convocation ceremony",
      organizerName: "Dr. Vikram Singh",
      organizerEmail: "vikram@university.edu",
      status: "confirmed",
      totalPrice: 25000,
      createdAt: new Date("2024-01-20"),
      updatedAt: new Date("2024-02-01"),
    },
  ]);

  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogAction, setDialogAction] = useState<"confirm" | "reject">(
    "confirm",
  );

  const pendingAppointments = appointments.filter(
    (a) => a.status === "pending",
  );
  const confirmedAppointments = appointments.filter(
    (a) => a.status === "confirmed",
  );
  const completedAppointments = appointments.filter(
    (a) => a.status === "completed",
  );

  const handleConfirm = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setDialogAction("confirm");
    setShowDialog(true);
  };

  const handleReject = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setDialogAction("reject");
    setShowDialog(true);
  };

  const confirmAction = () => {
    if (!selectedAppointment) return;

    setAppointments(
      appointments.map((a) =>
        a.id === selectedAppointment.id
          ? {
              ...a,
              status: dialogAction === "confirm" ? "confirmed" : "cancelled",
            }
          : a,
      ),
    );

    setShowDialog(false);
    setSelectedAppointment(null);
  };

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

  const AppointmentCard = ({ appointment }: { appointment: Appointment }) => (
    <Card className="border-border bg-card">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold text-foreground capitalize">
                {appointment.eventType} - {appointment.organizerName}
              </h3>
              <Badge className={getStatusColor(appointment.status)}>
                {appointment.status.charAt(0).toUpperCase() +
                  appointment.status.slice(1)}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              {appointment.eventDescription}
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">
              ₹{appointment.totalPrice.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6 py-4 border-y border-border">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Date & Time</p>
                <p className="text-sm font-medium text-foreground">
                  {appointment.eventDate.toLocaleDateString()} at{" "}
                  {appointment.eventTime}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium text-foreground">
                  {appointment.eventLocation}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium text-foreground">
                  {appointment.organizerEmail}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Booked On</p>
                <p className="text-sm font-medium text-foreground">
                  {appointment.createdAt.toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {appointment.status === "pending" && (
            <>
              <Button
                size="sm"
                onClick={() => handleConfirm(appointment)}
                className="gap-2 bg-green-500/20 hover:bg-green-500/30 text-green-700"
              >
                <CheckCircle className="w-4 h-4" />
                Confirm
              </Button>
              <Button
                size="sm"
                onClick={() => handleReject(appointment)}
                className="gap-2 bg-red-500/20 hover:bg-red-500/30 text-red-700"
              >
                <XCircle className="w-4 h-4" />
                Reject
              </Button>
            </>
          )}
          {appointment.status === "confirmed" && (
            <>
              <Button
                size="sm"
                variant="outline"
                className="gap-2 bg-transparent"
              >
                <Eye className="w-4 h-4" />
                View Details
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="gap-2 bg-transparent"
              >
                <Mail className="w-4 h-4" />
                Send Reminder
              </Button>
            </>
          )}
          {appointment.status === "completed" && (
            <Button
              size="sm"
              variant="outline"
              className="gap-2 bg-transparent"
            >
              <Eye className="w-4 h-4" />
              View Details
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Appointments</h1>
        <p className="text-muted-foreground mt-2">
          Manage customer photography bookings and confirmations
        </p>
      </div>

      <Tabs defaultValue="pending" className="space-y-6">
        <TabsList className="bg-secondary/50">
          <TabsTrigger value="pending">
            Pending ({pendingAppointments.length})
          </TabsTrigger>
          <TabsTrigger value="confirmed">
            Confirmed ({confirmedAppointments.length})
          </TabsTrigger>
          <TabsTrigger value="completed">
            Completed ({completedAppointments.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          {pendingAppointments.length === 0 ? (
            <Card className="border-border bg-card">
              <CardContent className="pt-12 pb-12 text-center">
                <Calendar className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No Pending Appointments
                </h3>
                <p className="text-muted-foreground">
                  All appointments are confirmed or completed!
                </p>
              </CardContent>
            </Card>
          ) : (
            pendingAppointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))
          )}
        </TabsContent>

        <TabsContent value="confirmed" className="space-y-4">
          {confirmedAppointments.map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ))}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {completedAppointments.length === 0 ? (
            <Card className="border-border bg-card">
              <CardContent className="pt-12 pb-12 text-center">
                <Calendar className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No Completed Appointments
                </h3>
                <p className="text-muted-foreground">
                  Completed appointments will appear here.
                </p>
              </CardContent>
            </Card>
          ) : (
            completedAppointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))
          )}
        </TabsContent>
      </Tabs>

      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent className="border-border bg-card">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-foreground">
              {dialogAction === "confirm"
                ? "Confirm Appointment"
                : "Reject Appointment"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {dialogAction === "confirm"
                ? `Are you sure you want to confirm the booking for ${selectedAppointment?.organizerName}?`
                : `Are you sure you want to reject the booking for ${selectedAppointment?.organizerName}?`}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogCancel className="border-border">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={confirmAction}
            className={
              dialogAction === "confirm"
                ? "bg-green-500 hover:bg-green-600"
                : "bg-red-500 hover:bg-red-600"
            }
          >
            {dialogAction === "confirm" ? "Confirm" : "Reject"}
          </AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
