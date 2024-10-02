const Joi = require('joi');
const commonValidations = require('./reusableComponent')

exports.createUser = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
}).options({ allowUnknown: false });