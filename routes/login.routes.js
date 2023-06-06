const { Router } = require('express');
const loginRoute = Router();
const  {login}  = require('../controllers/login.controller');

loginRoute.post('/', login);

module.exports = loginRoute;