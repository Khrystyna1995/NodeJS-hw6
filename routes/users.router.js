const { Router } = require('express');

const { usersMiddleware, validationMiddleware } = require('../middlewares');
const { usersController } = require('../controllers');

const userRouter = Router();

userRouter.get('/', usersController.getUsers);
userRouter.post('/', validationMiddleware.checkUserValid, usersMiddleware.checkIsUserRegistered, validationMiddleware.checkUserIdValid, usersController.createUser);
userRouter.put('/id', usersMiddleware.checkUserIdExist, validationMiddleware.checkUserUpdateValid, usersController.updateUser);
userRouter.get('/:userId', validationMiddleware.checkUserIdValid, usersController.getUserById);
userRouter.delete('/:userId', usersController.deleteUser);

module.exports = userRouter;
