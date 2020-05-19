const router = require('express').Router();
const bcrypt = require('bcryptjs')
const Jokers = require('../jokes/jokes-model');
const jwt = require('jsonwebtoken');
const secrets = require('../session/secrets');

// const { JsonWebTokenError } = require('jsonwebtoken');
// const db = require('../database/dbConfig');


router.post('/register', (req, res) => {
let user = req.body;
  // if(!user || !bcrypt,bcrypt.compareSync(password, user.password,)) {
  //   return res.status(401).json({error: 'Invalid Session'})
  // } 
const hash = bcrypt.hashSync(user.password, 14);

user.password = hash;
 
Jokers.add(user)
  .then(save => {
    res.status(201).json(save)
  }).catch(err => {
    res.status(500).json({message: 'Server Error..we are working on it...!', err})
  })

});

router.post('/login', (req, res) => {
  // implement login
  let { username, password} = req.body;
   Jokers.findBy({username})
    .first()
    .then(user => {
      if(user && bcrypt.compareSync(password, user.password)) {
        // const token = generateToken(user);
        res.status(200).json({message:  `Welcome to the API ${user.username}`, token})
      } else {
        res.status(401).json({you: 'Shall not pass'})
      }
    }).catch(err => {
      res.status(500).json(err)
    })
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: '1d'
  };

  return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router;
