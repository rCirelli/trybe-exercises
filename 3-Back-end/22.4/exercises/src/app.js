const express = require('express');
require('express-async-errors');

const activitiesRouter = require('./routes/activities');
const signupRouter = require('./routes/signup');

const app = express();
app.use(express.json());

app.use('/activities', activitiesRouter);
app.use('/signup', signupRouter);

module.exports = app;
