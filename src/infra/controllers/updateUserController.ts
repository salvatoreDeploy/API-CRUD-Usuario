import { Request, Response } from "express";
import { UpdateUserUseCase } from "../../app/user/useCase/updateUserUseCase";

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const updateUserUseCase = new UpdateUserUseCase();

    const { id } = request.params;
    const { name, email, cpf, birth_date, telephone } = request.body;

    const result = await updateUserUseCase.execute({
      id,
      name,
      email,
      cpf,
      birth_date,
      telephone,
    });

    return response.status(200).json(result);
  }
}
