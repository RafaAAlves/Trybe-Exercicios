// Considere o seguinte array e manipule-o utilizando reduce para fazer o que é pedido:

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

// Adicione o código do exercício aqui:

// Crie uma string com os nomes de todas as pessoas autoras.

let names = books.reduce((acc, curr) => {
  acc.author.name += ', ' + curr.author.name;
  return acc;
}).author.name

console.log(`${names}
----------------------------------------------------------------------------------------------------------`)

// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const averAge = () => {
  return books.reduce((idadeTotal, livroAtual) => idadeTotal + livroAtual.releaseYear - livroAtual.author.birthYear, 0) 
  / books.length
};
console.log(`${averAge()}
----------------------------------------------------------------------------------------------------------`)

// Encontre o livro com o maior nome.

const biggestBook = () => {
  return books.reduce((maior, atual) => (maior.name.length > atual.name.length) ? maior : atual)
}

console.log(biggestBook());