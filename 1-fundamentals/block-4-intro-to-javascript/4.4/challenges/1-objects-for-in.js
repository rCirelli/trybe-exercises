//Para visualizar o resultado dos exercicios, descomente cada bloco de código correspondente ao numero do exercicio, um por um.
//Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console: Bem-vinda, Margarida

// console.log(`Bem-vinda, ${info.personagem}`);

//2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

info["recorrente"] = "Sim"; //não comentar

// console.log(info);

//3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
// personagem
// origem
// nota
// recorrente

// for(let key in info){
//     console.log(key);
// }

//4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
// Margarida
// Pato Donald
// Namorada do personagem principal nos quadrinhos do Pato Donald
// Sim

// for(let key in info){
//     console.log(info[key]);
// }

// /5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim',
// };

// for (let key in info){
//     if(key === 'recorrente')
//     {
//         if(info[key] === 'Sim' && info[key] === info2[key]){
//             console.log('Ambos recorrentes');
//         } else if(info[key] === 'Não' && info[key] === info2[key]){
//             console.log('Ambos Não recorrentes');
//         }else{
//             console.log(info.personagem, info[key], 'e', info2.personagem, info2[key]);
//         }
//     }else{
//         console.log(info[key],'e', info2[key]);
//     }
// }

//Usando o objeto abaixo, faça os exercícios a seguir:

let leitor = {
    nome: "Julia",
    sobrenome: "Pessoa",
    idade: 21,
    livrosFavoritos: [
        {
            titulo: "O Pior Dia de Todos",
            autor: "Daniela Kopsch",
            editora: "Tordesilhas",
        },
    ],
};

//6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

// let fullName = leitor.nome + " " + leitor.sobrenome;

// console.log(`O livro favorito de ${fullName} se chama "${leitor.livrosFavoritos[0].titulo}"`);

//7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:

//Não comentar esse trecho --------
leitor.livrosFavoritos.push({
    titulo: "Harry Potter e o Prisioneiro de Azkaban",
    autor: "JK Rowling",
    editora: "Rocco",
});
//----------------------------------

//8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

// function bookCount(){
//     let booksQty = 0;

//     for (let i in leitor.livrosFavoritos){
//         booksQty += 1;    
//     }
//     return booksQty;
// }

// console.log(`${leitor.nome} tem ${bookCount()} livros favoritos`);