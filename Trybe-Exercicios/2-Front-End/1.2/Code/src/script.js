import '/src/style.css';

const button = document.getElementById('superBTN');
const image = document.getElementById('image');
const name = document.getElementById('name');
const url = 'https://www.superheroapi.com/api.php/2335107026644474/';

  
button.addEventListener('click', () => {
  const random = Math.floor(Math.random() * 731)

  fetch(`${url}${random}`)
  .then((response) => response.json())
  .then((data) =>  { 
    name.innerHTML = data.name
    image.src = data.image.url
    image.style.border = '9px groove red'
    name.style.opacity = '100%'
  });
  
});