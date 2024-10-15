const cron = require('cron')
const Quotation = require('../model/quotation');
const { QuotationEmailSentToAdmin } = require('./emailHandler')

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
                    QuotationEmailSentToAdmin(item)
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
                    QuotationEmailSentToAdmin(item)
                })
            } catch (error) {
                console.error('Error updating tokens:', error);
            }
        });

    } catch (error) {
        console.error('Error updating tokens:', error);
    }
}



