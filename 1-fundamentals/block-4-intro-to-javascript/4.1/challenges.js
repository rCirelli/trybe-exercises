//Requisito 1:
// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados.
// Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)
function sum(a, b){
    console.log(a, '+', b, '=', a+b);
}

function subtract(a, b){
    console.log(a, '-', b, '=', a-b);
}

function multiply(a, b){
    console.log(a, 'x', b, '=', a*b);
}

function divide(a, b){
    console.log(a, '/', b, '=', a/b);
}

function module(a, b){
    console.log('O resto da divisão é', a%b);
}

//Requisito 2:
// Faça um programa que retorne o maior de dois números.
// Defina no começo do programa duas constantes com os valores que serão comparados.
function biggerOfTwo(a, b){
    if (a > b){
        console.log('O número maior é', a);
    } else{
        console.log('O número maior é', b);
    }
}

//Requisito 3:
// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
function biggerOfThree(a, b, c){
    if (a > b && a > c){
        console.log('O número maior é', a);
    } else if (b > a && b > c){
        console.log('O número maior é', b);
    } else {
        console.log('O número maior é', c);
    }
}

//Requisito 4:
// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
function isPositive(a){
    if (a > 0){
        console.log('Positive');
    } else if (a < 0){
        console.log('Negative');
    } else{
        console.log('Zero');
    }
}

//Requisito 5:
// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
function triangle(a, b, c){
    if (a > 0 && b > 0 && c > 0){
        if (a + b + c === 180){
            console.log('True');
        } else {
            console.log('False');
        }    
    }else {
        console.log('Ângulo Inválido');
    }
}

//Requisito 6:
// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
function chess(a){
    a = a.toLowerCase();
    if(a == 'cavalo'){
        console.log('em L');
    }else if (a == 'torre'){
        console.log('em linha reta, sem limite de casas');
    }else if (a == 'bispo'){
        console.log('diagonais, sem limite de casa');
    }else if (a == 'rainha'){
        console.log('qualquer direção, sem limite de casas');
    }else if (a == 'rei'){
        console.log('em qualquer direção, apenas 1 casa');
    }else if (a == 'peão') {
        console.log('apenas para frente e apenas 1 casa, ou 1 casa na diagonal caso "coma" uma peça inimiga nessa posição');
    }else {
        console.log('Essa peça não existe');
    }
}

//Requisito 7:
// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
function getGrade(a){
    let result = '';
    if(a >= 90 && a <= 100){
        result = 'A';
    } else if(a >= 80 && a < 90){
        result = 'B';
    } else if(a >= 70 && a < 80){
        result = 'C';
    } else if(a >= 60 && a < 70){
        result = 'D';
    } else if(a >= 50 && a < 60){
        result = 'E';
    } else if(a < 50 && a >= 0){
        result = 'F';
    } else{
        result = 'Nota inválida'
    }
    console.log(result);
}

//Requisito 8:
// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
function isEven(a, b, c){
    if(a % 2 == 0 || b % 2 == 0 || c % 2 == 0){
        console.log('At least 1 number is even');
    }else {
        console.log('No even number');
    }
}

//Requisito 9:
// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
function isOdd(a, b, c){
    if(a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0){
        console.log('At least 1 number is odd');
    }else {
        console.log('No odd number');
    }
}

//Requisito 10:
// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
function profit(a, b){
    const costWithTax = a * 1.2;
    const sellPrice = b;
    let profit = 0;
    
    if(a > 0 && b > 0){
        profit = sellPrice - costWithTax;
        if (profit > 0){
            console.log('Net profit of', profit.toFixed(2));
        } else {
            console.log('Net loss of', profit.toFixed(2));
        }
    } else{
        console.log('Insert positive values');
    }
}

//Requisito 11:
// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
function netSalary(a=0){
    const salary = a;
    
}