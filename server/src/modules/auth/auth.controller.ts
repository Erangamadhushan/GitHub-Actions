import prisma from "../../config/prisma";
import { hashPassword, comparePassword } from "../../utils/password";
import { signToken } from "../../utils/jwt";
import { asyncHandler } from "../../utils/asyncHandler";
import { Request, Response } from "express";

export const registerAdmin = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) throw { statusCode: 400, message: "User already exists" };

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: await hashPassword(password),
        role: "ADMIN",
      },
    });

    res.json({ success: true, data: user });
  },
);

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw { statusCode: 401, message: "Invalid credentials" };

  const valid = await comparePassword(password, user.password);
  if (!valid) throw { statusCode: 401, message: "Invalid credentials" };

  const token = signToken({
    id: user.id,
    role: user.role,
  });

  res.json({ success: true, token });
});
