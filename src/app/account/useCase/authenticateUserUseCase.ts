import { compare } from "bcryptjs";
import { AccountRepository } from "../repositories/accountRepository";
import { decode, sign } from "jsonwebtoken";
import Auth from "../../../config/Auth";

export class AuthenticateUserUseCase {
  async execute({ email, password }: IAuthenticateUser) {
    const accountRepository = new AccountRepository();

    const userExists = await accountRepository.findByEmailExists(email);

    if (!userExists) {
      throw new Error("E-mail or Password invalid");
    }

    const passwordMatch = await compare(password, userExists.password);

    if (!passwordMatch) {
      throw new Error("E-mail or Password invalid");
    }

    const { secret_token, expires_in_token } = Auth;

    const token = sign({}, secret_token, {
      subject: userExists.id,
      expiresIn: expires_in_token,
    });

    return { token };
  }
}
