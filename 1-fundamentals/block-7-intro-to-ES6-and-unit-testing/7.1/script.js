// 1 - Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const factorial = (n) => n > 0 ? n * factorial(n - 1) : 1;

// console.log(factorial(4));

// 2 - Crie uma função que receba uma frase e retorne qual a maior palavra.

const getBiggestWord = (phrase) => {
  const phraseArr = phrase.split(' ');
  let biggestWord = '';
  for (let word of phraseArr) {
    if (word.length > biggestWord.length) {
      biggestWord = word
    }
  }
  return biggestWord;
};

// console.log(getBiggestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// 3 - Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

// função para pegar um elemento pelo queryselector
// const qs = (selector) => document.querySelector(selector);

// DOM elements
// const button = qs('#button');
// const counter = qs('#counter');

// let clickCount = 0;

// const clickCounter = () => clickCount += 1;

// const updateCounter = () => {
//   clickCounter();
//   counter.innerText = clickCount;
// }

// //função para adicionar event listener
// const addEvent = (target, type, func) => target.addEventListener(type, func);

// addEvent(button, 'click', updateCounter);

// 4 - Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .

let skills = ['JS', 'HTML', 'CSS', 'DOM'];

const string = 'Tryber x aqui!'

const replaceString = (word) => `Tryber ${word} aqui!`
// {
  // const stringArr = string.split(' ');
  // for (let string in stringArr) {
  //   if (stringArr[string] === 'x') {
  //     stringArr[string] = word;
  //   }
  // }
  // return stringArr.join(' ');
// };

console.log(replaceString('Raphael'));

// 5 - Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
const joinSkills = (string) => `${string} Minhas principais habilidades são: ${skills.sort()}`

console.log(joinSkills(replaceString('Raphael')));
