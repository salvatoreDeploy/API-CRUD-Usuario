import { Router } from "express";
import { AuthenticateUserController } from "../controllers/authenticateUserController";
import { CreateNewUserController } from "../controllers/createNewUserController";

const accountRoutes = Router();

const createNewUserController = new CreateNewUserController();
const autenticateUserController = new AuthenticateUserController();

accountRoutes.post("/", createNewUserController.handle);
accountRoutes.post("/login", autenticateUserController.handle);

export { accountRoutes };
