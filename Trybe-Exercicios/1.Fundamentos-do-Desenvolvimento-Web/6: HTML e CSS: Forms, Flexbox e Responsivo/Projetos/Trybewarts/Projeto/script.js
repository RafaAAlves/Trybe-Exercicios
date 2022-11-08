const email = document.getElementById('email');
const senha = document.getElementById('password');
const button = document.getElementById('send');

button.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});

const enviar = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');

enviar.disabled = true;

checkbox.addEventListener('click', () => {
  if (checkbox.checked === true) {
    enviar.disabled = false;
  }
  if (checkbox.checked === false) {
    enviar.disabled = true;
  }
});

const texto = document.getElementById('textarea');
const counter = document.getElementById('counter');

texto.addEventListener('keyup', () => {
  counter.innerHTML = 500 - texto.value.length;
});

let nome;
let lastName;
let emailInput;
let casa;
let observations;
let familia;
let materias = '';
let avaliation;

function declareValue() {
  nome = `${document.getElementById('input-name').value}`;
  lastName = ` ${document.getElementById('input-lastname').value}`;
  emailInput = document.getElementById('input-email').value;
  casa = document.getElementById('house').value;
  observations = document.getElementById('textarea').value;
}
function captureValue() {
  for (let index = 0; index < 10; index += 1) {
    if (document.getElementsByClassName('label-rate')[index].checked === true) {
      avaliation = document.getElementsByClassName('label-rate')[index].value;
    }
  } // capturar avaliação
}
function captureFamily() {
  for (let index = 0; index < 3; index += 1) {
    if (document.getElementsByClassName('label-family')[index].checked === true) {
      familia = document.getElementsByClassName('label-family')[index].value;
    }
  } // capturar família
}
function captureSubject() {
  for (let index = 0; index < document.getElementsByClassName('subject').length; index += 1) {
    if (document.getElementsByClassName('subject')[index].checked === true) {
      materias += `${document.getElementsByClassName('subject')[index].value}, `;
    }
  } // capturar matéria
}
enviar.addEventListener('click', () => {
  declareValue();
  captureValue();
  captureFamily();
  captureSubject();
});

enviar.addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('evaluation-form').style.display = 'none';
  const form = document.createElement('form');
  form.id = 'form-data';

  document.body.appendChild(form);

  const newForm = document.getElementById('form-data');

  const strings = ['Nome: ', 'Email: ', 'Casa: ',
    'Família: ', 'Matérias: ', 'Avaliação: ', 'Observações: '];
  const valores = [nome + lastName, emailInput, casa, familia, materias, avaliation, observations];

  for (let index = 0; index < valores.length; index += 1) {
    const paragrafo = document.createElement('p');
    paragrafo.innerText = strings[index] + valores[index];
    newForm.appendChild(paragrafo);
  }
});
