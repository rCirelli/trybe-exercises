const getRandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max + 1)) + min;

module.exports = { getRandomNumber };