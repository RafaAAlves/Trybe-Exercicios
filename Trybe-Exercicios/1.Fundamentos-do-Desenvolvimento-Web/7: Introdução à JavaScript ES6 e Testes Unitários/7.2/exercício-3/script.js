const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };


  // Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
  console.log('--------------------------------------------------------')

 function addToObject(object, key, value) {
    object[key] = value
    console.log(lesson2)
  } addToObject(lesson2, 'turno', 'Noite')

  // Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
  console.log('--------------------------------------------------------')

  function listKeys(objeto) {
    console.log(Object.keys(objeto))
  } listKeys(lesson1)

  // Crie uma função para mostrar o tamanho de um objeto.
  console.log('--------------------------------------------------------')

  function sizeOf(objeto) {
    console.log(`Este objeto possui ${Object.entries(objeto).length} entradas.`)
  } sizeOf(lesson1)

  // Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
  console.log('--------------------------------------------------------')

  function listValues(objeto) {
    console.log(Object.values(objeto))
  } listValues(lesson1)

  // Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.
  console.log('--------------------------------------------------------')

  const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 })
  console.log(allLessons)

  // Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.
  console.log('--------------------------------------------------------')

  function allStudents() {
    Estudantes1 = allLessons.lesson1.numeroEstudantes
    Estudantes2 = allLessons.lesson2.numeroEstudantes
    Estudantes3 = allLessons.lesson3.numeroEstudantes

    console.log(Estudantes1 + Estudantes2 + Estudantes3)

  } allStudents()

  // Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
  console.log('--------------------------------------------------------')

  function keyValue(objeto, position) {
    console.log(Object.values(objeto)[position])
  } keyValue(lesson1, 0)

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. 
console.log('--------------------------------------------------------')

function locate(objeto, chave, valor) {
    let falses = 0
    for(let index = 0; index < Object.keys(objeto).length; index += 1) {
        if (Object.keys(objeto)[index] == chave && Object.values(objeto)[index] == valor) {
            console.log(true)
            return
        } else {
            falses += 1
        }
        if (falses === Object.keys(objeto).length) {
            console.log(false)
        }
    }
} locate(lesson1, 'materia', 'Matemática')

// Utilizando o objeto (allLesson), crie uma função para contar quantos estudantes assistiram às aulas de Matemática.
console.log('--------------------------------------------------------')

function mathStudents() {
    let students = 0;
    for (let index = 0; index < Object.keys(allLessons).length; index += 1) {
        
        if(Object.values(Object.values(allLessons)[index])[0] == 'Matemática') {
            students += Object.values(Object.values(allLessons)[index])[1]
        }
    }
    console.log(students)

} mathStudents()
