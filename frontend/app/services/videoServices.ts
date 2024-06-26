import prisma from '../api/prisma-client';

export async function createVideo(userId: number, groupId: number, videoLink: string) {
  return prisma.video.create({
    data: {
      userId,
      groupId,
      videoLink,
    },
  });
}

export async function getVideoById(id: number) {
  return prisma.video.findUnique({
    where: { id },
    include: { user: true, group: true },
  });
}

export async function updateVideo(id: number, videoLink: string) {
  return prisma.video.update({
    where: { id },
    data: { videoLink },
  });
}
