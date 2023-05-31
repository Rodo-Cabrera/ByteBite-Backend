const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const login = async (req, res) => {

  const { email, password } = req.body;
 
  try {
    const userMatch = await User.findOne({ email });
   
    if (!userMatch) return res.status(404).json('Email o contraseña inválidos');
   
    const passwordMatch = bcrypt.compareSync(password, userMatch.password)
    
    if (!passwordMatch) return res.status(404).json("Email o contraseña inválidos");

    const payload = {
      id: userMatch._id,
      name: userMatch.name,
      email: userMatch.email,
      role: userMatch.role
    };

    const token = jwt.sign(payload, process.env.JWTSECRET, {expiresIn: "1h"})

    const userName = userMatch.name;

    res.status(200).json({ msg: `Bienvenido/a, ${userName}!`, token, payload: JSON.stringify(payload) });


  } catch (error) {
    
    res.status(500).json(error.message);
 }


};

module.exports = {
  login
};