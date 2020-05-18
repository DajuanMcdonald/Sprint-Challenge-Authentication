const jwt = require('jsonwebtoken');
const cookie = require('../session/secrets');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    jwt.verify(authorization, cookie.jwtSecret, 
      function(err, decoded) {
        if(err) {
          res.status(401).json({you: 'Shall not pass!'})
        } else {
          req.token = decoded;
          next()
        }
      })
  } else {
    res.status(400).json({message: 'Login failed'})
  }
}