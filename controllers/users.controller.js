const {updateUser} = require("../services/users.service");
const {usersService}  = require('../services');
const {CREATED, OK, BAD_REQUEST} = require('../configs/error-codes');
const { hash } = require('../helpers/password.helper');

module.exports = {
    createUser: async (req, res, next) => {
        try {
            const password = await hash(req.body.password);

            Object.assign(req.body, {password});
            await usersService.createUser(req.body);

            res.sendStatus(CREATED);
        } catch (e) {
            next(e);
        }

    },

    getUsers: async (req, res, next) => {
        try {
            const users = await usersService.getUsers();

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

    updateUser: async (req, res, next) => {
        try {
            const { user } = req.body;
            const newPassword = await hash(req.body.password);
            const UserId = req.params.id;

            const updated = await updateUser(UserId, user, newPassword);

            res.status(OK).json(updated);
        } catch (e) {
            next(e);
        }


    },

    deleteUser: async (req, res, next) => {
        try {
            const { userId } = req.params;
            await usersService.deleteUser(userId);

            res.status(BAD_REQUEST).json('Deleted user');
        } catch (e) {
            next(e);
        }
    }
};
