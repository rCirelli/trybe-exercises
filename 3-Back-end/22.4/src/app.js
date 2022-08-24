const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
// require no nosso novo router
const teamsRouter = require('./routes/teamsRouter');

const app = express();
app.use(morgan('dev'));
app.use(express.static('/images'));
app.use(express.json());
// monta o router na rota /teams (1)
app.use('/teams', teamsRouter);

module.exports = app;