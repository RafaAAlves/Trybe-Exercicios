// Este arquivo apenas testei promises em um código que rejeita (reject) o numero gerado se ele for ímpar, e aceita (resolve) se ele for par.

const randomNumber = () => Math.ceil(Math.random() * 100);

const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const numero = randomNumber();
      if(numero % 2 === 0) {
        resolve(`O ${numero} é par!`);
      } else {
        reject(new Error(`o ${numero} não é par`))
      }
    }, 1000)
  });


resolvedPromise().then((response) => {
  console.log(`Ebaaaa! ${response}`)
}).catch((error) => {
  console.log(`OPA, parece que ${error.message} :(`)
}).finally(() => {
  console.log('É isso :D')
})
