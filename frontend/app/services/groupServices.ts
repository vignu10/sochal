import prisma from '../api/prisma-client';

export async function createGroup(groupname: string, userIds: number[]) {
  return prisma.group.create({
    data: {
      groupname,
      users: {
        connect: userIds.map(id => ({ id }))
      }
    },
  });
}

export async function getGroupById(id: number) {
  return prisma.group.findUnique({
    where: { id },
    include: { users: true },
  });
}

export async function updateGroup(id: number, groupname: string) {
  return prisma.group.update({
    where: { id },
    data: { groupname },
  });
}
