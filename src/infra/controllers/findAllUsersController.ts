import { Request, Response } from "express";
import { FindAllUsersUseCase } from "../../app/user/useCase/findAllUsersUseCase";

export class FindAllUserUseController {
  async handle(request: Request, response: Response) {
    const findAllUsersUseCase = new FindAllUsersUseCase();

    const result = await findAllUsersUseCase.execute();

    response.status(200).json(result);
  }
}
