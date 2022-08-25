const express = require('express');
const nameValidation  = require('../middlewares/nameValidation');
const priceValidation  = require('../middlewares/priceValidation');
const descriptionValidation  = require('../middlewares/descriptionValidation');
const createdAtValidation  = require('../middlewares/createdAtValidation');
const ratingValidation  = require('../middlewares/ratingValidation');
const difficultyValidation = require('../middlewares/difficultyValidation');
const authentication = require('../middlewares/authentication');
const router = express.Router();

router.use(
  authentication,
  nameValidation,
  priceValidation,
  descriptionValidation,
  createdAtValidation,
  ratingValidation,
  difficultyValidation,
)

router.post('/', (req, res) => {
  const newActivity = req.body;
  res.status(201).send({ message: 'Atividade cadastrada com sucesso!' });
});


module.exports = router;
