import { Router } from 'express';
import { UserController } from '../app/http/controllers/UserController';
import { RequestValidator } from '../app/http/middleware/RequestValidator';
import { CreateUserRequest } from '../app/http/requests/CreateUserRequest';

export const UserRouter = Router();

UserRouter.post(
  '/create',
  RequestValidator(CreateUserRequest),
  UserController.createUser
);
