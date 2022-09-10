import { User } from '../../models/User';

export const CreateUser = async ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) => {
  return (
    await (
      await User.create({
        firstName,
        lastName,
      })
    ).save()
  ).get();
};
