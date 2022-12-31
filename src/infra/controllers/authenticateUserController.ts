import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "../../app/account/useCase/authenticateUserUseCase";

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const authenticateUserUseCase = new AuthenticateUserUseCase();

    const { email, password } = request.body;

    const result = await authenticateUserUseCase.execute({ email, password });

    return response.status(200).json(result);
  }
}
