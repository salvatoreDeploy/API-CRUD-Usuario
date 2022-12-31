import { UserRepository } from "../repositories/userRepository";

export class DeleteUserUseCase {
  async execute(id: string) {
    const userRepository = new UserRepository();

    const userExists = userRepository.findById(id);

    if (!userExists) {
      throw new Error("User not exists");
    }

    await userRepository.delete(id);
  }
}
