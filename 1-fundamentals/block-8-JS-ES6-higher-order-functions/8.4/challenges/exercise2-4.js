const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 2 - Crie uma string com os nomes de todas as pessoas autoras.

const nomesAutores = books.reduce((acc, curr, index) => {
  return index === 1 
  ? `${acc.author.name}, ${curr.author.name}` 
  : `${acc}, ${curr.author.name}`;
});

// console.log(nomesAutores);

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const mediaIdades = () => {
  const somaIdades = books.reduce((acc, curr, index) => {
    return acc + (curr.releaseYear - curr.author.birthYear) // * jeito do gabarito
    // * meu jeito ------------
    // * return index === 1
    // * ? (acc.releaseYear - acc.author.birthYear) + (curr.releaseYear - curr.author.birthYear)
    // * : acc + (curr.releaseYear - curr.author.birthYear);
  }, 0);
  return somaIdades / books.length;
};

console.log(mediaIdades());

// 4 - Encontre o livro com o maior nome.

function longestNamedBook() {
  return books.reduce((acc, curr) => {
    return acc.name.length > curr.name.length ? acc : curr.name;
  });
}
console.log(longestNamedBook());
