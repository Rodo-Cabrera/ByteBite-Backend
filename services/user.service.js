const User = require('../models/user.model');

const getAllUsersService = async () => {
  return await User.find({}).select('-password');
};

const getBannedUsersService = async () => {
  return await User.find({disabled: true});
};

const getActiveUsersService = async () => {
  return await User.find({disabled: false});
};

const getAdminUsersService = async () => {
  return await User.find({role: 'admin'});
};

const getUsersByIdService = async (id) => {
  return await User.findById(id);
};

const createUserService = async (userData) => {
  const newUser = new User(userData);
  return await newUser.save();
};

const editUserService = async (id, userData) => {
  return await User.findByIdAndUpdate(id, userData);
};

const deleteUserService = async (id) => {
  return await User.findByIdAndDelete(id);
}

module.exports = {
  getAllUsersService,
  getUsersByIdService,
  createUserService,
  editUserService,
  deleteUserService,
  getActiveUsersService,
  getAdminUsersService,
  getBannedUsersService
}