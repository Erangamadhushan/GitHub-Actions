import { Router } from "express";
import { createBooking, updateBookingStatus } from "./booking.controller";
import { validate } from "../../middlewares/validate.middleware";
import { createBookingSchema } from "./booking.schema";
import { requireAuth, requireRole } from "../../middlewares/auth.middleware";

const router = Router();

// Public
router.post("/", validate(createBookingSchema), createBooking);

// Admin only
router.patch(
  "/:id/status",
  requireAuth,
  requireRole("ADMIN"),
  updateBookingStatus,
);

export default router;
