import { UserRepository } from "../repositories/userRepository";

export class FindAllUsersUseCase {
  async execute() {
    const userRepository = new UserRepository();

    const users = await userRepository.show();

    return users;
  }
}
