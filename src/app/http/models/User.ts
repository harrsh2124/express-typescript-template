import { DataTypes } from 'sequelize';
import { sequelizeConnection } from '../../providers/db';

export const User = sequelizeConnection.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
