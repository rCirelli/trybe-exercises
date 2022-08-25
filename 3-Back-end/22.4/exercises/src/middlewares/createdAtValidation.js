const createdAtValidation = (req, res, next) => {
  const { body } = req;
  const { createdAt } = body.description;
  const dataFormat = createdAt.split('/');

  if(dataFormat.length !== 3) {
    return res.status(400).send({ message: 'O campo createdAt deve ter o formado \'dd/mm/aaaa\'' });
  }

  if(dataFormat[0].length !== 2 || dataFormat[1].length !== 2 || dataFormat[2].length !== 4) {
    return res.status(400).send({ message: 'O campo createdAt deve ter o formado \'dd/mm/aaaa\'' });
  }
  
  next();
};

module.exports = createdAtValidation;
