// Usando o objeto abaixo, faça os exercícios a seguir:
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

// 1) Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave.

console.log('EXERCÍCIO 1')
console.log('')

console.log('Bem-vinda ' + info.personagem)

console.log('-------------------------------------------------------------------------------------')

// 2) Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor

console.log('EXERCÍCIO 2')
console.log('')

info.recorrente = 'sim'

console.log(info)

console.log('-------------------------------------------------------------------------------------')

// 3) Faça um for/in que mostre todas as chaves do objeto.

console.log('EXERCÍCIO 3')
console.log('')

for (let key in info) {
    console.log(key);
        
}

console.log('-------------------------------------------------------------------------------------')

// 4) Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. 

console.log('EXERCÍCIO 4')
console.log('')

for (let key in info) {
    console.log(info[key]);
        
}

console.log('-------------------------------------------------------------------------------------')

// 5) Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves.
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'sim'
  };


console.log('EXERCÍCIO 5')
console.log('')

for (let key in info) {
    if( key == 'recorrente' && info[key] == 'sim' && info2[key] == 'sim') {
        console.log('Ambos recorrentes')
    } else
    console.log(info[key] + ' e ' + info2[key]);
}
console.log('-------------------------------------------------------------------------------------')

// Usando o objeto abaixo, faça os exercícios a seguir:
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

// 6) Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.
console.log('EXERCÍCIO 6')
console.log('')

console.log('O livro favorito de ' + leitor.nome, leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo)

console.log('-------------------------------------------------------------------------------------')

// 7) Adicione um novo livro favorito na chave livrosFavoritos, que é um array.
console.log('EXERCÍCIO 7')
console.log('')

leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco'
  }
); 
console.log(leitor.livrosFavoritos)

console.log('-------------------------------------------------------------------------------------')
// 8) Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código.
console.log('EXERCÍCIO 8')
console.log('')

console.log(leitor.nome, 'tem', leitor.livrosFavoritos.length, 'livros favoritos.')

console.log('-------------------------------------------------------------------------------------')
