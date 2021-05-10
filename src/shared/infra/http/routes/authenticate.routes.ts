import { Router } from "express";
import { AuthenticateUserController } from "@modules/accounts/useCases/AuthenticateUser.ts/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);

export default authenticateRoutes;
