const myRemove = require('./script2')

describe('FUNÇÃO myRemove:', () => {

    test('Verifica se a função myRemove retorna o array esperado (sem o 3):', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toMatchObject([1, 2, 4])
    }) 

    test('Verifica se a função myRemove NÃO retorna o array completo:', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toMatchObject([1, 2, 3, 4])
    }) 

    test('Verifica se a função myRemove retorna o array completo:', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toMatchObject([1, 2, 3, 4])
    }) 
})