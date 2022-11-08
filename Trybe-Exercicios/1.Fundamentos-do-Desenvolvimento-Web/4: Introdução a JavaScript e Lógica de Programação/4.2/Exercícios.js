// Exercícios Arrays e loops:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; // Array fornecido pela plataforma

// 1) Percorra o array imprimindo todos os valores nele contidos com a função console.log();

console.log('EXERCÍCIO 1');
console.log('');

for(index = 0; index < numbers.length; index += 1) {
console.log(numbers[index]);
}

console.log('');

// 2) Some todos os valores contidos no array e imprima o resultado;

console.log('EXERCÍCIO 2');
console.log('');

let soma = 0;
for(index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index];
} console.log(soma);

console.log('');

// 3) Calcule e imprima a média aritmética dos valores contidos no array (A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.);

console.log('EXERCÍCIO 3');
console.log('');

let medArit = soma / numbers.length
console.log(medArit);

console.log('');

// 4) Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

console.log('EXERCÍCIO 4');
console.log('');

if (medArit > 20) {
    console.log('Valor maior que 20')
} else {
    console.log ('valor menor ou igual a 20')
}

console.log('');

// 5) Utilizando for, descubra qual o maior valor contido no array e imprima-o;

console.log('EXERCÍCIO 5');
console.log('');

let maior = 0;
for(index = 0; index < numbers.length; index += 1) {
    if(numbers[index] > maior) {
        maior = numbers[index]
    } else {
        maior = maior
    }
} console.log(maior)

console.log('');

// 6) Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

console.log('EXERCÍCIO 6');
console.log('');

impares = 0;
for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 != 0) {
        impares += 1
    } else {
        impares = impares
    }
} console.log(impares)

console.log('');

// 7) Utilizando for, descubra qual o menor valor contido no array e imprima-o;

console.log('EXERCÍCIO 7');
console.log('');

let menor = Infinity;
for(index = 0; index < numbers.length; index += 1) {
    if(numbers[index] < menor) {
        menor = numbers[index]
    } else {
        menor = menor
    }
} console.log(menor)

console.log('');

// 8) Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

console.log('EXERCÍCIO 8');
console.log('');

contador = [];
for (index = 1; index <= 25; index += 1) {
    contador.push(index)
} console.log(contador)

console.log('');

// 9) Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

console.log('EXERCÍCIO 9');
console.log('');

for (index = 0; index < contador.length; index += 1) {
    console.log(contador[index] / 2)
}