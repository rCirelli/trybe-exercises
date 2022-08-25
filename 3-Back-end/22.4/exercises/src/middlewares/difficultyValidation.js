const difficultyValidation = (req, res, next) => {
  const { body } = req;
  const { difficulty } = body.description;
  const classificationTypes = ['Fácil', 'Médio', 'Difícil'];

  if (!difficulty || !classificationTypes.includes(difficulty)) {
    return res.status(400).send({
      message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\''
    });
  }
  
  next();
};

module.exports = difficultyValidation;
