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

const expectedResult = 'O Senhor dos Anéis';

function authosWith3Initials() {
  const result = books.find((book) => {
    let initialsCount = 0;
    const thisAuthor = book.author.name.split(' ');
    thisAuthor.map((word) => {
      if (word.length === 2 && word[1] === '.') {
        initialsCount += 1;
      }
    });      
    if (initialsCount === 3) return book;
  });
  return result.name;
}
console.log(authosWith3Initials());
