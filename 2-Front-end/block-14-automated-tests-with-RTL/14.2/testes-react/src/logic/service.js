const getRandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max + 1)) + min;

const upperCase = (string) => string.toUpperCase();

const firstLetter = (string) => string[0];

const concatStr = (str1, str2) => `${str1}${str2}`;

module.exports = { getRandomNumber, upperCase, firstLetter, concatStr };