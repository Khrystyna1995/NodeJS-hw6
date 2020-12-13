const { carService } = require('../../services');
const {EXIST_CAR} = require("../error/Errors");

module.exports = {
    checkCarExist: async (req, res, next) => {
        try{
            const car = await carService.getCars();

            if(car) {
                throw new Error('This car already exist');
            }

            res.status(EXIST_CAR.code).json(EXIST_CAR.message);
        } catch (e) {
            next(e);
        }
    },
};
