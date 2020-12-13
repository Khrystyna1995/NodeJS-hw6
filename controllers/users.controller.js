const { userService } = require('../../services');
const {CREATED_USER, DELETED_USER, REQUESTED_USER} = require("../../error/Errors");

module.exports = {
    createUser: async (req, res, next) => {
        try {
            await userService.createUser(req.body);

            res.status(CREATED_USER.code).json(CREATED_USER.message);
        } catch (e) {
            next(e);
        }

    },

    getUsers: async (req, res, next) => {
        try {
            const { limit, page = 1, ...where } = req.query;
            const offset = limit * (page - 1);

            await userService.getUsers(where, limit, offset );

            res.status(REQUESTED_USER.code).json(REQUESTED_USER.message);
        } catch (e) {
            next(e);
        }

    },

    getUserById: async (req, res, next) => {
        try {
            await res.json(req.user);

            res.status(REQUESTED_USER.code).json(REQUESTED_USER.message);
        } catch (e) {
            next(e);
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const { userId } = req.params;
            await userService.deleteUser(userId);

            res.status(DELETED_USER.code).json(DELETED_USER.message);
        } catch (e) {
            next(e);
        }
    }
};
