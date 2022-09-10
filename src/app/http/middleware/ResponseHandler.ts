import { Response } from 'express';
import _ from 'lodash';
import { logger } from '../../providers/logger';

export const ResponseHandler = (res: Response, data?: any, error?: any) => {
  let status = true;
  let message = _.get(data, 'message', '');

  if (error instanceof Error) {
    message = _.get(error, 'message', 'Something went wrong.');
    logger.error(message);

    status = false;
  }

  return res.json({
    status,
    data: {
      ...data,
      message,
    },
  });
};
