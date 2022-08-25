const descriptionValidation = (req, res, next) => {
  const { body } = req;
  const bodyProperties = Object.keys(body.description);
  const requiredProperties = ['createdAt', 'rating', 'difficulty'];
  const invalidFields = [];
  
  requiredProperties.forEach((prop) => {
    if (!bodyProperties.includes(prop)) {
      invalidFields.push(prop);
    }
  });
  
  if (invalidFields.length > 0) {
    const message = 'Os campos abaixo são obrigatórios';
    const fields = invalidFields;

    return res.status(400).send({ message, fields });
  }

  next();
};

module.exports = descriptionValidation;
