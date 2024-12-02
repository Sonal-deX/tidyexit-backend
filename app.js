const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// request allows
// Apply JSON parsing Middleware to all non-webhook routes
app.use((req, res, next) => {
    if (req.originalUrl.startsWith('/webhook')) {
        next();
    } else {
        bodyParser.json()(req, res, next);
        app.use(bodyParser.urlencoded({ extended: true }));
    }
});

// error handling middleware import
const errorHandler = require('./errorHandler')

// accept requests from defined origin
app.use(cors());

// Routes
const routes = require('./routes/router');

// email automates
const {QuotationEmailSentToAdmin , QuotationEmailSentToCustomer} = require('./email/emailAutomate')
// QuotationEmailSentToAdmin()

// Use routes
app.use('/', routes);

// Use error handler
app.use(errorHandler)

const Admin = require('./model/admin')
const Quotation = require('./model/quotation')
const Sequelize = require('./sequelize');

(async () => {
    try {
        // Note: Remove `alter: true` when deploying to production
        await Sequelize.sync({ force: true, logging: false });
        console.log('Models synced successfully.');
    } catch (error) {
        console.error('Error syncing models:', error);
    }
})();

// Server setup
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
