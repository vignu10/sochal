import prisma from '../../prisma-client';

export async function createUser(username: string) {
  return prisma.user.create({
    data: { username },
  });
}

export async function getUserById(id: number) {
  return prisma.user.findUnique({
    where: { id },
  });
}

export async function updateUser(id: number, username: string) {
  return prisma.user.update({
    where: { id },
    data: { username },
  });
}
