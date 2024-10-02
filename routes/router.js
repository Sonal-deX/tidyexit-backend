const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// JWT Middleware import
const { verifyToken, adminOnly, verifyTokenAdmin } = require('../JWT/jwtConfigue');

// image upload middleware export
const { handleImageUpload, upload, deleteImage, deleteImages } = require('../imageMiddleware');

// Import controllers
const userController = require('../controller/userController');
const productController = require('../controller/productController');
const imageController = require('../controller/imageController');

// import validators
const { createUser, getUserByemail, getUserByType, updateUserById, deleteUser } = require('../validation/userValidation')


const validate = require('../validationHandler')

// LOGIN Routes admin
router.get('/admin/OTP', verifyTokenAdmin, adminOnly, adminController.getOTP); // admin create route
router.post('/admin/create', verifyTokenAdmin, adminOnly, adminController.createAdmin); // admin signup
router.post('/admin/login', adminController.adminLogin); // admin login route