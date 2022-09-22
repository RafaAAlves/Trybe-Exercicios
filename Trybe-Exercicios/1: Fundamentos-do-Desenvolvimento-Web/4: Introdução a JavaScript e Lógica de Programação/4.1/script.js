// Exercícios Aula 4.1

// 1) Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados.

let a = 16
let b = 11

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

// 2) Utilize if/else para fazer um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

const valor1 = 18
const valor2 = 5

if (valor1 > valor2) {
    console.log(valor1)
} else if (valor1 == valor2) {
    console.log('mesmo valor')
} else {
    console.log(valor2)
}

// 3) Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

const primeiro = 20
const segundo = 18
const terceiro = 25

if (primeiro > segundo && primeiro > terceiro) {
    console.log(primeiro)
} else if (segundo > primeiro && segundo > terceiro) {
    console.log(segundo)
} else  {
    console.log(terceiro)
}

// 4) Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

const numero = -7

if (numero > 0) {
    console.log('positive')
} else if (numero < 0) {
    console.log('negative')
} else {
    console.log('zero')
}

// 5) Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

const angulo1 = 34
const angulo2 = 75
const angulo3 = 71

if (angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0) {
    console.log('valor inválido');
} else if (angulo1 + angulo2 + angulo3 === 180) {
    console.log(true);
} else  {
    console.log(false);
}

// 6) Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let input = 'PAWN';
let peça = input.toLowerCase();

switch (peça) {
    case 'pawn':
        console.log('Move pra frente e ataca na diagonal');
        break;
    
    case 'bishop':
        console.log('Move e ataca nas diagonais')
        break;

    case 'knight':
        console.log('Move e ataca em L')
        break;

    case 'rook':
        console.log('Move e ataca na horizontal e na vertical')
        break;

    case 'queen':
        console.log('Move e ataca para todos os lados')
        break;

    case 'king':
        console.log('Move e ataca para todos os lados, mas apenas uma casa')
        break;
    
    default:
        console.log('Peça inválida')
        break
}

// 7) Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.

let nota = -12;

if (nota < 0 || nota > 100) {
    console.log('Valor Inválido')
} else if (nota >= 90) {
    console.log('Nota A');
} else if (nota >= 80) {
    console.log('Nota B');
} else if (nota >= 70) {
    console.log('Nota C');
} else if (nota >= 60) {
    console.log('Nota D');
} else if (nota >= 50) {
    console.log('Nota E');
} else {
    console.log('Nota F');
}

// 8) Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false. (Bonus: use somente um if.)

const first = 1864;
const second = 657;
const third = 3;

if (first % 2 === 0 || second % 2 === 0 || third % 2 === 0){
    console.log(true)
} else {
    console.log(false)
}

// 9) Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false. (Bonus: use somente um if.)

const firstN = 156;
const secondN = 17;
const thirdN = 348;

if (firstN % 2 != 0 || secondN % 2 != 0 || thirdN % 2 != 0){
    console.log(true)
} else {
    console.log(false)
}

// 10) Utilize if/else para escrever um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos. (Atente que, sobre o custo do produto, incide um imposto de 20%.)

const custoProd = 300;
const valorVenda = 500; 

if (custoProd >= 0 && valorVenda >= 0) {
    const custoTotalProd = custoProd * 1.2;
    const lucro = valorVenda - custoTotalProd;
    console.log(lucro * 1000)
} else {
    console.log('Os valores não podem ser negativos!')
}


// 11) Utilize if/else para fazer um programa que, dado um salário bruto, calcule o líquido a ser recebido.

const salarioBruto = 3000; // salário bruto
let salarioINSS; // salário com o INSS descontado
let inss; // valor do INSS a ser multiplicado com o salário bruto (ex: se o inss for 8%, o valor será de 0,92)
let ir; // imposto de renda, que é a parcelaIR2 subtraído pela parcela do imposto
let parcelaIR; // salário com o INSS descontado multiplicado pela porcentagem da aliquota
let parcelaIR2; // salário com o INSS descontado subtraído pela parcelaIR

if (salarioBruto < 1556.95){
    inss = 0.92;
    salarioINSS = salarioBruto * inss;
} else if (salarioBruto > 1556.94 && salarioBruto < 2594.93) {
    inss = 0.91;
    salarioINSS = salarioBruto * inss;
}
  else if (salarioBruto > 2594.92 && salarioBruto < 5189.83) {
    inss = 0.89;
    salarioINSS = salarioBruto * inss;
}
  else if (salarioBruto > 5189.82) {
    inss = 570.88;
    salarioINSS = salarioBruto - inss;
}
    if (salarioINSS < 1903.99) {
        ir = 0
    } else if (salarioINSS > 1903.98 && salarioINSS < 2826.66) {
        parcelaIR = salarioINSS * 0.925
        parcelaIR2 = salarioINSS - parcelaIR
        ir = parcelaIR2 - 142.80
    } else if (salarioINSS > 2826.65 && salarioINSS < 3751.06) {
        parcelaIR = salarioINSS * 0.85
        parcelaIR2 = salarioINSS - parcelaIR
        ir = parcelaIR2 - 354.80
    } else if (salarioINSS > 3751.05 && salarioINSS < 4664.69) {
        parcelaIR = salarioINSS * 0.775
        parcelaIR2 = salarioINSS - parcelaIR
        ir = parcelaIR2 - 636.13
    } else {
        parcelaIR = salarioINSS * 0.725
        parcelaIR2 = salarioINSS - parcelaIR
        ir = parcelaIR2 - 869.36
    }
        console.log(salarioINSS - ir);