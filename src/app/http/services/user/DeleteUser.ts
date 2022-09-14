import { prisma } from '../../../providers/db';

export const DeleteUser = async ({ id }: { id: number }) => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });

  return user;
};
