import bcrypt from 'bcryptjs';
import { prisma } from '../../../providers/db';

export const CreateUser = async ({
  firstName,
  lastName,
  email,
  password,
  contactNumber,
}: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  contactNumber: string;
}) => {
  const newUser = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      password: bcrypt.hashSync(password),
      contactNumber,
    },
  });

  return newUser;
};
