const app = require('./app');
const exercisesApp = require('./exercises');

app.listen(3001, () => console.log('server running on port 3001!'));
exercisesApp.listen(3002, () => console.log('Exercises server running on port 3002!'));
