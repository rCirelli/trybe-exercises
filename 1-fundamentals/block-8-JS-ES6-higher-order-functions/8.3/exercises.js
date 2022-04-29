const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (productsList, pricesList) => (
  productsList.map((product, index) => ({ [product]: pricesList[index] }))
);

const pricedProducts = updateProducts(products, prices);

// console.log(pricedProducts);

const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.map((numero) => numero * 2)); // Retorno: [2, 4, 6, 8, 10, 12]

const paresMenoresQueCinco = [];
numeros.forEach((numero) => {
  if (numero < 5 && numero % 2 === 0) {
    paresMenoresQueCinco.push(numero);
  }
});
console.log(paresMenoresQueCinco); // Retorno: [2, 4]

const paresMenoresQueCincoFilter = numeros.filter((numero) => numero < 5 && numero % 2 ===0);
