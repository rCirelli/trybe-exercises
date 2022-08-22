const express = require('express');
const activities = require('./exercisesData');

const app = express();

app.use(express.json());

app.get('/myActivities/:id', (req, res) => {
  const { id } = req.params;
  const myActivity = activities.find((activity) => activity.id === Number(id));

  res.status(200).json({ myActivity });
});

app.get('/myActivities', (req, res) => {
  res.status(200).json({ activities });
});

app.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;

  const filteredActivities = activities.filter(
    (activity) => activity.status.toLowerCase() === status.toLowerCase(),
  );

  console.log(filteredActivities);
  res.status(200).json({ filteredActivities });
});

app.get('/search/myActivities', (req, res) => {
  const { q } = req.query;

  const query = activities.filter((activity) =>
    activity.description.toLowerCase().includes(q.toLowerCase()));

  res.status(200).json({ query });
});

module.exports = app;
