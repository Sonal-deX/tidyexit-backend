// user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Quotation = sequelize.define('quotation', {
  quotationId: {
    type: DataTypes.INTEGER,
    primaryKey: true, // setting userId as primary key
    autoIncrement: true, // if you want it to auto-increment
  },
  selectService: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  from: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  to: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  isFlexible: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  addressLine1: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  zipCode: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  businessName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tellUsMore: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  type: {
    // window cleaning 
    type: DataTypes.STRING,
    allowNull: true,
  },
  numberOfRooms: {
    // commercial cleaning , house cleaning
    type: DataTypes.STRING,
    allowNull: true,
  },
  numberOfBathrooms: {
    // commercial cleaning , house cleaning
    type: DataTypes.STRING,
    allowNull: true,
  },
  numberOfBedrooms: {
    // house cleaning
    type: DataTypes.STRING,
    allowNull: true,
  },
  extra: {
    // commercial cleaning , house cleaning
    type: DataTypes.STRING,
    allowNull: true,
  },
  propertyType: {
    // house cleaning
    type: DataTypes.STRING,
    allowNull: true,
  },
  otherExtra: {
    // house cleaning
    type: DataTypes.STRING,
    allowNull: true,
  },
  isEmailSentToAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  isQuotationEmailSentToCustomer: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  paymentStatus: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  adminMessage: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  status: {
    // 1 if accept 0 if reject
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
});

module.exports = Quotation;