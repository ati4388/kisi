const express = require('express');
const loginRouter = express.Router();
const loginController = require('../controllers/logincontroller');

loginRouter.get('/',loginController.loginGet);

loginRouter.get('/login',loginController.loginGet);

loginRouter.post('/login',loginController.loginPost);

module.exports = loginRouter;
