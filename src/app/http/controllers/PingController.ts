import { Request, Response } from 'express';
import { prisma } from '../../providers/db';

import { logger } from '../../providers/logger';

export class PingController {
  public static async pong(req: Request, res: Response): Promise<Response> {
    logger.debug('Server Pinged');

    await prisma.user.create({
      data: {
        email: `john_${Math.random()}@yopmail.com`,
        name: 'John Doe',
        age: 21,
      },
    });
    const user = await prisma.user.findMany();
    return res.status(200).json({
      status: true,
      message: 'pong',
      user,
    });
  }
}
