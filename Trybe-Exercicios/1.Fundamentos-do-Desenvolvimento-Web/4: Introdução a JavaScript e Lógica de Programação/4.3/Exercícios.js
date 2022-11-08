// EXERCÍCIOS:

// 1) Crie um algoritmo que imprima na tela o fatorial de 10.
console.log('EXERCÍCIO 1')
console.log('')

let fatorial = 10;
for (index = fatorial; index >= 1; index -= 1) {
    fatorial = fatorial * index;
} console.log(fatorial)

console.log('')

// 2) Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”.
console.log('EXERCÍCIO 2')
console.log('')

let palavra ='leafaR'
let palavraInvertida = '';
for (let index = palavra.length - 1; index >= 0; index -=1){
    palavraInvertida = palavraInvertida + palavra[index];
}   console.log(palavraInvertida)

console.log('')

// 3) Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];
// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
console.log('EXERCÍCIO 3')
console.log('')

let maior = ''; 
let menor = 'aaaaaaaaaaaaaaaaaaa';

for (index = 0; index < array.length; index += 1) {
    if(array[index].length > maior.length) {
        maior = array[index]
    } else if (array[index].length < menor.length) {
        menor = array[index]
    }
}
console.log(maior)
console.log(menor)

console.log('')
// 4) Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.
console.log('EXERCÍCIO 4')
console.log('')

let maiorPrimo = 0;

for (let index = 2; index <= 50; index += 1) {
    let divisores = 0;
     for (let index2 = 1; index2 <= index; index2 += 1) {
    
        if (index % index2 === 0) {
         divisores += 1;
     } 
        
    }

    if (divisores === 2) {
        maiorPrimo = index;
    }
     
} console.log(maiorPrimo);

