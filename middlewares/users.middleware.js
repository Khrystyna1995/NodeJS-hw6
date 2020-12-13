const {ErrorHandler} = require("../error");
const { usersService } = require('../services');
const { EXIST_USER, NOT_EXIST_USER } = require("../error/Errors");

module.exports = {
    checkIsUserRegistered: async (req, res, next) => {
        try{
            const { email } = req.body;
            const [user] = await usersService.getUsers({email});

            if(user) {
                throw new ErrorHandler(EXIST_USER.message, EXIST_USER.code);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    checkUserIdExist: async (req, res, next) => {
        try{
            const { id } = req.params;
            const user = await usersService.getUserById(id);


            if(!user) {
                throw new ErrorHandler(NOT_EXIST_USER.message, NOT_EXIST_USER.code);
            }

            req.user = user;
            next();
        } catch (e) {
            next(e);
        }
    },
};
