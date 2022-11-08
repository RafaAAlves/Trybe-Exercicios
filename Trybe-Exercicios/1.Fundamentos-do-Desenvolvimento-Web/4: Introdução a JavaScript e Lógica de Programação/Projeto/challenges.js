// Desafio 1
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true
  } return false
}

// Desafio 2
function calcArea(base, height) {
return (base * height) / 2
}

// Desafio 3
function splitSentence(sentence) {
 return sentence.split(' ')
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points = wins * 3 + ties
  return points
}

// Desafio 6
function highestCount(array) {
  let number = -Infinity;
  let repeats = 1;
  
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === number) {
      repeats += 1
    } else if (array[index] > number) {
      number = array[index]
      repeats = 1
    }
  } return repeats
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
  return 'cat1'
} else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
  return 'cat2'
} return 'os gatos trombam e o rato foge'
}
// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for(let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 == 0 && array[index] % 5 == 0){
      result.push('fizzBuzz')
    } else if(array[index] % 3 == 0 && array[index] % 5 !== 0) {
      result.push('fizz')
    } else if(array[index] % 3 !== 0 && array[index] % 5 == 0) {
      result.push('buzz')
    } else {
      result.push('bug!')
    }
  } return result
}

// Desafio 9
function encode(string) {
  let coded = [];
  for(let index = 0; index < string.length; index += 1) {
  if (string[index] == 'a'){
    coded.push('1')
  }
  else if (string[index] == 'e') {
    coded.push('2')
  }
  else if (string[index] == 'i') {
    coded.push('3')
  }
  else if (string[index] == 'o') {
    coded.push('4')
  }
  else if (string[index] == 'u') {
    coded.push('5')
  } else {
    coded.push(string[index])
  }
} return coded.join('');
} 

function decode(string) {
  let decoded = [];
  for(let index = 0; index < string.length; index += 1) {
  if (string[index] == '1'){
    decoded.push('a')
  }
  else if (string[index] == '2') {
    decoded.push('e')
  }
  else if (string[index] == '3') {
    decoded.push('i')
  }
  else if (string[index] == '4') {
    decoded.push('o')
  }
  else if (string[index] == '5') {
    decoded.push('u')
  } else {
    decoded.push(string[index])
  }
} return decoded.join('');
} 

// Desafio 10
function techList(array, nome) {
  let arrayOrd = array.sort()
  if(array.length == 0) {
    return 'Vazio!'
  } 
  let fullList = [];
    for(let index = 0; index < array.length; index += 1) {
      let lista = {
          tech: '',
          name: '',
      }
      lista.tech = arrayOrd[index];
      lista.name = nome;
      fullList.push(lista)
    } return fullList
  }