const express = require('express');
const signupValidation = require('../middlewares/signupValidation');
const generateToken = require('../middlewares/generateToken');
const { writeUsersFile } = require('../utils/readWriteFiles');
const router = express.Router();

router.post('/', signupValidation, generateToken, (req, res) => {
  const userData = req.body;
  const { token } = userData;
  writeUsersFile(userData);
  res.status(200).send({ token });
});


module.exports = router;
