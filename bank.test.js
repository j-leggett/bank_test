const Account = require('./account')

describe('Bank class', () => {
  
  it('constructs as an empty bank account', () => {
    const account = new Account();
    let result = account.getAmount();
    expect(result).toEqual(0)

  })

  it('has the courrect account balance after depositing money', () => {
    const account = new Account;
    account.deposit(150)
    expect(account.getAmount()).toEqual(150)
  })
})