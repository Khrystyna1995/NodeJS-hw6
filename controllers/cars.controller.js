const { carService }  = require('../../services');
const {CREATED_CAR, DELETED_CAR, REQUESTED_CAR} = require("../error/Errors");

module.exports = {
    createCar: async (req, res, next) => {
        try {
            await carService.createCar(req.body);

            res.status(CREATED_CAR.code).json(CREATED_CAR.message);
        } catch (e) {
            next(e);
        }

    },

    getCars: async (req, res, next) => {
        try {
            const { limit, page = 1, ...where } = req.query;
            const offset = limit * (page - 1);

            await carService.getCars(where, limit, offset );

            res.status(REQUESTED_CAR.code).json(REQUESTED_CAR.message);
        } catch (e) {
            next(e);
        }

    },

    getCarById: async (req, res, next) => {
        try {
            const { carId } = req.params;
            await carService.getUserById(carId);

            res.status(REQUESTED_CAR.code).json(REQUESTED_CAR.message);
        } catch (e) {
            next(e);
        }
    },

    deleteCar: async (req, res, next) => {
        try {
            const { carId } = req.params;
            await carService.deleteCar(carId);

            res.status(DELETED_CAR.code).json(DELETED_CAR.message);
        } catch (e) {
            next(e);
        }
    }
};
