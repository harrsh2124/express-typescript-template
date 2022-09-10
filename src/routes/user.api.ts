import { Router } from 'express';
import { UserController } from '../app/http/controllers/UserController';

export const UserRouter = Router();

UserRouter.post('/create', UserController.createUser);
