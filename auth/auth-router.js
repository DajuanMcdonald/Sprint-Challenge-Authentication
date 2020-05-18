const router = require('express').Router();
const bcrypt = require('bcryptjs')
const db = require('../database/dbConfig');


router.get('/register', (req, res) => {

  res.send('<h1>Welcome to API</h1>')

  // implement registration
  // try {

  //   let user = req.body;
  
  //   const hash = bcrypt.hash(username.password, 12)
  //   user.username.password = hash;
  
  //   const newUser = await db('users')
  //     .insert(newUser)
      
  //     res.status(201).json(newUser)

  // } catch(err) {
  //   res.sendStatus(err)
  // }

});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
