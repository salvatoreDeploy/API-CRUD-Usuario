import { Request, Response } from "express";
import { DeleteUserUseCase } from "../../app/user/useCase/deleteUserUseCase";

export class DeleteUserController {
  async handle(request: Request, response: Response) {
    const deleteUserUseCase = new DeleteUserUseCase();

    const { id } = request.params;

    await deleteUserUseCase.execute(id);

    return response.status(200).json("User deleted successfully");
  }
}
