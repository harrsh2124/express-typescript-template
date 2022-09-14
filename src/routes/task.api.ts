import { Router } from 'express';
import { TaskController } from '../app/http/controllers/TaskController';
import { RequestValidator } from '../app/http/middleware/RequestValidator';
import { CreateTaskRequest } from '../app/http/requests/CreateTaskRequest';

export const TaskRouter = Router();

TaskRouter.post(
  '/create',
  RequestValidator(CreateTaskRequest),
  TaskController.createTask
);
