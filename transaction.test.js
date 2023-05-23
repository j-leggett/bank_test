const Transaction = require('./transaction')

describe('Transaction class', () => {
  
  it('constructs with a transaction amount', () => {
    const transaction = new Transaction(500)
    result = transaction.transactionAmount()
    expect(result).toEqual(500)
  })
})