



function coresFundo (cor1, cor2, cor3, cor4, cor5, cor6) {
    for (index = 0; index < 6; index += 1){
        let tabelaCores = [cor1, cor2, cor3, cor4, cor5, cor6] 
        let coresDoFundo = document.getElementById('coresFundo')
        let botaoCorFundo = document.createElement('li')
        
        botaoCorFundo.style.margin = '2px'
        botaoCorFundo.style.border = 'solid black 2px'
        botaoCorFundo.className = 'botoes-fundo'
        botaoCorFundo.style.width = '30px'
        botaoCorFundo.style.height= '30px'
        botaoCorFundo.style.display = 'inline-block'
        botaoCorFundo.style.backgroundColor = tabelaCores[index]
        coresDoFundo.appendChild(botaoCorFundo)
    }
} coresFundo('red', 'green', 'blue', 'yellow', 'purple', 'white')


function coresFonte (cor1, cor2, cor3, cor4, cor5, cor6) {
    for (index = 0; index < 6; index += 1){
        let tabelaCores = [cor1, cor2, cor3, cor4, cor5, cor6] 
        let coresDaFonte = document.getElementById('coresFonte')
        let botaoCorFonte = document.createElement('li')

        botaoCorFonte.className = 'botoes-fonte'
        botaoCorFonte.style.margin = '2px'
        botaoCorFonte.style.border = 'solid black 2px'
        botaoCorFonte.style.width = '30px'
        botaoCorFonte.style.height= '30px'
        botaoCorFonte.style.display = 'inline-block'
        botaoCorFonte.style.backgroundColor = tabelaCores[index]
        coresDaFonte.appendChild(botaoCorFonte)
    }
} coresFonte('red', 'green', 'blue', 'yellow', 'purple', 'black')


    for (index = 0; index < 6; index += 1) {
    let botoesFundo = document.getElementsByClassName('botoes-fundo')[index]
     botoesFundo.addEventListener('click' , function (event){
       document.body.style.backgroundColor = event.target.style.backgroundColor
       let backgroundColor = event.target.style.backgroundColor
       localStorage.setItem('Cor de Fundo', backgroundColor)
    }
)}


    for (index = 0; index < 6; index += 1) {
    let botoesFonte = document.getElementsByClassName('botoes-fonte')[index]
     botoesFonte.addEventListener('click' , function (event){
       document.body.style.color = event.target.style.backgroundColor
       let fontColor = event.target.style.backgroundColor
       localStorage.setItem('Cor da Fonte', fontColor)
}
)}


function tamanhosFontes (font1, font2, font3, font4, font5,) {
    for (index = 0; index < 5; index += 1){
        let tabelaFontes = [font1, font2, font3, font4, font5,] 
        let tamanhosFonte = document.getElementById('tamFonte')
        let botaoTamFonte = document.createElement('li')
        
        botaoTamFonte.innerHTML = tabelaFontes[index]
        botaoTamFonte.className = 'tamanho-fonte'
        botaoTamFonte.style.fontSize = '15px'
        botaoTamFonte.style.color = 'black'
        botaoTamFonte.style.margin = '2px'
        botaoTamFonte.style.border = 'solid black 2px'
        botaoTamFonte.style.width = '30px'
        botaoTamFonte.style.height= '30px'
        botaoTamFonte.style.display = 'inline-block'
        botaoTamFonte.style.backgroundColor = 'white'
        tamanhosFonte.appendChild(botaoTamFonte)
    }
} tamanhosFontes(1, 1.5, 2, 2.5, 10)

    for (index = 0; index < 5; index += 1) {
    let botaoTamanho = document.getElementsByClassName('tamanho-fonte')[index]
     botaoTamanho.addEventListener('click' , function (event){
       document.getElementsByTagName('p')[0].style.fontSize = '30' * event.target.innerHTML + 'px'
       fontSize = '30' * event.target.innerHTML + 'px'
       localStorage.setItem('Tamanho da Fonte', fontSize)
}
)}


function tamanhosLinhas (l1, l2, l3, l4, l5) {
    for (index = 0; index < 5; index += 1){
        let tabelaTamanhosL = [l1, l2, l3, l4, l5] 
        let tamanhosLinha = document.getElementById('tamLinha')
        let botaoTamLinha = document.createElement('li')
        
        botaoTamLinha.innerHTML = tabelaTamanhosL[index]
        botaoTamLinha.className = 'tamanho-linha'
        botaoTamLinha.style.fontSize = '15px'
        botaoTamLinha.style.color = 'black'
        botaoTamLinha.style.margin = '2px'
        botaoTamLinha.style.border = 'solid black 2px'
        botaoTamLinha.style.width = '30px'
        botaoTamLinha.style.height= '30px'
        botaoTamLinha.style.display = 'inline-block'
        botaoTamLinha.style.backgroundColor = 'white'
        tamanhosLinha.appendChild(botaoTamLinha)
    }
} tamanhosLinhas(1, 1.5, 2, 2.5, 10)

    for (index = 0; index < 5; index += 1) {
    let botaoTamanhoL = document.getElementsByClassName('tamanho-linha')[index]
     botaoTamanhoL.addEventListener('click' , function (event){
       document.getElementsByTagName('p')[0].style.lineHeight = '100' * event.target.innerHTML + '%'
       lineHeight = '100' * event.target.innerHTML + '%'
       localStorage.setItem('Tamanho da Linha', lineHeight)
}
)}


function fontes (font1, font2, font3, font4) {
    for (index = 0; index < 4; index += 1){
        let tabelaFontes = [font1, font2, font3, font4] 
        let tiposFonte = document.getElementById('fontes')
        let botaoFonte = document.createElement('li')
        
        botaoFonte.innerHTML = tabelaFontes[index]
        botaoFonte.className = 'tipos-fonte'
        botaoFonte.style.fontSize = '15px'
        botaoFonte.style.color = 'black'
        botaoFonte.style.margin = '2px'
        botaoFonte.style.border = 'solid black 2px'
        botaoFonte.style.width = '100px'
        botaoFonte.style.height= '30px'
        botaoFonte.style.display = 'inline-block'
        botaoFonte.style.backgroundColor = 'white'
        tiposFonte.appendChild(botaoFonte)
    }
} fontes('Comic Sans', 'Arial', 'Fantasy', 'Monospace')

    for (index = 0; index < 4; index += 1) {
    let botaoFontes = document.getElementsByClassName('tipos-fonte')[index]
     botaoFontes.addEventListener('click' , function (event){
       document.getElementsByTagName('p')[0].style.fontFamily = event.target.innerHTML
       textFont = event.target.innerHTML
       localStorage.setItem('Fonte do Texto', textFont)
}
)}

window.onload (
    document.body.style.backgroundColor = localStorage.getItem('Cor de Fundo'),
    document.body.style.color = localStorage.getItem('Cor da Fonte'),
    document.getElementsByTagName('p')[0].style.fontSize = localStorage.getItem('Tamanho da Fonte'),
    document.getElementsByTagName('p')[0].style.lineHeight = localStorage.getItem('Tamanho da Linha'),
    document.getElementsByTagName('p')[0].style.fontFamily = localStorage.getItem('Fonte do Texto')
    )
