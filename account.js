const Transaction = require('./transaction')

class Account {

  constructor() {
    this.balance = 0;
    this.transactions = [];
    this.statement = 'date || credit || debit || balance';
  }

  getBalance() {
    let total = 0
    this.transactions.forEach((transaction) => {
      if ( transaction.type === 'credit') {
        total += transaction.amount;
      } else {
        total -= transaction.amount
      }
    })
    return total
  }

  deposit(amount) {
    const transaction = new Transaction(amount);
    transaction.debitOrCredit('credit');
    transaction.balance = this.balance
    this.transactions.push(transaction);
  }

  withdraw(amount) {
    const transaction = new Transaction(amount);
    transaction.debitOrCredit('debit');
    transaction.balance = this.balance
    this.transactions.push(transaction);
  }

  formatStatement() {
    this.transactions.forEach((transaction) => {
      if ( transaction.type === 'credit') {
        this.balance += transaction.amount;
        const statementLine = `${transaction.date} || ${transaction.amount} || || ${this.balance}`;
        this.statement += '\n' + statementLine;

      } else {
        this.balance -= transaction.amount;
        const statementLine = `${transaction.date} || || ${transaction.amount} || ${this.balance}`;
        this.statement += '\n' + statementLine;
      }
    })
    this.transactions = []
  }

  printStatement() {
    this.formatStatement();
    console.log(this.statement)
    return this.statement;
  }

}

module.exports = Account