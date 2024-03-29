const jwt = require('jsonwebtoken');

const jwtValidator = async (req, res, next) => {
  try {
    const token = req.headers['access-token'];
    if (!token) return res.status(400).json('Token inexistente');

    jwt.verify(token, process.env.JWTSECRET, (error, decodedToken) => {
      console.log(decodedToken);
      if (error) return res.status(401).json('Token inválido');
      next();
    })
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const jwtValidatorUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const token = req.headers["access-token"];
    if (!token) return res.status(400).json("Token inexistente");
    jwt.verify(token, process.env.JWTSECRET, (error, decodedToken) => {
      if (error) return res.status(401).json("Token invalido");
      if (decodedToken.id !== id)
        return res.status(403).json("No eres el usuario legitimo");
      next();
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const jwtValidatorAdmin = async (req, res, next) => {
  try {
    const token = req.headers['access-token'];
    if (!token) return res.status(400).json("Token inexistente");
    jwt.verify(token, process.env.JWTSECRET, (error, decodedToken) => {
      if (error) return res.status(401).json("Token invalido");
      if (decodedToken.role !== 'admin' && decodedToken.role !== 'owner')
        return res.status(403).json("Solo se puede acceder con permisos de administrador");
      next();
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const jwtValidatorOwner = async (req, res, next) => {
  try {
    const token = req.headers["access-token"];
    if (!token) return res.status(400).json("Token inexistente");
    jwt.verify(token, process.env.JWTSECRET, (error, decodedToken) => {
      if (error) return res.status(401).json("Token invalido");
      if (decodedToken.role !== "owner")
        return res
          .status(403)
          .json("Debes tener permisos de Super Admin para utilizar esta función");
      next();
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};


module.exports = {
  jwtValidator,
  jwtValidatorAdmin,
  jwtValidatorUser,
  jwtValidatorOwner
}