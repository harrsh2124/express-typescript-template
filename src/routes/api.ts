import { Request, Response, Router } from 'express';
import { PingController } from '../app/http/controllers/PingController';
import { logger } from '../app/providers/logger';
import { UserRouter } from './user.api';

export const router = Router();

// Import routes
router.get('/', PingController.pong);

// Add other routes
router.use('/user', UserRouter);

/**
 * 404 api redirects
 */
router.use(function (req: Request, res: Response) {
  logger.info(`Error 404: ${req.method} ${req.originalUrl} - Not Found`);

  res.status(404).send({
    status: false,
    message: 'Not found',
  });
});
