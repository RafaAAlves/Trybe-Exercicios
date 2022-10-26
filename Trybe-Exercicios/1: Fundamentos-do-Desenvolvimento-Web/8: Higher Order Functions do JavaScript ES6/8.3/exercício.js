// TEMPLATE FORNECIDO PELA TRYBE

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

// Os exercícios:

// Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

const livros = [];

books.map((book) => {
  livros.push(` ${book.name}`)
  livros.push(` ${book.genre}`)
  livros.push(` ${book.author.name}`)
}); 
console.log(livros)
console.log('-------------------------------------------');

// Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha, considerando suas idades quando o livro foi lançado.

const authorData = [];

books.map((book) => {
  let data = {
    author: book.author.name,
    age: book.releaseYear - book.author.birthYear
  }; 
    authorData.push(data);
    authorData.sort((a, b) => a.age - b.age)
}); 
console.log(authorData)
console.log('-------------------------------------------');


// Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

const sciFi = [];

sciFi.push(books.filter(book => book.genre === 'Ficção Científica'));

console.log(sciFi);
console.log('-------------------------------------------');

// Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.

const oldBooks = (books.filter((book) => book.releaseYear < 1962))
.sort((a, b) => a.releaseYear - b.releaseYear);

console.log(oldBooks)
console.log('-------------------------------------------');

// Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const sciFiANDFantasy = [];

sciFiANDFantasy.push(books.filter(book => book.genre === 'Ficção Científica' | book.genre === 'Fantasia')
.map((book) => book.author.name).sort());

console.log(sciFiANDFantasy);
console.log('-------------------------------------------');

// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const oldBooksName = (books.filter((book) => book.releaseYear < 1962)) // devNote: usei o mesmo código do oldBooks, mas sem o sort
.map((book) => book.name);

console.log(oldBooksName);
console.log('-------------------------------------------');

// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

const bookAuthorWith3Initials = (books.filter((book) => book.author.name.split('.').length > 3).map((book) => book.name));

console.log(bookAuthorWith3Initials);