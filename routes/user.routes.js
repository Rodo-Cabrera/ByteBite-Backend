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
  unbanUser, 
  uploadAvatar} = require('../controllers/user.controller');

const { emailValidator } = require('../middlewares/user.validation');
const { jwtValidator, jwtValidatorAdmin, jwtValidatorOwner } = require('../middlewares/jwtValidator');
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

route.get('/get-users', jwtValidatorAdmin, getAllUsers);

route.get('/get-admin-users', getAdminUsers);

route.get('/get-banned-users', getBannedUsers);

route.get('/get-active-users', getActiveUsers);

route.post(
  "/create-user",
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Debes introducir un email")
    .isEmail()
    .withMessage("Formato de email inválido")
    .custom(emailValidator),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Introduce una contraseña")
    .isLength({ min: 6, max: 50 })
    .withMessage("La contraseña debe tener al menos 6 caracteres.")
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,50}$/)
    .withMessage("La contraseña solo puede ser de caracter alfanumérico."),
  createUser
);

route.get('/get-user-by-id/:id', getUserById)

route.patch('/edit-user/:id', jwtValidatorAdmin, editUser);

route.patch('/disable-user/:id', jwtValidatorAdmin, disableUser);

route.patch('/unban-user/:id', jwtValidatorAdmin, unbanUser)

route.patch('/user-admin/:id', jwtValidatorOwner, adminUser);

route.delete('/delete-user/:id', deleteUser);

route.post("/upload-avatar", upload.single("avatar"), jwtValidator, uploadAvatar);



module.exports = route