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
let dialogo = document.getElementById('dialogue');

function dialogue() {
    dialogo.innerHTML = ''
}

upgrade1.addEventListener('click', () => {
    if(score.innerHTML >= 50) {
        let pontos = parseInt(score.innerHTML)
        let custo = 50
        let buy = pontos - custo
        score.innerHTML = buy
        upgrade1.disabled = true
        power = 5
        dialogo.innerHTML = 'Uaaau... me sinto tão mais forte!'
        setInterval(dialogue, 5000)
    } else {
        window.alert('opa, sem pontos suficientes  :(')
    }
})

function autoClick() {
    let autoClick = 1
    let pontos = parseInt(score.innerHTML)
    let pontosAtualizados = pontos += autoClick
    score.innerHTML = pontosAtualizados 
} 

    let custo2 = 250;
    let nivel = 1;

upgrade2.addEventListener('click', () => {
    let pontos = parseInt(score.innerHTML)
    if(score.innerHTML >= custo2) {
        setInterval(autoClick, 200)
        let buy = pontos - custo2
        score.innerHTML = buy;
        upgrade2.innerHTML = `Auto Click ${nivel += 1} <br> (${custo2 * 2})`
        custo2 *= 2
        dialogo.innerHTML = 'Nossa, dá até pra tirar uma sonequinha agora! :)'
        setInterval(dialogue, 10000)
    } else {
        window.alert('opa, sem pontos suficientes  :(')
    }
})

upgrade3.addEventListener('click', () => {
    if(score.innerHTML >= 500) {
        let pontos = parseInt(score.innerHTML)
        let custo = 250
        let buy = pontos - custo
        score.innerHTML = buy
        upgrade3.disabled = true
        power = 50
        dialogo.innerHTML = 'EU SOU O MAIS PODEROSOOOO MUAHAHAHAHA... *cof* *cof*'
        setInterval(dialogue, 8000)
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
        dialogo.innerHTML = 'NEVER GONNA GIVE YOU UUUUUP NEVER GONNA LET YOU DOOOWN!!!'
        setInterval(dialogue, 100000)
    } else {
        window.alert('opa, sem pontos suficientes  :(')
    }
})