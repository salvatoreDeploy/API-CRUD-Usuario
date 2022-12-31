import { Router } from "express";
import { DeleteUserController } from "../controllers/deleteUserController";
import { DestroyController } from "../controllers/destroyUserController";
import { FindAllUserUseController } from "../controllers/findAllUsersController";
import { SearchController } from "../controllers/searchController";
import { UpdateUserController } from "../controllers/updateUserController";
import { ensureAdminUser } from "./middlewares/ensureAdminUser";
import { ensureAuthenticateUser } from "./middlewares/ensureAuthenticateUser";

const userRoutes = Router();

const findAllUsersController = new FindAllUserUseController();
const updateUserController = new UpdateUserController();
const searchController = new SearchController();
const deleteUserController = new DeleteUserController();
const destroyUserController = new DestroyController();

userRoutes.get(
  "/",
  ensureAuthenticateUser,
  ensureAdminUser,
  findAllUsersController.handle
);
userRoutes.get(
  "/search",
  ensureAuthenticateUser,
  ensureAdminUser,
  searchController.handle
);
userRoutes.put(
  "/update/:id",
  ensureAuthenticateUser,
  ensureAdminUser,
  updateUserController.handle
);
userRoutes.put(
  "/delete/:id",
  ensureAuthenticateUser,
  deleteUserController.handle
);
userRoutes.delete(
  "/delete/:id",
  ensureAuthenticateUser,
  ensureAdminUser,
  destroyUserController.handle
);
export { userRoutes };
