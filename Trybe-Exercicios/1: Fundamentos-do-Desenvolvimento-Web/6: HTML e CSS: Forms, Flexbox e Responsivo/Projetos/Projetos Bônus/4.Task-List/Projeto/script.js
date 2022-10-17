let button = document.getElementById('criar-tarefa')
let input = document.getElementById('texto-tarefa')
let lista = document.getElementsByTagName('ol')[0]

button.addEventListener('click', function(){
    let element = document.createElement('li')
    if(input.value.length < 1) {
        window.alert('Digite algo na caixinha')
    } else {
    element.innerText = input.value
    element.className = 'element'
    lista.appendChild(element)
    input.value = ''
    } 
})
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        let element = document.createElement('li')
        if(input.value.length < 1) {
            window.alert('Digite algo na caixinha')
        } else {
        element.innerText = input.value
        element.className = 'element'
        lista.appendChild(element)
        input.value = ''
        } 
    }
})


lista.addEventListener('click', function(event) {
    if(event.target.className == 'element') {
        if(document.getElementsByClassName('selected').length == 0) {
                event.target.className = 'selected'
            } else {
                document.getElementsByClassName('selected')[0].className = 'element'
                event.target.className = 'selected'
            }
        }
    }
)

lista.addEventListener('dblclick', function(event) {
    if(event.target.className == 'completed') {
        event.target.className = 'element'
    } else {
    event.target.className = 'completed'
            }
        })

let eraser = document.getElementById('apaga-tudo')

eraser.addEventListener('click', function() {
    let tamanhoLista = document.getElementsByTagName('li').length
    for(index = 0; index < tamanhoLista ; index += 1) {
        lista.removeChild(document.getElementsByTagName('li')[0])
    } localStorage.clear()
})


let eraserCompleted = document.getElementById('remover-finalizados')

eraserCompleted.addEventListener('click', function() {
    let quantidadeCompletadas = document.getElementsByClassName('completed').length
    for(index = 0; index < quantidadeCompletadas; index += 1) {
        lista.removeChild(document.getElementsByClassName('completed')[0])
    }
})

let eraserSelected = document.getElementById('remover-selecionado')

eraserSelected.addEventListener('click', function() {
    lista.removeChild(document.getElementsByClassName('selected')[0])
    
})


let save = document.getElementById('salvar-tarefas')

save.addEventListener('click', function() {
    let lista = []
    let classe = []

    for(index = 0; index < document.getElementsByTagName('li').length; index += 1) {
    lista.push(document.getElementsByTagName('li')[index].innerHTML)
    classe.push(document.getElementsByTagName('li')[index].className)
}
    localStorage.setItem('lista', lista)
    localStorage.setItem('classe', classe)

})

if(localStorage.length > 0) {
    window.onload = function() {
        for(index = 0; index < localStorage.getItem('lista').split(',').length; index += 1) {
        let element = document.createElement('li')
        element.innerText = localStorage.getItem('lista').split(',')[index]
        element.className = localStorage.getItem('classe').split(',')[index]
        lista.appendChild(element)
        }
    }
}


let elementoAnterior;
let classeAnterior;
let listItem = document.getElementsByTagName('li')

let upButton = document.getElementById('mover-cima')
let downButton = document.getElementById('mover-baixo')

upButton.addEventListener('click', function(){    
    for(index = 0; index < listItem.length - 1; index += 1) {
        if(listItem[index + 1].className == 'selected') {
            elementoAnterior = listItem[index].innerHTML
            classeAnterior = listItem[index].className
            listItem[index].innerHTML = listItem[index + 1].innerHTML
            listItem[index].className = listItem[index + 1].className

            listItem[index + 1].innerHTML = elementoAnterior
            listItem[index + 1].className = classeAnterior
        }
    }
})

let elementoAtual;
let classeAtual;

downButton.addEventListener('click', function() {
    for(index = 0; index < listItem.length - 1; index += 1) {
        if(listItem[index].className == 'selected') {
            elementoAtual = listItem[index].innerHTML
            classeAtual = listItem[index].className
            listItem[index].innerHTML = listItem[index + 1].innerHTML
            listItem[index].className = listItem[index + 1].className

            listItem[index + 1].innerHTML = elementoAtual
            listItem[index + 1].className = classeAtual
            break
        }
    }
})