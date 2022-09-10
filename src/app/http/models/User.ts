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

  fullName: {
    type: DataTypes.VIRTUAL,
    get() {
      return `${this.getDataValue('firstName')} ${this.getDataValue(
        'lastName'
      )}`;
    },
    set(value) {
      throw new Error('Do not try to set the `fullName` value!');
    },
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
