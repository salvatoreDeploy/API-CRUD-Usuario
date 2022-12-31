import { prisma } from "../../../infra/database/prisma/prismaClient";
import { IUpdateUser } from "../../account/dtos/IUpdateUser";

export class UserRepository {
  async findById(id: string) {
    const user = await prisma.user.findFirst({
      where: {
        id,
      },
    });

    return user;
  }

  async search(name?: string, email?: string) {
    const search = await prisma.user.findMany({
      where: {
        OR: [
          {
            name: {
              contains: name,
            },
          },
          {
            email: {
              contains: email,
            },
          },
        ],
      },
    });

    return search;
  }

  async show() {
    const users = await prisma.user.findMany({
      where: {
        status: "APPROVED" && "PENDING",
      },
      select: {
        id: true,
        name: true,
        email: true,
        cpf: true,
        birth_date: true,
        telephone: true,
        status: true,
        access_status: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        id: "desc",
      },
      take: 5,
    });

    return users;
  }

  async update({ id, name, email, cpf, birth_date, telephone }: IUpdateUser) {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        cpf,
        birth_date,
        telephone,
        updatedAt: new Date(),
      },
      select: {
        id: true,
        name: true,
        email: true,
        cpf: true,
        birth_date: true,
        telephone: true,
        status: true,
        access_status: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return user;
  }

  async delete(id: string) {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        status: "INACTIVE",
        updatedAt: new Date(),
      },
    });
  }

  async destroy(id: string) {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
