const Transaction = require('./transaction')

describe('Transaction class', () => {
  
  it('constructs with a transaction amount', () => {
    const transaction = new Transaction(500)
    result = transaction.getAmount()
    expect(result).toEqual(500)
  })

  it('records a date for the transaction', () => {
    const transaction = new Transaction(100);
    expect(transaction.getDate()).toEqual(new Date().toLocaleDateString())
  })
})