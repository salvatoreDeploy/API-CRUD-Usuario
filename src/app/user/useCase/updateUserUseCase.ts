import { IUpdateUser } from "../../account/dtos/IUpdateUser";
import { UserRepository } from "../repositories/userRepository";

export class UpdateUserUseCase {
  async execute({ id, name, email, cpf, birth_date, telephone }: IUpdateUser) {
    const userRepository = new UserRepository();

    const userExists = await userRepository.findById(id);

    if (!userExists) {
      throw new Error("User not exists");
    }

    const user = await userRepository.update({
      id,
      name,
      email,
      cpf,
      birth_date,
      telephone,
    });

    return user;
  }
}
