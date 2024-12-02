const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

// JWT Middleware import
const { verifyToken } = require('../JWT/jwtConfigue');

// Import controllers
const clientController = require('../controller/clientController');
const adminController = require('../controller/adminController');

// payment file import
const { stripeSessionCreate, updatePaymentState_stripeWEBHOOK } = require('../paymentGateway');

// import validators
const { createQuotationBuildersCleaning, createQuotationCarpetSteamCleaning, createQuotationCommercialCleaning, createQuotationHouseCleaning, createQuotationWindowCleaning } = require('../validation/quotationValidation');
const validate = require('../validationHandler');

// email handlers add
const { QuotationEmailSentToCustomerHandler } = require('../email/emailHandler');


// Quotation
router.post('/quotation/builders', clientController.createQuotationBuildersCleaning);
router.post('/quotation/window', clientController.createQuotationWindowCleaning);
router.post('/quotation/carpetsteam', clientController.createQuotationCarpetSteamCleaning);
router.post('/quotation/commercial', clientController.createQuotationCommercialCleaning);
router.post('/quotation/house', clientController.createQuotationHouseCleaning);
router.get('/quotations', clientController.getQuotaions);
router.get('/quotations/new', clientController.getNewQuotaions);
router.get('/quotations/accepted', clientController.getAcceptedQuotaions);
router.get('/quotations/rejected', clientController.getRejectedQuotaions);
// router.put('/quotation/:quotationId', clientController.updateQuotaion, stripeSessionCreate, QuotationEmailSentToCustomerHandler);
router.put('/quotation/payment/:quotationId', clientController.updateQuotationPaymentStatus, PaymentConfirmationEmailForQuotationSentToCustomerHandler);
router.post('/webhook', bodyParser.raw({ type: 'application/json' }), updatePaymentState_stripeWEBHOOK); // update order payment

// admin
router.post('/admin', adminController.createAdmin);
router.post('/admin/login', adminController.adminLogin);

module.exports = router