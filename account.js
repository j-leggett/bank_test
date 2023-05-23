const Transaction = require('./transaction')

class Account {

  constructor() {
    this.balance = 0;
    this.transactions = [];
    this.statement = 'date || credit || debit || balance'
  }

  getBalance() {
    return this.balance
  }

  deposit(amount) {
    this.balance += amount;
    const transaction = new Transaction(amount);
    transaction.debitOrCredit('credit');
    this.transactions.push(transaction);
  }

  withdraw(amount) {
    this.balance -= amount;
    const transaction = new Transaction(amount);
    transaction.debitOrCredit('debit');
    this.transactions.push(transaction);
  }

  formatStatement() {
    this.transactions.forEach((transaction) => {
      if ( transaction.type === 'credit') {
        const statementLine = `${transaction.date} || ${transaction.amount} || || ${this.balance}`
        this.statement += '\n' + statementLine

      } else {
        const statementLine = `${transaction.date} || || ${transaction.amount} || ${this.balance}`
        this.statement += '\n' + statementLine
      }
    })
    this.transactions = []
  }

  printStatement() {
    this.formatStatement()
    console.log(this.statement)
    return this.statement
  }

}

module.exports = Account