import { Router } from "express";
import { createBooking, updateBookingStatus } from "./booking.controller";
import { validate } from "../../middlewares/validate.middleware";
import { createBookingSchema } from "./booking.schema";
import { requireAuth, requireRole } from "../../middlewares/auth.middleware";
import rateLimit from "express-rate-limit";

const router = Router();

const bookingRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 booking requests per windowMs
});

// Public
router.post("/", bookingRateLimiter, validate(createBookingSchema), createBooking);

// Admin only
router.patch(
  "/:id/status",
  bookingRateLimiter,
  requireAuth,
  requireRole("ADMIN"),
  updateBookingStatus,
);

export default router;
