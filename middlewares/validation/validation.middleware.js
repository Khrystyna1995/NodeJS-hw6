const {NOT_VALID_ID, NOT_VALID_BODY} = require("../../error/Errors");
const {ErrorHandler} = require("../../error");

module.exports = {
    checkUserIdValid: (req, res, next) =>{
        try {
            const { id } = req.params;

            if (!id || id <= 0 || !Number.isInteger(+id)) {
                throw new ErrorHandler(NOT_VALID_ID.message, NOT_VALID_ID.code);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    checkUserValid: (req, res, next) => {
        try {
            const { email, name, password, ...other } = req.body;

            if (!email && email.length < 7) {
                throw new ErrorHandler(NOT_VALID_BODY.message, NOT_VALID_BODY.code);
            }

            if (!name && name.length < 2) {
                throw new ErrorHandler(NOT_VALID_BODY.message, NOT_VALID_BODY.code);
            }

            if (password && password.length < 8) {
                throw new ErrorHandler(NOT_VALID_BODY.message, NOT_VALID_BODY.code);
            }

            if (Object.values(other).length) {
                throw new ErrorHandler(NOT_VALID_BODY.message, NOT_VALID_BODY.code);
            }

            next();
        } catch (e) {
            next(e);
        }

    },

    checkCarIdValid: async (req, res, next) => {
        try {
            const { id } = req.params;

            if (!id || id <= 0 || !Number.isInteger(+id)) {
                throw new ErrorHandler(NOT_VALID_ID.message, NOT_VALID_ID.code);
            }

            next();
        } catch (e) {
            next(e);
        }
    },
}
