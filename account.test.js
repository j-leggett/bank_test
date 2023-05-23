const Account = require('./account')

describe('Account class', () => {

  it('generates an account with no money in it', () => {
    const account = new Account;
    expect(account.getBalance()).toEqual(0)
  })
})

