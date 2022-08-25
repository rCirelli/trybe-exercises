const signupValidation = (req, res, next) => {
  const { body } = req;
  const bodyProperties = Object.keys(body);
  const requiredFields = ['email', 'password', 'firstName', 'phone'];
  const invalidFields = [];

  requiredFields.forEach((prop) => {
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

module.exports = signupValidation;
