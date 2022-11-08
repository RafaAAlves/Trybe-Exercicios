let score = document.getElementById('tutorial')
let character = document.getElementById('character')
let power = 1
let custo2 = 250;
let nivel = 1;

function aftClick() {
    character.style.width = '500px'
}

character.addEventListener('click', () => {
    if (score.innerHTML == 'Clique em mim ☺') {
        score.innerHTML = 1
        character.style.width = '480px'
        setInterval(aftClick, 50)
    } else {
        let pontos = parseInt(score.innerHTML)
        let pontosAtualizados = pontos += power
        score.innerHTML = pontosAtualizados 
        character.style.width = '480px'
        setInterval(aftClick, 50)

    }
})

// character.addEventListener('mouseover', () => {
//     character.style.width = '519px'
// })

// character.addEventListener('mouseout', () => {
//     character.style.width = '500px'
// })

let upgrade1 = document.getElementById('upgrade1');
let upgrade2 = document.getElementById('upgrade2');
let upgrade3 = document.getElementById('upgrade3');
let upgrade4 = document.getElementById('upgrade4');
let dialogo = document.getElementById('dialogue');

function dialogue() {
    dialogo.innerHTML = ''
}
function defaultText() {
    upgrade1.innerHTML = 'Aumentar o PODEEER!! <br> (50)'
    upgrade2.innerHTML = `Auto Click ${nivel} <br> (${custo2})`
    upgrade3.innerHTML = 'Aumentar MUITO o poder! <br> (500)'
    upgrade4.innerHTML = '???????????? <br> (10000)'
}


upgrade1.addEventListener('click', () => {
    if(score.innerHTML >= 50) {
        let pontos = parseInt(score.innerHTML)
        let custo = 50
        let buy = pontos - custo
        score.innerHTML = buy
        upgrade1.disabled = true
        power += 5
        dialogo.innerHTML = 'Uaaau... me sinto tão mais forte!'
        setInterval(dialogue, 5000)
    } else {
        upgrade1.innerHTML = 'opa, sem pontos suficientes  :('
        setInterval(defaultText, 3000)
    }
})

function autoClick() {
    let autoClick = 1
    let pontos = parseInt(score.innerHTML)
    let pontosAtualizados = pontos += autoClick
    score.innerHTML = pontosAtualizados 
} 

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
        upgrade2.innerHTML = 'opa, sem pontos suficientes  :('
        setInterval(defaultText, 5000)
    }
})

upgrade3.addEventListener('click', () => {
    if(score.innerHTML >= 500) {
        let pontos = parseInt(score.innerHTML)
        let custo = 250
        let buy = pontos - custo
        score.innerHTML = buy
        upgrade3.disabled = true
        power += 50
        dialogo.innerHTML = 'EU SOU O MAIS PODEROSOOOO MUAHAHAHAHA... *cof* *cof*'
        setInterval(dialogue, 8000)
    } else {
        upgrade3.innerHTML = 'opa, sem pontos suficientes  :('
        setInterval(defaultText, 3000)
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
        setInterval(dialogue, 10000)
    } else {
        upgrade4.innerHTML = 'opa, sem pontos suficientes  :('
        setInterval(defaultText, 3000)
    }
})