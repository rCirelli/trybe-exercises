// const fetch = require('node-fetch');

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((object) => {
      appendJoke(object.joke);
    })
};

function appendJoke(joke) {
  console.log(joke);
  const jokeContainer = document.getElementById('jokeContainer');
  jokeContainer.innerText = joke;
}

window.onload = () => fetchJoke();