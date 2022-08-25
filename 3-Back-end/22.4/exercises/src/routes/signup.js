const express = require('express');
const router = express.Router();

// router.use();

router.post('/', (req, res) => {
  const newActivity = req.body;
  res.status(201).send({ message: 'A' });
});


module.exports = router;
