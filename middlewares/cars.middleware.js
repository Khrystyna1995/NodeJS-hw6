const {ErrorHandler} = require("../error");
const { carService } = require('../services');
const {EXIST_CAR} = require("../error/Errors");

module.exports = {
    checkCarExist: async (req, res, next) => {
        try{
            const car = await carService.getCars();

            if(car) {
                throw new ErrorHandler(EXIST_CAR.message, EXIST_CAR.code);
            }

            next()
        } catch (e) {
            next(e);
        }
    },
};
