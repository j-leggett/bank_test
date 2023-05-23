const Account = require('./account')

describe('Account class', () => {


  it('generates an account with no money in it', () => {
    const account = new Account;
    expect(account.balance).toEqual(0)
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

  it('allows you to withdraw money and save this to transaction array', () => {
    const account = new Account;
    account.withdraw(400)
    const transactions = account.transactions
    expect(transactions.length).toBe(1)
    expect(transactions[0].amount).toEqual(400)
    expect(transactions[0].type).toEqual('debit')
    expect(transactions[0].date).toEqual('23/05/2023')
  })

  it('records many transactions succesfully', () => {
    const account = new Account;
    account.deposit(200);
    account.withdraw(100);
    account.deposit(500);
    const transactions = account.transactions
    expect(transactions.length).toBe(3)
    expect(transactions[0].amount).toEqual(200)
    expect(transactions[0].type).toEqual('credit')
    expect(transactions[0].date).toEqual('23/05/2023')
    expect(transactions[1].amount).toEqual(100)
    expect(transactions[1].type).toEqual('debit')
    expect(transactions[1].date).toEqual('23/05/2023')
    expect(transactions[2].amount).toEqual(500)
    expect(transactions[2].type).toEqual('credit')
    expect(transactions[2].date).toEqual('23/05/2023')
  })

  it('updates the balance when transactions are made', () => {
    const account = new Account;
    account.deposit(200);
    account.withdraw(100);
    account.deposit(500);
    account.formatStatement()
    expect(account.balance).toEqual(600)
  })

  it('generates an empty statement when no transactions made', () => {
    const account = new Account;
    result = account.printStatement();
    expect(result).toBe('date || credit || debit || balance')
  })

  it('formats statement correctly for credit transactions', () => {
    const account = new Account;
    account.deposit(100)
    expect(account.printStatement()).toBe('date || credit || debit || balance\n23/05/2023 || 100 || || 100')
  })

  it('formats statement correctly for debit transactions', () => {
    const account = new Account;
    account.withdraw(100)
    expect(account.printStatement()).toBe('date || credit || debit || balance\n23/05/2023 || || 100 || -100')
  })

  it('formats statement correctly for credit and debit transactions', () => {
    const account = new Account;
    account.deposit(200)
    account.deposit(300)
    account.withdraw(100)
    expect(account.printStatement()).toBe('date || credit || debit || balance\n23/05/2023 || 200 || || 200\n23/05/2023 || 300 || || 500\n23/05/2023 || || 100 || 400')
  })

  it('does not duplicat balance when bank statement is printed, then updated and then printed again', () => {
    const account = new Account;
  account.deposit(200)
  account.deposit(300)
  result1 = account.printStatement()
  expect(result1).toEqual('date || credit || debit || balance\n23/05/2023 || 200 || || 200\n23/05/2023 || 300 || || 500')
  account.withdraw(100)
  result2 = account.printStatement()
  expect(result2).toEqual('date || credit || debit || balance\n23/05/2023 || 200 || || 200\n23/05/2023 || 300 || || 500\n23/05/2023 || || 100 || 400') 
  })
})

