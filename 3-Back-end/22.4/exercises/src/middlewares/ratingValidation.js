const ratingValidation = (req, res, next) => {
  const { body } = req;
  const { rating } = body.description;

  if (!rating || rating > 5 || rating < 1) {
    return res.status(400).send({ message: 'O campo rating deve ser um número inteiro entre 1 e 5' });
  }
  
  next();
};

module.exports = ratingValidation;
