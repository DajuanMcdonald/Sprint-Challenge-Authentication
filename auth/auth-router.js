const router = require('express');
const bcrypt = require('bcryptjs')
const db = require('../database/dbConfig');
const router = express.Router();

router.post('/register', async (req, res) => {
  // implement registration
  let user = req.body;

  const hash = bcrypt.hash(user.password, 12)
  user.password = hash;

  const user = await db('auth')
    .insert(user)
    
    res.status(201).json(user)
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
