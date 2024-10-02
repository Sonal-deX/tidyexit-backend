// user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Client = sequelize.define('client', {
  clientId: {
    type: DataTypes.INTEGER,
    primaryKey: true, // setting userId as primary key
    autoIncrement: true, // if you want it to auto-increment
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = Client;