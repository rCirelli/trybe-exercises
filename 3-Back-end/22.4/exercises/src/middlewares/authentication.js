// const fs = require('fs/promises');
const { checkUserExists } = require('../utils/readWriteFiles');

// como vamos ler arquivos assincronamente, precisamos do async
module.exports = async function apiCredentials(req, res, next) {
  const token = req.header('X-AUTH');
  const userExists = await checkUserExists(token);

  if (token && token.length === 16 && userExists) {
    next();
  } else {
    res.status(401).send({ message: 'Token inválido!'});
  }
};
