// Arrays

console.log('')
console.log('Arrays:') // estes console.log são para tornar a saída do comando mais legível
console.log('')


let nomes = ['Andriely', 'Fernanda', 'Jean','Fellipe','Artur','Hariel','Mariana'];
nomes.push('Lucas'); // .push() Adiciona um elemento no final do array
nomes.unshift('Rafael'); // .unshift() adiciona um elemento no inicio do array
nomes.unshift('May');
nomes.pop(); // .pop() Remove o ultimo elemento do array
nomes.shift(); // .shift() Remove o primeiro elemento do array

console.log(nomes);
console.log(nomes.length); // .length retorna o número de elementos que existem dentro de determinada array
let indexDoArtur = nomes.indexOf('Artur');
console.log(indexDoArtur); // .indexOf() retorna o index (posição dentro do array) de determinado elemento

// For
console.log('')
console.log('For:')
console.log('')



let number = 9;
for (index = 1; index <= 10; index += 1) {
    console.log(number * index)
}


let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index])
}


// For/of
console.log('')
console.log('For/of:')
console.log('')

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let lista of names) {
    console.log(lista)
}