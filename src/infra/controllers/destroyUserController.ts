import { Request, Response } from "express";
import { DestroyUserUseCase } from "../../app/user/useCase/destroyUserUseCase";

export class DestroyController {
  async handle(request: Request, response: Response) {
    const destroyUserUseCase = new DestroyUserUseCase();

    const { id } = request.params;

    await destroyUserUseCase.execute(id);

    return response.status(200).json("User successfully destroyed");
  }
}
