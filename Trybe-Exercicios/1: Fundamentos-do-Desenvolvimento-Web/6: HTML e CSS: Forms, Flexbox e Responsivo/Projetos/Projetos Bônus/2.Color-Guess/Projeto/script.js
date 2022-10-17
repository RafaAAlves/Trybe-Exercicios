
let container = document.getElementById('ball-container');
let cor = document.getElementById('rgb-color').innerHTML;

function createBall() {
let numeroSorteado = Math.ceil(Math.random() * 6)
    for (index = 1; index < 7; index += 1) {
        let ball = document.createElement('span');
        if (index == numeroSorteado) {
            ball.className = 'ball'
            ball.style.backgroundColor = document.getElementById('rgb-color').innerHTML
            container.appendChild(ball)
        } else {
        ball.className = 'ball'
        ball.style.backgroundColor = `rgb(${Math.ceil(Math.random() * 255 )},${Math.ceil(Math.random() * 255 )}, ${Math.ceil(Math.random() * 255 )})`
        container.appendChild(ball)
        }
    }
} createBall()


let answer = document.getElementById('answer');
let scoreNumber = document.getElementById('score')
let pontos = 0

for (index = 0; index < document.getElementsByClassName('ball').length; index += 1) {
let ball = document.getElementsByClassName('ball')[index]
ball.addEventListener('click', function(event) {
    if (event.target.style.backgroundColor == cor) {
        answer.innerHTML = 'Acertou!'
            } else if (event.target.style.backgroundColor !== cor) {
                answer.innerHTML = 'Errou! Tente novamente!'
            }

    if(answer.innerText == 'Acertou!') {
        pontos += 3
        scoreNumber.innerText = 'PLACAR: ' + pontos
            }
        }
    )}

let button = document.getElementById('reset-game');

button.addEventListener('click', function(){
    for(index = 0; index < 6; index += 1) {
        let balls = document.getElementsByClassName('ball')[0]
        balls.remove()
    }
    document.getElementById('rgb-color').innerHTML = `rgb(${Math.ceil(Math.random() * 255 )}, ${Math.ceil(Math.random() * 255 )}, ${Math.ceil(Math.random() * 255 )})`
    cor = document.getElementById('rgb-color').innerHTML
    createBall()
    answer.innerHTML = 'Escolha uma cor'

    for (index = 0; index < document.getElementsByClassName('ball').length; index += 1) {
        let ball = document.getElementsByClassName('ball')[index]
        ball.addEventListener('click', function(event) {
            if (event.target.style.backgroundColor == cor) {
                answer.innerHTML = 'Acertou!'
                    } else if (event.target.style.backgroundColor !== cor) {
                        answer.innerHTML = 'Errou! Tente novamente!'
                    }
            if(answer.innerText == 'Acertou!') {
                pontos += 3
                scoreNumber.innerText = 'PLACAR: ' + pontos
                    }
                }
            )}

})


