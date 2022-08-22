const express = require('express');

const app = express();

app.use(express.json());

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

app.get('/', (req, res) => res.status(200).json({ message: 'Hello world!' }));

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;
  let updatedTeam;

  for (let i = 0; i < teams.length; i += 1) {
    const team = teams[i];

    if (team.id === Number(id)) {
      team.name = name;
      team.initials = initials;
      updatedTeam = team;
    }
  }

  res.status(200).json({ updatedTeam });
});

app.get('/teams/:id', (req, res) => {
  const { id } = req.params;

  const reqTeam = teams.find((team) => team.id === Number(id));

  res.status(200).json({ reqTeam });
});

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const index = teams.findIndex((team) => team.id === Number(id));
  teams.splice(index, 1);

  res.status(200).end();
});

module.exports = app;
