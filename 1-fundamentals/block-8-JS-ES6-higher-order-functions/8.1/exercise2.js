const checkBet = (bet, draw) => bet === draw ? true : false;

const drawResults = (bet, callback) => {
  const draw = Math.floor(Math.random() * 5) + 1;
  console.log(`sorteio: ${draw}, aposta: ${bet}`);
  return callback(bet, draw) ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(drawResults(3, checkBet));