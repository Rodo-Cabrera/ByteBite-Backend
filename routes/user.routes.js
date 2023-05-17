const { Router } = require('express');
const route = Router();
const { body } = require('express-validator');
const {
  getAllUsers,
  getUserById,
  getActiveUsers,
  getAdminUsers,
  getBannedUsers,
  createUser,
  editUser,
  deleteUser,
  disableUser,
  adminUser,
  unbanUser } = require('../controllers/user.controller')

route.get('/get-users', getAllUsers);

route.get('/get-admin-users', getAdminUsers);

route.get('/get-banned-users', getBannedUsers);

route.get('/get-active-users', getActiveUsers);

route.post('/create-user',
  body('email')
    .not()
    .isEmpty()
    .withMessage('Debes introducir un email')
    .isEmail()
    .withMessage('Formato de email inválido'),
    createUser)

route.get('/get-user-by-id/:id', getUserById)

route.patch('/edit-user/:id', editUser);

route.patch('/disable-user/:id', disableUser);

route.patch('/unban-user/:id', unbanUser)

route.patch('/user-admin/:id', adminUser);

route.delete('/delete-user/:id', deleteUser);


module.exports = route