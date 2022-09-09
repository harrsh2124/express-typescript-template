import { Request, Response } from 'express';

import { logger } from '../../../providers/logger';

export class PingController {
  public static async pong(req: Request, res: Response): Promise<Response> {
    logger.debug('Server Pinged');
    return res.status(200).json({
      status: true,
      message: 'pong',
    });
  }
}
