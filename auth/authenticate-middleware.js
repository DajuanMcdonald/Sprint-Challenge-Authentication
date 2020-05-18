/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require('jsonwebtoken');
const cookie = require('../session/secrets.js');


module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization)  { jwt.verify(authorization, cookie.jwtSecret, 
    function(err, decoded) {
      if (err) {
        res.status(401).json({ you: 'shall not pass!' });
      
          
      } else {
        req.token = decoded;
        next()
      }

    })
  } else {
    res.status(500).json({message: 'Server error...we are working on it ! '})
  }
};
