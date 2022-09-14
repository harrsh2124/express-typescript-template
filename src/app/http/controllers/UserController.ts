import { Request, Response } from 'express';
import { prisma } from '../../providers/db';
import { ResponseHandler } from '../middleware/ResponseHandler';
import { CreateUser } from '../services/user/CreateUser';
import { DeleteUser } from '../services/user/DeleteUser';
import { GetUser } from '../services/user/GetUser';

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

  public static async getUser(req: Request, res: Response) {
    try {
      const user = await GetUser();

      return ResponseHandler(req, res, {
        user,
        message: 'User fetched successfully.',
      });
    } catch (error) {
      return ResponseHandler(req, res, null, error);
    }
  }

  public static async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await DeleteUser({
        id: +id,
      });

      return ResponseHandler(req, res, {
        user,
        message: 'User deleted successfully.',
      });
    } catch (error) {
      return ResponseHandler(req, res, null, error);
    }
  }
}
