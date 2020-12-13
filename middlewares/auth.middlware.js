const { BAD_REQUEST } = require("../configs/error-codes");
const { NOT_EXIST_USER, NOT_VALID_BODY } = require('../error/Errors');
const { ErrorHandler} = require('../error');
const { findUserByParams } = require('../services/auth.service');
const { compare } = require('../helpers/password.helper');
const { authValidator } = require('../validators');

module.exports = {
    checkUserExist: async (req, res, next) => {
        try {
            const { email } = req.body;

            const user = await findUserByParams({ email });

            if (!user) {
                throw new ErrorHandler(NOT_EXIST_USER.message, NOT_EXIST_USER.code);
            }
        } catch (e) {
            next(e);
        }
    },

    checkUserValid: (req, res, next) => {
        try {
            const { error } = authValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(error.details[0].message, BAD_REQUEST);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    checkPasswordHash: async (req, res, next) => {
        try {
            const { password, email } = req.body;

            const user = await findUserByParams({ email });

            const isPasswordRight = await compare(password, user.password);

            if (!isPasswordRight) {
                throw new ErrorHandler(NOT_VALID_BODY.message, NOT_VALID_BODY.code);
            }

            next();
        } catch (e) {
            next(e);
        }
    },
};
