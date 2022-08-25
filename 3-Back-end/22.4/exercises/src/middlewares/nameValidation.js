const nameValidation = (req, res, next) => {
  const { body } = req;

  if (!body.name) {
    return res.status(400).send({ message: 'O campo name é obrigatório' });
  }
  if (body.name.length <= 4) {
    return res.status(400).send({ message: 'O campo name deve ter pelo menos 4 caracteres' });
  }
  
  next();
};

module.exports = nameValidation;
