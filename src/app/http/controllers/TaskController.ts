import { Request, Response } from 'express';
import { prisma } from '../../providers/db';
import { ResponseHandler } from '../middleware/ResponseHandler';
import { CreateTask } from '../services/task/CreateTask';
import { CreateUser } from '../services/user/CreateUser';

export class TaskController {
  public static async createTask(req: Request, res: Response) {
    try {
      const { title } = req.body.validatedData;
      const userId = 1;

      const user = await CreateTask({
        title,
        userId,
      });

      return ResponseHandler(req, res, {
        user,
        message: 'New task created successfully.',
      });
    } catch (error) {
      return ResponseHandler(req, res, null, error);
    }
  }
}
