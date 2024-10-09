const Quoatation = require('../model/quotation')

// create address
exports.createQuotationBuildersCleaning = async (req, res, next) => {

    var {
        selectService,
        date,
        from,
        to,
        isFlexible,
        firstName,
        lastName,
        addressLine1,
        city,
        state,
        zipCode,
        email,
        phoneNumber,
        businessName,
        tellUsMore
    } = req.body;

    try {
        const newQuoatation = await Quoatation.create({
            selectService,
            date,
            from,
            to,
            isFlexible,
            firstName,
            lastName,
            addressLine1,
            city,
            state,
            zipCode,
            email,
            phoneNumber,
            businessName,
            tellUsMore,
            status: null
        });
        res.redirect('https://www.youtube.com/watch?v=0CTp1a-aCUM')

    } catch (error) {
        next(error)
    }

};

exports.createQuotationWindowCleaning = async (req, res, next) => {

    var {
        selectService,
        date,
        from,
        to,
        isFlexible,
        firstName,
        lastName,
        addressLine1,
        city,
        state,
        zipCode,
        email,
        phoneNumber,
        businessName,
        tellUsMore,
        type
    } = req.body;

    try {
        const newQuoatation = await Quoatation.create({
            selectService,
            date,
            from,
            to,
            isFlexible,
            firstName,
            lastName,
            addressLine1,
            city,
            state,
            zipCode,
            email,
            phoneNumber,
            businessName,
            tellUsMore,
            type,
            status: null
        });
        res.redirect('https://www.youtube.com/watch?v=0CTp1a-aCUM')

    } catch (error) {
        next(error)
    }

};

exports.createQuotationCarpetSteamCleaning = async (req, res, next) => {

    var {
        selectService,
        date,
        from,
        to,
        isFlexible,
        firstName,
        lastName,
        addressLine1,
        city,
        state,
        zipCode,
        email,
        phoneNumber,
        businessName,
        tellUsMore
    } = req.body;

    try {
        const newQuoatation = await Quoatation.create({
            selectService,
            date,
            from,
            to,
            isFlexible,
            firstName,
            lastName,
            addressLine1,
            city,
            state,
            zipCode,
            email,
            phoneNumber,
            businessName,
            tellUsMore,
            status: null
        });
        res.redirect('https://www.youtube.com/watch?v=0CTp1a-aCUM')

    } catch (error) {
        next(error)
    }

};

exports.createQuotationCommercialCleaning = async (req, res, next) => {

    var {
        selectService,
        date,
        from,
        to,
        isFlexible,
        firstName,
        lastName,
        addressLine1,
        city,
        state,
        zipCode,
        email,
        phoneNumber,
        businessName,
        tellUsMore,
        extra,
        numberOfRooms,
        numberOfBathrooms
    } = req.body;

    try {
        const newQuoatation = await Quoatation.create({
            selectService,
            date,
            from,
            to,
            isFlexible,
            firstName,
            lastName,
            addressLine1,
            city,
            state,
            zipCode,
            email,
            phoneNumber,
            businessName,
            tellUsMore,
            extra,
            numberOfRooms,
            numberOfBathrooms,
            status: null
        });
        res.redirect('https://www.youtube.com/watch?v=0CTp1a-aCUM')

    } catch (error) {
        next(error)
    }

};

exports.createQuotationHouseCleaning = async (req, res, next) => {

    var {
        selectService,
        date,
        from,
        to,
        isFlexible,
        firstName,
        lastName,
        addressLine1,
        city,
        state,
        zipCode,
        email,
        phoneNumber,
        businessName,
        tellUsMore,
        propertyType,
        numberOfBedrooms,
        numberOfBathrooms,
        extra,
        otherExtra
    } = req.body;

    try {
        const newQuoatation = await Quoatation.create({
            selectService,
            date,
            from,
            to,
            isFlexible,
            firstName,
            lastName,
            addressLine1,
            city,
            state,
            zipCode,
            email,
            phoneNumber,
            businessName,
            tellUsMore,
            propertyType,
            numberOfBedrooms,
            numberOfBathrooms,
            extra,
            otherExtra,
            status: null
        });
        res.redirect('https://www.youtube.com/watch?v=0CTp1a-aCUM')

    } catch (error) {
        next(error)
    }

};

// get all quotations
exports.getQuotaions = async (req, res, next) => {
    try {
        const address = await Quoatation.findAll();

    } catch (error) {
        next(error)
    }
};

// get new quotations
exports.getNewQuotaions = async (req, res, next) => {
    try {
        const quoatation = await Quoatation.findAll({
            where: {
                status: null
            }
        });

        if (quoatation) {
            res.status(200).json(quoatation)
        } else {
            res.status(404).json({ message: "Empty New Quoatations" })
        }

    } catch (error) {
        next(error)
    }
};

// get accepted quotations
exports.getAcceptedQuotaions = async (req, res, next) => {
    try {
        const quoatation = await Quoatation.findAll({
            where: {
                status: 1
            }
        });

        if (quoatation) {
            res.status(200).json(quoatation)
        } else {
            res.status(404).json({ message: "Empty Quoatations" })
        }

    } catch (error) {
        next(error)
    }
};

// get rejected quotations
exports.getRejectedQuotaions = async (req, res, next) => {
    try {
        const quoatation = await Quoatation.findAll({
            where: {
                status: 0
            }
        });

        if (quoatation) {
            res.status(200).json(quoatation)
        } else {
            res.status(404).json({ message: "Empty Quoatations" })
        }

    } catch (error) {
        next(error)
    }
};

// update quotation by admin
exports.updateQuotaion = async (req, res, next) => {
    const quotationId = req.params.quotationId
    try {
        const quoatation = await Quoatation.findOne({
            where: {
                quotationId
            }
        });

        await quoatation.update({
            // put here what came from admin dashboard
        })

        if (quoatation) {
            res.status(200).json(quoatation)
        }

    } catch (error) {
        next(error)
    }
};

