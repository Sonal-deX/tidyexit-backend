const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tidyexit', 'root', '', {
  host: process.env.DB_HOST,
  dialect: 'mysql', // or any other dialect
  port:4000
});

module.exports = sequelize;