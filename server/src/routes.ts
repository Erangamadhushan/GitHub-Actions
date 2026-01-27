import { Router } from "express";
import authRoutes from "./modules/auth/auth.routes";
import albumRoutes from "./modules/albums/album.routes";
import photoRoutes from "./modules/photos/photo.routes";
import accessRoutes from "./modules/access/access.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/albums", albumRoutes);
router.use("/albums", photoRoutes);
router.use("/access", accessRoutes);

router.get("/health", async (_, res) => {
  res.json({
    success: true,
    service: "Photography Backend",
    db: "MySQL",
    status: "Healthy",
  });
});

export default router;
