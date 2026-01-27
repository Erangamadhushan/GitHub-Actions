import prisma from "../../config/prisma";
import { asyncHandler } from "../../utils/asyncHandler";
import { Request, Response } from "express";

export const createBooking = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, email, eventType, eventDate } = req.body;

    const date = new Date(eventDate);

    // Conflict check (same day booking)
    const conflict = await prisma.booking.findFirst({
      where: {
        eventDate: date,
        status: { in: ["PENDING", "CONFIRMED"] },
      },
    });

    if (conflict) {
      throw {
        statusCode: 409,
        message: "This date is already booked",
      };
    }

    const booking = await prisma.booking.create({
      data: {
        name,
        email,
        eventType,
        eventDate: date,
      },
    });

    res.json({
      success: true,
      data: booking,
    });
  },
);

export const updateBookingStatus = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status } = req.body;

    const booking = await prisma.booking.update({
      where: { id: Number(id) },
      data: { status },
    });

    res.json({
      success: true,
      data: booking,
    });
  },
);
