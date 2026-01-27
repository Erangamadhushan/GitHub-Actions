import { z } from "zod";

export const createBookingSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  eventType: z.enum(["WEDDING", "BIRTHDAY", "CONVOCATION", "OTHER"]),
  eventDate: z.string().datetime(),
});
