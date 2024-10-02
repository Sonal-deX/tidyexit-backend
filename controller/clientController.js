// const Address = require('../model/address');
// const User = require('../model/user');

// create address
exports.createAddress = async (req, res, next) => {

    var {
        userId,
        phoneNumber,
        addLine1,
        addLine2,
        suburb,
        state,
        postCode,
    } = req.body;

    try {
        const newAddress = await Address.create({
            userUserId: userId,
            phoneNumber,
            addLine1,
            addLine2,
            suburb,
            state,
            postCode,
        });
        res.status(201).json(newAddress);
    } catch (error) {
        next(error)
    }

};

// get certain address
exports.getAddressById = async (req, res, next) => {
    const addressId = req.params.id;
    try {
        const address = await Address.findByPk(addressId);
        if (!address) {
            var error = new Error('Address not found')
            error.status = 404
            next(error)
        } else {
            res.status(200).json(address);
        }
    } catch (error) {
        next(error)
    }
};

