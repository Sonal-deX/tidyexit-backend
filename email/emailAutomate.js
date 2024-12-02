const cron = require('cron')
const Quotation = require('../model/quotation');
const { QuotationEmailSentToAdminHandler , QuotationEmailSentToCustomerHandler } = require('./emailHandler')

exports.QuotationEmailSentToAdmin = async () => {
    try {
        cron.schedule('*/10 * * * * ', async () => {
            try {
                const quotation = await Quotation.findAll({
                    where: {
                        isQuotationEmailSentToAdmin: 0
                    }
                })
                quotation.map((item) => {
                    QuotationEmailSentToAdminHandler(item)
                })
            } catch (error) {
                console.error('Error updating tokens:', error);
            }
        });

    } catch (error) {
        console.error('Error updating tokens:', error);
    }
}

exports.QuotationEmailSentToCustomer = async () => {
    try {
        cron.schedule('*/10 * * * * ', async () => {
            try {
                const quotation = await Quotation.findAll({
                    where: {
                        isQuotationEmailSentToCustomer: 0,
                        status: 1
                    }
                })
                quotation.map((item) => {
                    QuotationEmailSentToCustomerHandler(item)
                })
            } catch (error) {
                console.error('Error updating tokens:', error);
            }
        });

    } catch (error) {
        console.error('Error updating tokens:', error);
    }
}

exports.PaymentConfirmationEmailForQuotationSentToCustomer = async () => {
    try {
        cron.schedule('*/10 * * * * ', async () => {
            try {
                const quotation = await Quotation.findAll({
                    where: {
                        isPaymentConfirmationEmailForQuotationSentToCustomer: 0,
                        status: 1
                    }
                })
                quotation.map((item) => {
                    PaymentConfirmationEmailForQuotationSentToCustomerHandler(item)
                })
            } catch (error) {
                console.error('Error updating tokens:', error);
            }
        });

    } catch (error) {
        console.error('Error updating tokens:', error);
    }
}



