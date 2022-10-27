// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  let pattern = /a/g;
  return names.reduce((contador, palavra) => {
    contador += palavra.length - palavra.toLowerCase().replace(pattern, '').length;
    return contador
  }, 0)
};

console.log(containsA())
