import { Request, Response } from 'express';
import { prisma } from '../../providers/db';
import { ResponseHandler } from '../middleware/ResponseHandler';
import { CreateTask } from '../services/task/CreateTask';
import { DeleteTask } from '../services/task/DeleteTask';
import { CreateUser } from '../services/user/CreateUser';

export class TaskController {
  public static async createTask(req: Request, res: Response) {
    try {
      const { title } = req.body.validatedData;
      const userId = 1;

      const task = await CreateTask({
        title,
        userId,
      });

      return ResponseHandler(req, res, {
        task,
        message: 'New task created successfully.',
      });
    } catch (error) {
      return ResponseHandler(req, res, null, error);
    }
  }

  public static async deleteTask(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const task = await DeleteTask({
        id: +id,
      });

      return ResponseHandler(req, res, {
        task,
        message: 'Task deleted successfully.',
      });
    } catch (error) {
      return ResponseHandler(req, res, null, error);
    }
  }
}
