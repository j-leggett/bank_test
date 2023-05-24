const Statement = require('./statement')

describe('statement class', () => {

  it('prints an empty statement with just the header', () => {
    const statement = new Statement('');
    expect(statement.print()).toEqual('date || credit || debit || balance')
  })
})