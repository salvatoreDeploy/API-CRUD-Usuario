import { UserRepository } from "../repositories/userRepository";

export class SearchUseCase {
  async execute(name: string, email: string) {
    const userRepository = new UserRepository();

    const search = await userRepository.search(name, email);

    return search;
  }
}
