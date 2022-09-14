import { prisma } from '../../../providers/db';

export const GetUser = async () => {
  const user = await prisma.user.findFirst({
    where: {
      id: 1,
    },
    select: {
      tasks: {
        select: {
          id: true,
          title: true,
          isCompleted: true,
        },
      },
    },
  });

  return user;
};
