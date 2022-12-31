import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../../../app/user/repositories/userRepository";

export async function ensureAdminUser(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request;

  const userRepository = new UserRepository();

  const user = await userRepository.findById(user_id);

  if (user?.access_status != "ADMIN") {
    throw new Error("User is not Adinm");
  }

  return next();
}
