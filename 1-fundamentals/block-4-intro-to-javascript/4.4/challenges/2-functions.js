//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

// function checkPalindrome(a=''){
//     const word = a;
//     const reverseWord = word.split('').reverse().join('');

//     if(word === reverseWord){
//         return true;
//     }
//     return false;
// }

// console.log(checkPalindrome('socorrammesubinoonibusemmarrocos'));

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// function checkBiggestNum(...args) {
//   //na linha de código abaixo e na definição dos parametros da função, usei informção retirada da seguinte documentação: https://github.com/airbnb/javascript#es6-rest
//   const numbers = args;
//   let checkArray = true;
//   let biggestNum = 0;

//   for (let i in numbers) {
//     if (typeof numbers[i] !== "number") {
//       checkArray = false;
//       console.log('Insira apenas números inteiros como parametros');
//     } else if (numbers[i] > biggestNum) {
//       biggestNum = numbers[i];
//     }
//   }
  
//   return numbers.indexOf(biggestNum);
// }

// console.log(checkBiggestNum(125.99, 2, 50, 20, 40, 700, 701));

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// function checkSmallNum(...args) {
//   //na linha de código abaixo e na definição dos parametros da função, usei informção retirada da seguinte documentação: https://github.com/airbnb/javascript#es6-rest
//   const numbers = args;
//   let checkArray = true;
//   let smallestNum = numbers[0];

//   for (let i in numbers) {
//     if (typeof numbers[i] !== "number") {
//       checkArray = false;
//       console.log('Insira apenas números inteiros como parametros');
//     } else if (numbers[i] < smallestNum) {
//       smallestNum = numbers[i];
//     }
//   }
  
//   return numbers.indexOf(smallestNum);
// }

// console.log(checkBigWord(1, 2, 50, 20, 40, 700, 701));

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// function checkBigWord(...args) {
  //na linha de código abaixo e na definição dos parametros da função, usei informção retirada da seguinte documentação: https://github.com/airbnb/javascript#es6-rest
//   const words = args;
//   let checkArray = true;
//   let smallestWord = words[0];

//   for (let i in words) {
//     if (typeof words[i] !== "string") {
//       checkArray = false;
//       console.log('Insira apenas strings como parametros');
//     } else if (words[i].length < smallestWord.length) {
//       smallestWord = words[i];
//     }
//   }
  
//   return smallestWord;
// }

// console.log(checkBigWord('azul', 'ovo', 'bolos', 'palindromo', 'objeto', 'if'));

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function checkRepeatingNum(...args) {
  //na linha de código abaixo e na definição dos parametros da função, usei informção retirada da seguinte documentação: https://github.com/airbnb/javascript#es6-rest
  const numbers = args;
  let checkArray = true;
  let mostRepeats = 0;

  for (let i in numbers) {
    if (typeof numbers[i] !== "number") {
      checkArray = false;
      console.log('Insira apenas números inteiros como parametros');
    } else if (numbers[i] > mostRepeats) {
        mostRepeats = numbers[i];
    }
  }
  
  return numbers.indexOf(mostRepeats);
}

console.log(checkRepeatingNum(125.99, 2, 50, 20, 40, 700, 701));


