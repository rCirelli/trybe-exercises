const crypto = require('crypto');

const generateToken = (req, res, next) => {
  const { body } = req;
  const token = crypto.randomBytes(8).toString('hex');
  body.token = token;

  next();
};

module.exports = generateToken;
