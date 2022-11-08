// 1) Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
console.log('EXERCÍCIO 1')
console.log('')

function palindrome(palavra) {
    let splitted = palavra.split('');
    let reverse = splitted.reverse();
    let word = reverse.join('');

    
    if (word == palavra)
    return true 
     else {
        return false
    }
}
console.log(palindrome('arara'))
console.log(palindrome('programador'))

console.log('-------------------------------------------------------------------------------------')

// 2) Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
console.log('EXERCÍCIO 2')
console.log('')

function maior(array) {
    let maiorValor = 0;
    for(index = 0; index < array.length; index += 1) {
        if (array[index] > maiorValor){
            maiorValor = array[index]
        } 
    } return maiorValor
}

console.log(maior([2, 3, 6, 7, 10, 1]));

console.log('-------------------------------------------------------------------------------------')

// 3) Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
console.log('EXERCÍCIO 3')
console.log('')

function menor(array) {
    let menorValor = Infinity;
    for(index = 0; index < array.length; index += 1) {
        if (array[index] < menorValor){
            menorValor = array[index]
        } 
    } return menorValor
}

console.log(menor([2, 3, 6, 7, 10, 1, -17]));


console.log('-------------------------------------------------------------------------------------')

// 4) Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
console.log('EXERCÍCIO 4')
console.log('')

function maiorNome(array) {
    let maiorNome = [''];
    let qntLetras = 0;
    for(index = 0; index < array.length; index += 1) {
        if (array[index].length > qntLetras){
            maiorNome = array[index]
            qntLetras = maiorNome.length
        } else if (array[index].length == qntLetras) {
            maiorNome = maiorNome + ', ' + array[index]
        }
    } 
    if(maiorNome.length > qntLetras) {
        return maiorNome + ' possuem a mesma quantidade de letras'
    } else {
        return maiorNome
    }
}

console.log(maiorNome(['Rafael','Andriely','Feh','Fernanda','Jean']));

console.log('-------------------------------------------------------------------------------------');
