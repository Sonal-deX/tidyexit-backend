const Admin = require('../model/admin')
const bcrypt = require('bcrypt');
const { createToken } = require('../JWT/jwtConfigue')

// create admin
exports.createAdmin = async (req, res, next) => {
    var { email, password } = req.body;

    try {

        bcrypt.genSalt(10, async (err, salt) => {
            if (err) {
                throw err;
            } else {
                // Hash the password using the generated salt
                bcrypt.hash(password, salt, async function (err, hash) {
                    if (err) {
                        throw err;
                    } else {
                        password = hash
                        try {
                            const newAdmin = await Admin.create({
                                email,
                                password,
                            });
                            if (newAdmin) {
                                res.status(201).json({ message: "Admin Created Successfully" })
                            }
                        } catch (error) {
                            error.status = 403
                            next(error)
                        }
                    }
                });
            }
        });

    } catch (error) {
        next(error)
    }

};

// admin login
exports.adminLogin = async (req, res, next) => {
    const { email, password } = req.body;
    try {

        const admin = await Admin.findOne({
            where: {
                email
            }
        })
        if (admin) {
            const pwCompare = await bcrypt.compare(password, admin.password)
            if (pwCompare) {
                createToken(admin)
                    .then(token => {
                        res.json({ token, email: admin.email });
                        res.status(204);
                    })
                    .catch(error => {
                        var error = new Error('Error generating token')
                        error.status = 500
                        next(error)
                    });
            } else {
                next({ stack: 'Admin Password Wrong try again', message: 'Admin Password Wrong try again', status: 401 })
            }
        } else {
            next({ stack: 'Admin not found with given email', message: 'Admin not found with given email', status: 404 })
        }

    } catch (error) {
        next(error)
    }
};