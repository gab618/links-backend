const express = require('express');
const bcrypt = require('bcrypt');

const { Account } = require('../models');

const router = express.Router();

router.get('/sign-in', (req, res) => {
  return res.json('Sign in...');
});

router.get('/sign-up', async (req, res) => {
  const email = 'xaublinha123@gmail.com';
  const password = '123456'

  const hash = bcrypt.hashSync(password, 6)

  const result = await Account.create({email, password: hash});
  console.log(result);

  return res.json(result);
});

module.exports = router;
