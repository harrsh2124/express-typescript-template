import pino from 'pino';

import { env } from '../../env';

const levels = {
  debug: 10,
  notice: 30,
  info: 20,
  error: 50,
};

const streams: any = () => {
  const consoleStreams = Object.keys(levels).map((level) => {
    return {
      level,
      stream: process.stdout,
    };
  });

  return [...consoleStreams];
};

export const logger = pino(
  {
    level: env.logger.level || 'info',
    customLevels: levels,
    useOnlyCustomLevels: true,
    formatters: {
      level: (label) => {
        return { level: label };
      },
    },
  },
  pino.multistream(streams(), {
    levels,
    dedupe: true,
  })
);
