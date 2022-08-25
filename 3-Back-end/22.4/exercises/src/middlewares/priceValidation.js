const priceValidation = (req, res, next) => {
  const { body } = req;
  const priceExists = Object.keys(body).some((k) => k === 'price');

  if (!priceExists) {
    return res.status(400).send({ message: 'O campo price é obrigatório' });
  }
  if (body.price < 0) {
    return res.status(400).send({ message: 'O campo price deve ser um número maior ou igual a zero' });
  }
  
  next();
};

module.exports = priceValidation;
