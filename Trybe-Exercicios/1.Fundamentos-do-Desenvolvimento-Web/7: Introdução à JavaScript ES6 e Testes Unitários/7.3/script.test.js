const sum = require('./script')

test('A soma de 4 + 5 é igual a 9:', () => {
    expect(sum(4, 5)).toBe(9)
})