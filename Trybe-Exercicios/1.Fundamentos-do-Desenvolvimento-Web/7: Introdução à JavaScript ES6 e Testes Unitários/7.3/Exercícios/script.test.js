const sum = require('./script')

describe('Testes para as somas:', () => { 

  test('Soma de 4 + 5 deve ser 9:', () => {
    expect(sum(4, 5)).toBe(9)
})

  test('Soma de 0 + 0 deve ser 0:', () => {
    expect(sum(0, 0)).toBe(0)
  })

  test('Soma de número + string deve lançar um erro:', () => {
    expect(() => { sum(4, '5').toThrow(Error)
  })
})
})