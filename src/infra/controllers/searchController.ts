import { Request, Response } from "express";
import { SearchUseCase } from "../../app/user/useCase/searchUseCase";

export class SearchController {
  async handle(request: Request, response: Response) {
    const searchUseCase = new SearchUseCase();

    const { name, email } = request.query;

    const fieldName = String(name);
    const fieldEmail = String(email);

    const result = await searchUseCase.execute(fieldName, fieldEmail);

    return response.status(200).json(result);
  }
}
