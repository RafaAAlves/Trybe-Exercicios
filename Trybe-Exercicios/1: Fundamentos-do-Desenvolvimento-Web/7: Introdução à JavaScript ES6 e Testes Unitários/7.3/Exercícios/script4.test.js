const { encode, decode } = require('./script4');

describe('FUNÇÕES Encode e Decode:', () => {

    test('Testa se encode e decode são funções:', () => {
        expect(encode && decode).toBeDefined()
    })

    test('Testa se a codificação é feita corretamente:', () => { // se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente.
        expect(encode('Rafael é programador')).toBe('R1f12l é pr4gr1m1d4r')
    })

    test('Testa se a decodificação é feita corretamente:', () => { // se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente.
        expect(decode('R1f12l é pr4gr1m1d4r')).toBe('Rafael é programador')
    })  

    test('Testa se as consoantes não são afetadas:', () => {
        expect(encode('bcdfghjklmnpqrstvwxyz')).toBe('bcdfghjklmnpqrstvwxyz')
    })  

    test('Testa se a string retornada tem o mesmo número de caracteres do parametro:', () => {
        expect(encode('123456789')).toHaveLength(9)
    })  
})