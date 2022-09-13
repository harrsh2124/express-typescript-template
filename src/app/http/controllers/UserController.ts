import { Request, Response } from 'express';
import { prisma } from '../../providers/db';
import { ResponseHandler } from '../middleware/ResponseHandler';
import { CreateUser } from '../services/user/CreateUser';

export class UserController {
  public static async createUser(req: Request, res: Response) {
    try {
      const { firstName, lastName, email, password, contactNumber } =
        req.body.validatedData;
      const existingUser = await prisma.user.findFirst({
        where: {
          email,
        },
      });
      if (existingUser) {
        throw Error('User already exists.');
      }

      const user = await CreateUser({
        firstName,
        lastName,
        email,
        password,
        contactNumber,
      });

      return ResponseHandler(req, res, {
        user,
        message: 'User created successfully.',
      });
    } catch (error) {
      return ResponseHandler(req, res, null, error);
    }
  }
}
