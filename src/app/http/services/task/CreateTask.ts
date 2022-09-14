import bcrypt from 'bcryptjs';
import { prisma } from '../../../providers/db';

export const CreateTask = async ({
  title,
  userId,
}: {
  title: string;
  userId: number;
}) => {
  const newTitle = await prisma.task.create({
    data: {
      title,
      userId,
    },
  });

  return newTitle;
};
