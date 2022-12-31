import { AccountRepository } from "../repositories/accountRepository";
import { hash } from "bcryptjs";

export class CreateNewUserUseCase {
  async execute({
    name,
    password,
    email,
    cpf,
    birth_date,
    telephone,
  }: ICreateUser) {
    const accountRepository = new AccountRepository();

    const userExists = await accountRepository.findByUserExists(cpf);

    if (userExists) {
      throw new Error("User already exists");
    }

    const hashPassword = await hash(password, 10);

    const user = await accountRepository.create({
      name,
      password: hashPassword,
      email,
      cpf,
      birth_date,
      telephone,
    });

    return user;
  }
}
