const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

// Secret key for JWT signing
const secretKey = 'tidyExit123';

// token creation
exports.createToken = (user) => {

    return new Promise((resolve, reject) => {
        jwt.sign({ user }, secretKey, (err, token) => {
            if (err) {
                reject('Failed to generate token');
            } else {
                resolve(token);
            }
        });
    });
}

// Middleware to verify JWT token
exports.verifyToken = (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    }
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }

        next()
    });
};