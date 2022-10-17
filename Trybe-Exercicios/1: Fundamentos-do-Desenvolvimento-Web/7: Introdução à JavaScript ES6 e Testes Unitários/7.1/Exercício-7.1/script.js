let score = document.getElementById('tutorial')
let character = document.getElementById('character')
let power = 1

character.addEventListener('click', () => {
    if (score.innerHTML == 'Clique em mim ☺') {
        score.innerHTML = 1
    } else {
        let pontos = parseInt(score.innerHTML)
        let pontosAtualizados = pontos += power
        score.innerHTML = pontosAtualizados 
    }
})

let upgrade1 = document.getElementById('upgrade1');
let upgrade2 = document.getElementById('upgrade2');
let upgrade3 = document.getElementById('upgrade3');
let upgrade4 = document.getElementById('upgrade4');

upgrade1.addEventListener('click', () => {
    if(score.innerHTML >= 50) {
        let pontos = parseInt(score.innerHTML)
        let custo = 50
        let buy = pontos - custo
        score.innerHTML = buy
        upgrade1.disabled = true
        power = 5
    } else {
        window.alert('opa, sem pontos suficientes  :(')
    }
})

upgrade3.addEventListener('click', () => {
    if(score.innerHTML >= 250) {
        let pontos = parseInt(score.innerHTML)
        let custo = 250
        let buy = pontos - custo
        score.innerHTML = buy
        upgrade3.disabled = true
        power = 50
    } else {
        window.alert('opa, sem pontos suficientes  :(')
    }
})

let rickroll = document.getElementById('rickroll')

upgrade4.addEventListener('click', () => {
    if(score.innerHTML >= 10000) {
        let pontos = parseInt(score.innerHTML)
        let custo = 10000
        let buy = pontos - custo
        score.innerHTML = buy
        upgrade4.disabled = true
        rickroll.play()
    } else {
        window.alert('opa, sem pontos suficientes  :(')
    }
})