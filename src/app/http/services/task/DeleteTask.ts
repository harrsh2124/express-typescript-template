import bcrypt from 'bcryptjs';
import { prisma } from '../../../providers/db';

export const DeleteTask = async ({ id }: { id: number }) => {
  const newTitle = await prisma.task.delete({
    where: {
      id,
    },
  });

  return newTitle;
};
