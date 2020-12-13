const { Router } = require('express');

const { carsMiddleware, validationMiddleware } = require('../middlewares');
const { carsController } = require('../controllers');

const carRouter = Router();

carRouter.get('/', carsController.getCars);
carRouter.post('/', validationMiddleware.checkCarModelValid, carsController.createCar);

carRouter.use('/:carId', carsMiddleware.checkCarExist, validationMiddleware.checkCarIdValid);
carRouter.get('/:carId', carsController.getCarById);
carRouter.delete('/:carId', carsController.deleteCar);

module.exports = carRouter;
