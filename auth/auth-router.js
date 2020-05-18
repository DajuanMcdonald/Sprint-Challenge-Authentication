const router = require('express').Router();
const bcrypt = require('bcryptjs')
const db = require('../database/dbConfig');


router.post('/register', (req, res) => {
const creds = req.body;
  if(!user || !bcrypt,bcrypt.compareSync(creds.password, username.password)) {
    return res.status(401).json({error: 'Invalid Session'})
  } 
const hash = bcrypt.hashSync(user.password, 14);

user.password = hash;



});

router.post('/login', (req, res) => {
  // implement login
  let { username, password} = req.body;

  db('users')
    .first()
  .then( user => {
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({message: 'Welcome to API'})
    } else {
      res.status(401).json({message: 'Invalid Credentials'})
    }
  }) .catch(err => {
    res.status(500).json(err)
  })
});

module.exports = router;
