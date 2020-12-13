const { userService } = require('../services');
const {CREATED, OK, BAD_REQUEST} = require('../configs/error-codes');
const { hash } = require('../helpers/password.helper');

module.exports = {
    createUser: async (req, res, next) => {
        try {
            const password = await hash(req.body.password);

            Object.assign(req.body, {password});
            await userService.createUser(req.body);

            res.sendStatus(CREATED);
        } catch (e) {
            next(e);
        }

    },

    getUsers: async (req, res, next) => {
        try {
            const users = await userService.getUsers();

            res.json(users);
        } catch (e) {
            next(e);
        }

    },

    getUserById: async (req, res, next) => {
        try {
            await res.json(req.user);

            res.status(OK);
        } catch (e) {
            next(e);
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const { userId } = req.params;
            await userService.deleteUser(userId);

            res.status(BAD_REQUEST).json('Deleted user');
        } catch (e) {
            next(e);
        }
    }
};
