import { Sequelize } from 'sequelize';
import { logger } from './logger';

export const dbConnection = new Sequelize({
  dialect: 'mysql',
  username: 'root',
  password: 'root',
  database: 'express-template',

  logging: (msg) => logger.debug(msg),
  logQueryParameters: true,
});

export const initializeDbConnection = async () => {
  try {
    await dbConnection.authenticate();
    logger.info('Connected to the database.');
  } catch (error) {
    logger.info('Unable to connect to the database.');
    console.log(error);
  }
};
