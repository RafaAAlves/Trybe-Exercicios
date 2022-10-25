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

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

const finderFunc = (object) => { 
  if (object.author.birthYear === 1947){
   console.log(object.author.name)
  }
}

let finder = books.find(finderFunc)

// Retorne o nome do livro de menor nome.


let smallerBook = books[0].name;
const bookVerify = (books) => {
  books.forEach(book => {
  if (book.name.length < smallerBook.length){
    smallerBook = book.name;
    } 
  }); return smallerBook
} 



console.log(bookVerify(books))

// Encontre o primeiro livro cujo nome possui 26 caracteres.

let specificBook;
const bookFind = (books) => {
  books.forEach(book => {
  if (book.name.length === 26){
    specificBook = book
    } 
  }); return specificBook.name
}

console.log(bookFind(books))

// Ordene os livros por data de lançamento em ordem decrescente.

const sortedBooks = () => {
  let sorted = books.sort((a, b) => b.releaseYear - a.releaseYear)
  return sorted
}

console.log(sortedBooks(books));

// Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

const authorsBirthEqual = () => {
  return books.every((book) => {
   return book.author.birthYear > 1900 && book.author.birthYear < 2000
  })
}; console.log(authorsBirthEqual());

// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

const bookRelease80 = () => {
  return books.some((book) => {
   return book.releaseYear > 1979 && book.releaseYear < 1990
  })
}; console.log(bookRelease80());
