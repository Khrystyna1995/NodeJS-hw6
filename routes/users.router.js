const { Router } = require('express');

const { usersMiddleware, validationMiddleware } = require('../middlewares');
const { usersController } = require('../controllers');

const userRouter = Router();

userRouter.get('/', usersController.getUsers);
userRouter.post('/', validationMiddleware.checkUserValid, usersMiddleware.checkIsUserRegistered, usersController.createUser);

userRouter.use('/:userId', usersMiddleware.checkUserIdExist, validationMiddleware.checkUserIdValid);
userRouter.get('/:userId', usersController.getUserById);
userRouter.delete('/:userId', usersController.deleteUser);

module.exports = userRouter;
