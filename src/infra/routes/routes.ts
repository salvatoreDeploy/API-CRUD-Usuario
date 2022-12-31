import { Router } from "express";
import { accountRoutes } from "./account.routes";
import { userRoutes } from "./user.routes";

const router = Router();

router.use("/account", accountRoutes);
router.use("/user", userRoutes);

export { router };
