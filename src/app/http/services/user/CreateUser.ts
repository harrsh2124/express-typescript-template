import bcrypt from 'bcryptjs';
import { User } from '../../models/User';

export const CreateUser = async ({
  firstName,
  lastName,
  email,
  password,
}: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  return (
    await (
      await User.create({
        firstName,
        lastName,
        email,
        password: bcrypt.hashSync(password),
      })
    ).save()
  ).get();
};
