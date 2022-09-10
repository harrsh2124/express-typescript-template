import { Sequelize } from 'sequelize';
import { env } from '../../env';
import { logger } from './logger';

export const sequelizeConnection = new Sequelize({
  dialect: 'mysql',
  username: env.db.db_username,
  password: env.db.db_password,
  database: env.db.db_database,

  logQueryParameters: true,
});

export const initializeDbConnection = async () => {
  try {
    await sequelizeConnection.authenticate();
    sequelizeConnection.sync();
    logger.info('Connected to the database.');
  } catch (error) {
    logger.info('Unable to connect to the database.');
    console.log(error);
  }
};
