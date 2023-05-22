const BankAccount = require('./bank')

describe('Bank class', () => {
  
  it('constructs as an empty bank account', () => {
    const account = new BankAccount();
    let result = account.getAmount();
    expect(result).toEqual(0)

  })
})