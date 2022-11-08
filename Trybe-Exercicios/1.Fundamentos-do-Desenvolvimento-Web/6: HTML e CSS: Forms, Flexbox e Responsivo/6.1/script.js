let button = document.getElementById('submit')

// function maintainData (event){
//     event.preventDefault()
// }

// button.addEventListener('click', maintainData)

button.addEventListener('click', function (event){

let textInput = document.getElementById('texto').value
let nameInput = document.getElementById('name').value
let emailInput = document.getElementById('email').value

if (textInput > 500 || textInput < 1 || nameInput < 10 || nameInput > 40 || emailInput < 10 || emailInput > 50) {
    event.preventDefault()
    window.alert('Dados Inválidos')
} else {
    window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
}
})