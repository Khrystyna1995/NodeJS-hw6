const { ErrorHandler } = require('../../error');
const { BAD_REQUEST } = require('../../configs/error-codes');
const { userValidator, carValidator } = require('../../validators');

module.exports = {
    checkUserIdValid: (req, res, next) =>{
        try {
            const { id } = req.params;

            const { error } = userValidator.validate(id);

            if (error) {
                throw new ErrorHandler(error.details[0].message, BAD_REQUEST);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    checkUserValid: (req, res, next) => {
        try {
            const { error } = userValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(error.details[0].message, BAD_REQUEST);
            }

            next();
        } catch (e) {
            next(e);
        }

    },

    checkCarIdValid: async (req, res, next) => {
        try {
            const { id } = req.params;

            const { error } = carValidator.validate(id);

            if (error) {
                throw new ErrorHandler(error.details[0].message, BAD_REQUEST);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    checkCarModelValid: (req, res, next) => {
        try {
            const { error } = carValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(error.details[0].message, BAD_REQUEST);
            }

            next();
        } catch (e) {
            next(e);
        }

    },
}
