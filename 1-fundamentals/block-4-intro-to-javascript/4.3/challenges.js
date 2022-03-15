//Para visualizar os ecercícios no console, descomente o bloco de código correspondente e execute.

//1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

// function factorial(a=0){
//     let result = a;

//     for(let i = a-1; i > 0; i -= 1){
//         result *= i;
//     }
//     console.log(result);
// }

// factorial(10);


// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

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

//4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.


//BONUS:
//1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

// function square(a=0){
//     const size = a;
//     let line = '';
    
//     if(a > 0){
//         for(let ii = 0; ii < a; ii += 1 ){
//             for(let i = 0; i < a; i += 1){
//                 line += '*';
//             }
//             console.log(line);
//             line = '';
//         }
//     }else{
//         console.log('Insert parameter larger than 0.');
//     }
// }

// square(5);

//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// function triRect(a=0){
//     const size = a;
//     let line = '';
    
//     if(a > 0){
//         for(let i = 0; i < a; i += 1 ){
//             line += '*';
//             console.log(line);
//         }
//     }else{
//         console.log('Insert parameter larger than 0.');
//     }
// }

// triRect(10);

//3- Agora inverta o lado do triângulo.

// function revertTriRect(a=0){
//     let line = '';
//     let spaces = a - 1;
    
//     if(a > 0){
//         for(let ii = 0; ii < a; ii += 1){
//             for(let i = 0; i < a; i += 1){
//                 if(i < spaces){
//                     line += ' ';
//                 }else{
//                     line += '*';
//                 }
//             }
//             console.log(line);
//             line = '';
//             spaces -= 1;
//         }
//     }else{
//         console.log('Insert parameter larger than 0.');
//     }
// }

// revertTriRect(5);

//4- Depois, faça uma pirâmide com n asteriscos de base:

function pyramid(a=0){
    let lineString = '';
    let lineCount = 0;
    let spaces = 0;
    
    if(a > 0){
        for(let i = 1; i <= a; i += 1){
            for(let ii = 1; ii <= a; ii += 1){
                if(spaces == 0){
                    lineString += '*';
                }else{
                    
                }
            }
            console.log(lineString);
            lineString = '';
            spaces += 2;
            lineCount += spaces;
        }
    }else{
        console.log('Insert parameter larger than 0.');
    }
}

pyramid(5);


//BONUS 2:

// 1. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

// const jogada = ['pedra', 'papel', 'tesoura'];

// let player1 = jogada[Math.floor(Math.random() * 3)]; 
// let player2 = jogada[Math.floor(Math.random() * 3)]; 
// let resultado = '';

// if(player1 == 'pedra'){
//     if(player2 == 'pedra'){
//         resultado = 'empate';
//     } else if(player2 =='papel'){
//         resultado = 'player 2 venceu';
//     } else{
//         resultado = 'player 1 venceu';
//     }
// } else if(player1 == 'papel'){
//     if(player2 == 'pedra'){
//         resultado = 'player 1 venceu';
//     } else if(player2 == 'papel'){
//         resultado = 'empate';
//     }else{
//         resultado = 'player 2 venceu';
//     }
// }else{
//     if(player2 == 'pedra'){
//         resultado = 'player 2 venceu';
//     } else if(player2 == 'papel'){
//         resultado = 'player 1 venceu';
//     }else{
//         resultado = 'emapte';
//     }
// }

// console.log(player1, 'vs', player2);
// console.log(resultado);