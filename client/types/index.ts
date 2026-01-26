export type UserRole = "customer" | "admin" | "organizer";

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (
    email: string,
    password: string,
    fullName: string,
    role: UserRole,
  ) => Promise<void>;
  logout: () => Promise<void>;
}

export type EventType = "wedding" | "birthday" | "convocation" | "other";

export interface ServicePackage {
  id: string;
  name: string;
  description: string;
  eventType: EventType;
  price: number;
  duration: number; // in hours
  includePhotos: number; // number of photos included
  features: string[];
  createdAt: Date;
}

export interface Appointment {
  id: string;
  customerId: string;
  serviceId: string;
  eventType: EventType;
  eventDate: Date;
  eventTime: string;
  eventLocation: string;
  eventDescription: string;
  organizerEmail?: string;
  organizerName?: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface PhotoGallery {
  id: string;
  appointmentId: string;
  title: string;
  description: string;
  cloudinaryFolderId: string;
  photoCount: number;
  accessGrantedTo: string[]; // array of organizer emails
  createdAt: Date;
  updatedAt: Date;
}

export interface PhotoAccessToken {
  id: string;
  galleryId: string;
  email: string;
  organizerName: string;
  accessGrantedAt: Date;
  expiresAt?: Date;
}

export interface TimeSlot {
  date: Date;
  time: string;
  available: boolean;
}

export interface gallery {
  id: number;
  title: string;
  category: "wedding" | "birthday" | "convocation" | "events" | "other";
  image: string;
  location: string;
}
