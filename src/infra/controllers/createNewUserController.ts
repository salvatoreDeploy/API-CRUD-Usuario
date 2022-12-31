import { Request, Response } from "express";
import { CreateNewUserUseCase } from "../../app/account/useCase/createNewUserUseCase";

export class CreateNewUserController {
  async handle(request: Request, response: Response) {
    const createNewUserUseCase = new CreateNewUserUseCase();

    const { name, password, email, cpf, birth_date, telephone } = request.body;

    const result = await createNewUserUseCase.execute({
      name,
      password,
      email,
      cpf,
      birth_date,
      telephone,
    });

    return response.status(201).json(result);
  }
}
