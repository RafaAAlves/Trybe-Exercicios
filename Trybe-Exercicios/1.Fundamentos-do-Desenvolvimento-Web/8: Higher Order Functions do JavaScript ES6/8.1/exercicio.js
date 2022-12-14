// 1)Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e, a partir dele, gerar automaticamente um email no formato nome_da_pessoa@trybe.com.


const newEmployees = (create1, create2, create3) => {
  const employees = {
    id1: createEmployee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: createEmployee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: createEmployee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};


const createEmployee = (name) => {
  let email = name.toLowerCase().split(' ').join('_')
  let cadastro = {
    nomeCompleto: name,
    email: `${email}@trybe.com`,
  }; return cadastro 
}

console.log(newEmployees(createEmployee('Pedro Guerra'), createEmployee('Luiza Drumond'), createEmployee('Carla Paiva')))
console.log('-----------------------------------------------')

// 2) Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”).

checkNumber = (myNumber, numero) => myNumber === numero; 

const lottery = (myNumber) => {
  let number = Math.ceil(Math.random() * 5);
  return  checkNumber(myNumber, number)? 'Parabéns, você ganhou!' : 'Tente novamente'
}

console.log(lottery(2))
console.log('-----------------------------------------------')