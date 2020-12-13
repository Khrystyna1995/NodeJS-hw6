const { carService }  = require('../services');
const {CREATED, OK, BAD_REQUEST } = require("../configs/error-codes");

module.exports = {
    createCar: async (req, res, next) => {
        try {
           const car = await carService.createCar({...req.body});

            res.status(CREATED.code).json(car);
        } catch (e) {
            next(e);
        }

    },

    getCars: async (req, res, next) => {
        try {
            const cars = await carService.getCars();

            res.status(OK).json(cars);
        } catch (e) {
            next(e);
        }

    },

    getCarById: async (req, res, next) => {
        try {
            const { carId } = req.params;
            await carService.getUserById(carId);

            res.status(OK);
        } catch (e) {
            next(e);
        }
    },

    deleteCar: async (req, res, next) => {
        try {
            const { carId } = req.params;
            await carService.deleteCar(carId);

            res.status(BAD_REQUEST).json('Deleted car');
        } catch (e) {
            next(e);
        }
    }
};
