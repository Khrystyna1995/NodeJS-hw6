const { OK } = require('../configs/error-codes');

module.exports = {
    authUser: async (req, res, next) => {
        try {
            const user = req.body;

            delete user.password;

            res.status(OK).json(user);
        } catch (e) {
            next(e);
        }
        },
};
