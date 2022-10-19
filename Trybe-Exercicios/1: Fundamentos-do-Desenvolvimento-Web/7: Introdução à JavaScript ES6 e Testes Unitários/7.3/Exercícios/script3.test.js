const myFizzBuzz = require('./script3')

describe('FUNÇÃO FIZZBUZZ:', () => {

    test('Testa se o numero 15 é divisível por 3 e por 5:', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
    })

    test('Testa se o numero 9 é divisível por 3 e não é divisível por 5:', () => {
        expect(myFizzBuzz(9)).toBe('fizz')
    })

    test('Testa se o numero 10 é divisível por 5 e não é divisível por 3:', () => {
        expect(myFizzBuzz(10)).toBe('buzz')
    })

    test('Testa se o numero 7 não é divisível por 3 e nem por 5:', () => {
        expect(myFizzBuzz(7)).toBe(7)
    })

    test('Testa se o parâmetro é diferente de um nûmero', () => {
        expect(myFizzBuzz('oii')).toBe(false)
    })
})