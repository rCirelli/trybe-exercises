const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    // .then((response) => console.log(response))
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.error(error));
}


fetchJoke();