const { Router } = require('express');
const { authController } = require('../controllers');
const { authMiddleware } = require('../middlewares');

const authRouter = Router();

authRouter.post('/', authMiddleware.checkPasswordHash,
    authMiddleware.checkUserExist, authMiddleware.checkPasswordHash,
    authController.authUser);

module.exports = authRouter;
