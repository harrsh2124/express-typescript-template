import { Request, Response } from 'express';
import { ResponseHandler } from '../middleware/ResponseHandler';
import { CreateUser } from '../services/user/CreateUser';

export class UserController {
  public static async createUser(req: Request, res: Response) {
    try {
      const { firstName, lastName } = req.body;
      const user = await CreateUser({
        firstName,
        lastName,
      });

      return ResponseHandler(res, {
        user,
        message: 'User created successfully.',
      });
    } catch (error) {
      return ResponseHandler(res, null, error);
    }
  }
}
