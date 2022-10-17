let create = document.getElementById('criar-carta');
let carta = document.getElementById('carta-gerada');
let texto = document.getElementById('carta-texto');
let counter = document.getElementById('carta-contador')

create.addEventListener('click', function(){
    carta.innerHTML = ''
    
    for(index = 0; index < texto.value.split(' ').length; index += 1) {
        if(texto.value.split(' ')[index] == '') {
            
        } else {
            let span = document.createElement('span')
            span.innerHTML = texto.value.split(' ')[index]
            carta.appendChild(span)
        }
        
    }

    if(carta.innerText == '') {
        carta.innerHTML = 'Por favor, digite o conteúdo da carta.'
    }
    counter.innerHTML =`Esta carta possui ${words.length} palavras!`
    randomize()
})

let style = ['newspaper', 'magazine1', 'magazine2'];
let size = ['medium', 'big', 'reallybig'];
let rotation = ['rotateleft', 'rotateright'];
let inclination = ['skewleft', 'skewright'];
let words = document.getElementsByTagName('span')

function randomize() {

    for (index = 0; index < words.length; index += 1){
    let styleN = Math.floor(Math.random() * 3) 
    let sizeN = Math.floor(Math.random() * 3)
    let rotationN = Math.floor(Math.random() * 2)
    let inclinationN = Math.floor(Math.random() * 2)
    
    words[index].className = style[styleN]
    words[index].className += ' ' + size[sizeN]
    words[index].className += ' ' + rotation[rotationN]
    words[index].className += ' ' + inclination[inclinationN]

}}

carta.addEventListener('click', function(event) {
    for (index = 0; index < words.length; index += 1){
        let styleN = Math.floor(Math.random() * 3) 
        let sizeN = Math.floor(Math.random() * 3)
        let rotationN = Math.floor(Math.random() * 2)
        let inclinationN = Math.floor(Math.random() * 2)
        
        event.target.className = style[styleN]
        event.target.className += ' ' + size[sizeN]
        event.target.className += ' ' + rotation[rotationN]
        event.target.className += ' ' + inclination[inclinationN]
}})



