import { Request, Response } from 'express';
import { ResponseHandler } from '../middleware/ResponseHandler';
import { User } from '../models/User';
import { CreateUser } from '../services/user/CreateUser';

export class UserController {
  public static async createUser(req: Request, res: Response) {
    try {
      const { firstName, lastName, email, password } = req.body.validatedData;
      const existingUser = await User.findOne({
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
