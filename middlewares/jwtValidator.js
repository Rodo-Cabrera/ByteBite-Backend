const jwt = require('jsonwebtoken');

const jwtValidator = async (req, res, next) => {
  try {
    const token = req.headers['access-token'];
    if (!token) return res.status(400).json('Token inexistente');

    jwt.verify(token, process.env.JWTSECRET, (error, decodedToken) => {
      if (error) return res.status(401).json('Token inválido');
      console.log(decodedToken);
      next();
    })
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  jwtValidator
}