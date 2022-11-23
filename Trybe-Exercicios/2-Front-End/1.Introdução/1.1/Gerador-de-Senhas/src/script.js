import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import '/src/style.css'


const button = document.getElementsByTagName('button')[0];
const password = document.getElementsByTagName('h2')[0];

button.addEventListener('click', () => {
  password.innerHTML = nanoid();
});

password.addEventListener('click', async(event) => {
  await copy(event.target.innerHTML)
  alert('Senha copiada!')
})
