import { prisma } from '../../../providers/db';

export const GetUser = async () => {
  const user = await prisma.user.findFirst({
    where: {
      id: 1,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      contactNumber: true,
      email: true,
      createdAt: true,
      updatedAt: true,
      tasks: {
        select: {
          id: true,
          title: true,
          isCompleted: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    },
  });

  return user;
};
