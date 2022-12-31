import { prisma } from "../../../infra/database/prisma/prismaClient";

export class AccountRepository {
  async findByUserExists(cpf: number) {
    const userExists = await prisma.user.findUnique({
      where: {
        cpf,
      },
    });

    return userExists;
  }

  async create({
    name,
    email,
    password,
    cpf,
    birth_date,
    telephone,
  }: ICreateUser) {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        cpf,
        birth_date,
        telephone,
      },
    });

    return user;
  }

  async findByEmailExists(email: string) {
    const emailExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return emailExists;
  }

  async findById(id: string) {
    const userExists = await prisma.user.findFirst({
      where: {
        id,
      },
    });

    return userExists;
  }
}
