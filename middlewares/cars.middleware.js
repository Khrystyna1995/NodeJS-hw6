const {ErrorHandler} = require("../error");
const { carsService } = require('../services');
const { EXIST_CAR } = require("../error/Errors");

module.exports = {
    checkCarExist: async (req, res, next) => {
        try{
            const car = await carsService.getCars();

            if(car) {
                throw new ErrorHandler(EXIST_CAR.message, EXIST_CAR.code);
            }

            next()
        } catch (e) {
            next(e);
        }
    },
};
