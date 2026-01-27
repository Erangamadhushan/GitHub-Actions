import { Router } from "express";

const router = Router();

router.get("/health", async (_, res) => {
  res.json({
    success: true,
    service: "Photography Backend",
    db: "MySQL",
    status: "Healthy",
  });
});

export default router;
