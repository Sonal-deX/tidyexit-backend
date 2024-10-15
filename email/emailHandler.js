const nodemailer = require('nodemailer');
const Order = require('./model/order');


// Create a transporter with Gmail configuration
const transporter = nodemailer.createTransport({
    host: 'zenko.com.au',
    port: 465,
    secure: true,
    auth: {
        user: 'support@zenko.com.au', // your Gmail email address
        pass: 'support123456@QWer'// your Gmail email password
    }
});

exports.QuotationEmailSentToAdmin = async (order) => {

    if (order.dataValues.discountPrice) {
        var discount = order.dataValues.discountPrice
    } else {
        var discount = 0
    }

    // Generate the order summary HTML
    const orderSummaryHTML = order.orderItems.map(item => `
        <tr>
            <td>
                <img src="${item.product.images[0].dataValues.image1}" alt="${item.product.dataValues.name}" class="product-image">
                <span class="product-name">${item.product.dataValues.name}</span>
            </td>
            <td class="product-price">$${item.product.dataValues.finalPrice}</td>
        </tr>
    `).join('');

    const mailOptions = {
        from: 'support@zenko.com.au', // Sender email address
        to: `${order.user.dataValues.email}`,
        subject: `Zenko - Order Confirmation`,
        html: `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Order Confirmation</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #fff;
                    padding: 20px;
                    border: 1px solid #ddd;
                }
                .header {
                    text-align: center;
                    padding: 20px 0;
                }
                .header img {
                    max-width: 150px;
                }
                .order-details {
                    margin-top: 20px;
                }
                .order-summary, .customer-info {
                    margin-bottom: 20px;
                }
                .order-summary table, .customer-info table {
                    width: 100%;
                    border-collapse: collapse;
                }
                .order-summary th, .order-summary td, .customer-info th, .customer-info td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }
                .order-summary th {
                    background-color: #f4f4f4;
                }
                .notice {
                    background-color: #f9f9f9;
                    padding: 10px;
                    border: 1px solid #ddd;
                    margin-top: 20px;
                }
                .footer {
                    text-align: center;
                    padding: 10px;
                    background-color: #f4f4f4;
                    margin-top: 0px;
                }
                .btn {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #007bff;
                    color: #fff;
                    text-decoration: none;
                    border-radius: 4px;
                    margin-top: 20px;
                }
                .product-image {
                    width: 100px;
                    height: 100px;
                    object-fit: cover;
                    margin-right: 10px;
                    vertical-align: middle;
                }
                .product-name {
                    display: inline-block;
                    max-width: calc(100% - 110px); /* Adjusting for image width and margin */
                    vertical-align: middle;
                    word-wrap: break-word;
                }
                .product-price {
                    white-space: nowrap;
                    vertical-align: middle;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <img src="https://www.zenko.com.au/icons/Zenko-logo-crop.png" alt="ZENKO">
                </div>
                <div class="order-details">
                    <h1>Thank you for your purchase!</h1>
                    <p>Order ID #${order.dataValues.orderId}</p>
                    <p>Delivery methods cannot be changed once the order has been confirmed. Thank you for understanding!</p>
                    <a href="https://www.zenko.com.au/">Visit our store</a>
                </div>
                <div class="order-summary">
                    <h2>Order summary</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${orderSummaryHTML}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Subtotal</td>
                                <td>$${order.dataValues.orderTotalPrice}</td>
                            </tr>
                            <tr>
                                <td>Discount</td>
                                <td>$${discount}</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td>$${order.dataValues.shippingTotal}</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>$${order.dataValues.finalPrice}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div class="customer-info">
                    <h2>Customer information</h2>
                    <table>
                        <tr>
                            <th>Shipping address</th>
                        </tr>
                        <tr>
                            <td>${order.dataValues.address.dataValues.fName}  ${order.dataValues.address.dataValues.fName} <br> ${order.dataValues.address.dataValues.addLine1} <br> ${order.dataValues.address.dataValues.postCode} <br> ${"Australia"}</td>
                        </tr>
                    </table>
                </div>
                <div class="notice">
                    <strong>NOTICE DURING SALE TIMES:</strong> Please note that order processing delays will occur during sale times. We expect to complete all orders in 7 business days from the date of order. We appreciate your patience regarding this matter.
                </div>
            </div>
            <div class="footer">
                <p>&copy; 2024 Zenko. All rights reserved.</p>
                <p>This email is auto-generated. Please do not reply to this message.</p>
            </div>
        </body>
        </html>`
    };

    try {
        const email = await transporter.sendMail(mailOptions);
        if (email.accepted.length != 0) {
            await Order.update(
                { isEmailSent: 1 },
                {
                    where: {
                        orderId: order.dataValues.orderId
                    }
                }
            )
        }
        // res.status(200)
    } catch (error) {
        console.log(error);
    }
    
}