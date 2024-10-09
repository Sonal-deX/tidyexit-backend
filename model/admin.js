// user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Admin = sequelize.define('admin', {
    adminId: {
        type: DataTypes.INTEGER,
        primaryKey: true, // setting userId as primary key
        autoIncrement: true, // if you want it to auto-increment
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

module.exports = Admin;