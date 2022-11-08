/* 1) Crie a função factorial que recebe um número como parâmetro, utilizando arrow functions (Lembre-se de armazenar a função utilizando o tipo de variável correta).

Dentro da função crie uma variável result, que será o retorno final da função.

Crie a lógica para retornar o fatorial de N!.

Imprima no terminal “Esse é o fatorial resultado da função“ (Lembre-se de utilizar template literals nesse momento).
*/

console.log('Exercício 1:')
console.log(' ')

const factorial = (numero) => {
    let result = numero
    while(numero > 2){
        result = result *= --numero
    }
    return `Esse é o fatorial: ${result}`
} 
console.log(factorial(4))

console.log('--------------------------------------------------------------------------')
console.log(' ')

// 2) Crie uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase.

console.log('Exercício 2:')
console.log(' ')

const longestWord = (frase) => {
    let word = ''
    for (let index = 0; index < frase.split(' ').length; index += 1) {
        if (frase.split(' ')[index].length > word.length) {
            word = frase.split(' ')[index]
        }
    } return word
}
    console.log(longestWord('Uma vez eu fui no parque'))

console.log('--------------------------------------------------------------------------')
console.log(' ')

// 3) Está explicado no README.

/* 4) Crie duas funções JavaScript com as seguintes especificações:
    
    Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.

        O nome da função deverá ser substituaX;

        A função deverá receber um nome por parâmetro;

        Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';

        A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.

    
    Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.

        O nome da função deverá ser minhasSkills;

        A função deverá receber o retorno da Função 1 - substituaX por parâmetro;

        Declare dentro da função uma variável com o nome skills, do tipo const;

        A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.

        Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.

*/

// 4.1

console.log('Exercício 4.1:')
console.log(' ')

const substituaX = (nome) => {
    const frase = 'Tryber x aqui!'
    let frase2 = ''
    for (let index = 0; index < frase.split(' ').length; index += 1) {
        if(frase.split(' ')[index] == 'x') {
            frase2 += `${nome} `
        } else {
            frase2 += `${frase.split(' ')[index]} `
        } 
    } return frase2
} 
console.log(substituaX('Rafael'))

console.log('--------------------------------------------------------------------------')
console.log(' ')

// 4.2

console.log('Exercício 4.2:')
console.log(' ')

const minhasSkills = (substituaX) => {
    // substituaX = substituaX('Rafael')
    const skills = ['Javascript', 'HTML', 'CSS']
    let eu = `${substituaX}Minhas três principais habilidades são: ${skills}`
    return eu
}
console.log(minhasSkills(substituaX('Rafael')))


console.log('--------------------------------------------------------------------------')
console.log(' ')