// Para visualizar cada um dos exercicios abaixo, descomente todo o bloco do numero correspondente e execute o código.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
// for (let i = 0; i < numbers.length; i += 1){
//     console.log(numbers[i]);
// }

//2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// let sum = 0;
// for (let i = 0; i < numbers.length; i += 1){
//     sum += numbers[i];
// }
// console.log('soma =',sum);

//3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// let sum = 0;
// let media = 0;
// for (let i = 0; i < numbers.length; i += 1){
//     sum += numbers[i];
// }

// media = sum / numbers.length;
// console.log('media aritmetica =',media);

//4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// let sum = 0;
// let media = 0;
// for (let i = 0; i < numbers.length; i += 1){
//     sum += numbers[i];
// }

// media = sum / numbers.length;

// if(media > 20){
//     console.log('Valor maior que 20');
// } else{
//     console.log('Valor menor ou igual a 20');
// }

//5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;
// let biggestNumber = 0;

// for (let i = 0; i < numbers.length; i += 1){
//     if(numbers[i] > biggestNumber)    {
//         biggestNumber = numbers[i];
//     }
// }
// console.log(biggestNumber);

//6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// let qtyOfOdds = 0;

// for (let i = 0; i < numbers.length; i += 1){
//     if(numbers[i] % 2 !== 0){
//         qtyOfOdds += 1;
//     }
// }

// if(qtyOfOdds == 0){
//     console.log('nenhum valor ímpar encontrado');
// }else{
//     console.log('existem',qtyOfOdds,'numeros ímpares')
// }

//7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;
// let smallestNumber = numbers[0];
// let compare = 0;

// for (let i = 0; i < numbers.length; i += 1){
//     compare = numbers[i];
//     if(compare < smallestNumber){
//         smallestNumber = compare;
//     }
// }
// console.log(smallestNumber);

//8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
// let numbersArray = [];

// for (let i = 1; i <= 25; i += 1){
//     numbersArray.push(i);
// }
// console.log(numbersArray);

//9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
// let numbersArray = [];

// for (let i = 1; i <= 25; i += 1){
//     numbersArray.push(i);
// }

// for (let i = 0; i < numbersArray.length; i += 1){
//     console.log(numbersArray[i],'/ 2 =',numbersArray[i]/2);
// }

//BONUS
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1. Ordene o array numbers em ordem crescente e imprima seus valores;
// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        
//         if (numbers[index] < numbers[secondIndex]) {
//             let position = numbers[index];
//             numbers[index] = numbers[secondIndex];
//             numbers[secondIndex] = position;
//         }
//     }   
// }
// console.log(numbers);

//2. Ordene o array numbers em ordem decrescente e imprima seus valores;
// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        
//         if (numbers[index] > numbers[secondIndex]) {
//             let position = numbers[index];
//             numbers[index] = numbers[secondIndex];
//             numbers[secondIndex] = position;
//         }
//     }   
// }
// console.log(numbers);

//3. Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo: 
// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
// let newNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//     if(i == numbers.length-1){
//         newNumbers.push(numbers[i]*2);
//     }else {
//         newNumbers.push(numbers[i]*numbers[i+1]);
//     }
// }
// console.log(newNumbers);
