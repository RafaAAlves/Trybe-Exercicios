function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // 1) Crie um calendário dinamicamente.
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  let calendarDays = document.getElementById('days');
  for(index = 0; index < decemberDaysList.length; index += 1) {
  let dia = document.createElement('li');
  dia.innerText = decemberDaysList[index]
  dia.className = 'day'
    if(dia.innerText == 24 || dia.innerText == 25 || dia.innerText == 31) {
        dia.className += ' holiday'
    }
    if (dia.innerText == 4 || dia.innerText == 11 || dia.innerText == 18 || dia.innerText == 25) {
        dia.className += ' friday'
    }

  calendarDays.appendChild(dia)
  }

  // 2) Implemente uma função que crie dinamicamente um botão com o nome “Feriados”.

  function holidaysButton (buttonName) {
    let local = document.getElementsByClassName('buttons-container')[0];
    let button = document.createElement('button')
    button.id = 'btn-holiday'
    button.innerHTML = buttonName
    button.style.fontWeight = 'bolder'
    button.style.fontSize = '15px'
    button.style.height = '25px'
    button.style.width = '180px'
    local.appendChild(button)
  } holidaysButton('Feriados')

  // 3) Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".

  function changecolor() {
    let newButton = document.getElementById('btn-holiday');
    let folgas = document.querySelectorAll('.holiday');
    let cor = 'rgb(238,238,238)'
    let cor2 = 'purple'


    newButton.addEventListener('click', function() {
        for (let index = 0; index < folgas.length; index += 1) {
            if (folgas[index].style.backgroundColor == cor2) {
                folgas[index].style.backgroundColor = cor
            } else {
                folgas[index].style.backgroundColor = cor2
            }
        }
    })
} changecolor()

// 4) Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira".
function fridaysButton (buttonName) {
    let local = document.getElementsByClassName('buttons-container')[0];
    let button = document.createElement('button')
    button.id = 'btn-friday'
    button.innerHTML = buttonName
    button.style.height = '25px'
    button.style.width = '180px'
    button.style.fontWeight = 'bolder'
    button.style.fontSize = '15px'
    local.appendChild(button)
  } fridaysButton('Sexta-feira')


// 5) Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras.

function changeFridayText() {
    let fridayButton = document.getElementById('btn-friday');
    let sextas = document.querySelectorAll('.friday');
    let novoTexto = 'SEXTOUUUU!!'

    fridayButton.addEventListener('click', function() {
        for (let index = 0; index < sextas.length; index += 1) {
            let dataSexta = index * 7 + 4
            
            if (sextas[index].innerHTML !== novoTexto) {
                sextas[index].innerHTML = novoTexto
            } else {
                sextas[index].innerHTML = dataSexta
            }
        }
    })
} changeFridayText()

// 6) Implemente duas funções que criem um efeito de “zoom”.
function zoomIn() {
    for (index = 0; index < decemberDaysList.length; index += 1) {
let dias = document.getElementsByClassName('day')[index]
dias.addEventListener('mouseover', function() {
    dias.style.fontSize = '250%'
        })
    }
} zoomIn()

function zoomOut() {
    for (index = 0; index < decemberDaysList.length; index += 1) {
let dias = document.getElementsByClassName('day')[index]
dias.addEventListener('mouseout', function() {
    dias.style.fontSize = '125%'
        })
    }
} zoomOut()