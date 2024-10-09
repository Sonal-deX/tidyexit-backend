const Joi = require('joi');

exports.createQuotationBuildersCleaning = Joi.object({
    selectService: Joi.string().required(),
    date: Joi.date().required(),
    from: Joi.date().required(),
    to: Joi.date().required(),
    isFlexible: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    addressLine1: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zipCode: Joi.string().required(),
    email: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    businessName: Joi.string().required(),
    tellUsMore: Joi.string().required()
}).options({ allowUnknown: false });

exports.createQuotationWindowCleaning = Joi.object({
    selectService: Joi.string().required(),
    date: Joi.date().required(),
    from: Joi.date().required(),
    to: Joi.date().required(),
    isFlexible: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    addressLine1: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zipCode: Joi.string().required(),
    email: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    businessName: Joi.string().required(),
    tellUsMore: Joi.string().required(),
    type: Joi.string().required()
}).options({ allowUnknown: false });

exports.createQuotationCarpetSteamCleaning = Joi.object({
    selectService: Joi.string().required(),
    date: Joi.date().required(),
    from: Joi.date().required(),
    to: Joi.date().required(),
    isFlexible: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    addressLine1: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zipCode: Joi.string().required(),
    email: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    businessName: Joi.string().required(),
    tellUsMore: Joi.string().required(),
}).options({ allowUnknown: false });

exports.createQuotationCommercialCleaning = Joi.object({
    selectService: Joi.string().required(),
    date: Joi.date().required(),
    from: Joi.date().required(),
    to: Joi.date().required(),
    isFlexible: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    addressLine1: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zipCode: Joi.string().required(),
    email: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    businessName: Joi.string().required(),
    tellUsMore: Joi.string().required(),
    extra: Joi.string().required(),
    numberOfRooms: Joi.string().required(),
    numberOfBathrooms: Joi.string().required()
}).options({ allowUnknown: false });

exports.createQuotationHouseCleaning = Joi.object({
    selectService: Joi.string().required(),
    date: Joi.date().required(),
    from: Joi.date().required(),
    to: Joi.date().required(),
    isFlexible: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    addressLine1: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zipCode: Joi.string().required(),
    email: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    businessName: Joi.string().required(),
    tellUsMore: Joi.string().required(),
    propertyType: Joi.string().required(),
    numberOfBedrooms: Joi.string().required(),
    numberOfBathrooms: Joi.string().required(),
    extra: Joi.string().required(),
    otherExtra: Joi.string().required()
}).options({ allowUnknown: false });