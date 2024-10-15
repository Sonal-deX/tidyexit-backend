const express = require('express');
const router = express.Router();

// JWT Middleware import
const { verifyToken } = require('../JWT/jwtConfigue');

// Import controllers
const clientController = require('../controller/clientController');
const adminController = require('../controller/adminController');

// payment file import
const { stripeSessionCreate, updatePaymentState_stripeWEBHOOK } = require('../paymentGateway');

// import validators
const { createQuotationBuildersCleaning, createQuotationCarpetSteamCleaning, createQuotationCommercialCleaning, createQuotationHouseCleaning, createQuotationWindowCleaning } = require('../validation/quotationValidation')
const validate = require('../validationHandler');


// Quotation
router.post('/quotation/builders', clientController.createQuotationBuildersCleaning);
router.post('/quotation/window', clientController.createQuotationWindowCleaning);
router.post('/quotation/carpetsteam', clientController.createQuotationCarpetSteamCleaning);
router.post('/quotation/commercial', clientController.createQuotationCommercialCleaning);
router.post('/quotation/house', clientController.createQuotationHouseCleaning);
router.get('/quotations', verifyToken, clientController.getQuotaions);
router.get('/quotations/new', verifyToken, clientController.getNewQuotaions);
router.get('/quotations/accepted', verifyToken, clientController.getAcceptedQuotaions);
router.get('/quotations/rejected', verifyToken, clientController.getRejectedQuotaions);
router.put('/quotation/:quotationId', verifyToken, clientController.updateQuotaion , stripeSessionCreate);
router.post('/webhook', bodyParser.raw({ type: 'application/json' }), updatePaymentState_stripeWEBHOOK); // update order payment

// admin
router.post('/admin', adminController.createAdmin);
router.post('/admin/login', adminController.adminLogin);



