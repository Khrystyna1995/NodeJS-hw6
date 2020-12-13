const { userService } = require('../../services');
const {EXIST_USER, NOT_EXIST_USER} = require("../error/Errors");

module.exports = {
    checkIsUserRegistered: async (req, res, next) => {
        try{
            const { email } = req.body;
            const [user] = await userService.getUsers({email}, 1);

            if(user) {
                throw new Error('This user already exist');
            }

            res.status(EXIST_USER.code).json(EXIST_USER.message);
        } catch (e) {
            next(e);
        }
    },

    checkUserIdExist: async (req, res, next) => {
        try{
            const { id } = req.params;
            const user = await userService.getUserById(id);


            if(!user) {
                throw new Error('This user is not exist');
            }

            req.user = user;
            res.status(NOT_EXIST_USER.code).json(NOT_EXIST_USER.message);
        } catch (e) {
            next(e);
        }
    },
};
