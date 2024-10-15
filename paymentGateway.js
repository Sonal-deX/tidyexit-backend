const stripe = require('stripe')("");
const Quotation = require('./model/quotation')

// stripe session create
exports.stripeSessionCreate = async (req, res, next) => {
    try {

        const quotation = await Quotation.findByPk(req.params.quotationId)


        var price = quotation.dataValues.price

        const line_items = [
            {
                price_data: {
                    currency: 'aud',
                    product_data: {
                        name: "Quotation Price",
                        images: ["https://www.zenko.com.au/icons/Zenko-logo-crop.png"]
                    },
                    unit_amount: price
                },
                quantity: 1
            }
        ]


        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            line_items,
            metadata: {
                quotationId: JSON.stringify(req.params.quotationId)
            },

            // put zenko link
            success_url: `https://www.zenko.com.au/orderConfirmed?state=1&orderId=${req.body.orderId}`,
            cancel_url: `https://www.zenko.com.au/checkout?state=0`
        })

        req.body.sessionUrl = session.url
        next();

    } catch (error) {
        next(error)
    }
};

exports.updatePaymentState_stripeWEBHOOK = async (req, res) => {
    console.log("Webhook Received");
    const sig = req.headers['stripe-signature'];
    const payload = req.body // Convert the raw buffer to string
    let event;

    try {
        event = await stripe.webhooks.constructEvent(payload, sig, process.env.WEBHOOK_KEY);
    } catch (err) {
        console.error('Failed to validate webhook signature:', err);
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
    }

    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed':
            let arr = []
            const session = event.data.object;
            const quotationData = JSON.parse(session.metadata.quotationId);
            const quotation = await Quotation.findByPk(quotationData)
            if (quotation) {
                await quotation.update({
                    paymentStatus: 1
                })
                break;
            }
        default:
            console.log(`Unhandled event type ${event.type}`);
            break;
    }

    // Respond to Stripe to acknowledge receipt of the event
    res.status(200).send('Received');
};
