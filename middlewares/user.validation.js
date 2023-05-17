const User = require('../models/user.model');

const emailValidator = async (email) => {
  const isExist = await User.find({ email });

  if (isExist.length !== 0) {
    throw new Error(`El email "${email}" ya se encuentra registrado`);
  };
  return false;
};

module.exports = {
  emailValidator
}