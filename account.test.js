const Account = require('./account')

describe('Account class', () => {

  it('generates an account with no money in it', () => {
    const account = new Account;
    expect(account.getBalance()).toEqual(0)
  })

  it('allows you to deposit money and save this to transaction array', () => {
    const account = new Account;
    account.deposit(500)
    const transactions = account.transactions
    expect(transactions.length).toBe(1)
    expect(transactions[0].amount).toEqual(500)
    expect(transactions[0].type).toEqual('credit')
    expect(transactions[0].date).toEqual('23/05/2023')
  })
})

