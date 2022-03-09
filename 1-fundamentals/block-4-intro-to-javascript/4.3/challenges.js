//Para visualizar os ecercícios no console, descomente o bloco de código correspondente e execute.

//1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// ! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
// function factorial(a=0){
//     const count = a;
//     let result = a;

//     for(let i = a-1; i > 0; i -= 1){
//         result *= i;
//     }
//     console.log(result);
// }

// factorial(10);

//2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
// function reverseWord(a=''){
//     const word = a;
//     let reverse = '';

//     for(let i = word.length-1; i >= 0; i -= 1){
//         reverse += word[i];
//     }
//     console.log(reverse);
// }

// reverseWord('tryber');

// 3- Considere o array de strings abaixo:
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let longestWord = '';
// let shortestWord = array[0];

// for(let i = 0; i < array.length; i += 1){
//     if(array[i].length > longestWord.length){
//         longestWord = array[i];
//     }
//     if(array[i].length < shortestWord.length){
//         shortestWord = array[i];
//     }
// }
// console.log('This is the longest word:',longestWord);
// console.log('This is the shortest word:',shortestWord);