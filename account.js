const Transaction = require('./transaction')

class Account {

  constructor() {
    this.balance = 0;
    this.transactions = [];
    this.statement = 'date || credit || debit || balance';
    this.currentBalance = 0
  }

  getBalance() {
    return this.balance
  }

  deposit(amount) {
    this.balance += amount;
    const transaction = new Transaction(amount);
    transaction.debitOrCredit('credit');
    transaction.balance = this.balance
    this.transactions.push(transaction);
  }

  withdraw(amount) {
    this.balance -= amount;
    const transaction = new Transaction(amount);
    transaction.debitOrCredit('debit');
    transaction.balance = this.balance
    this.transactions.push(transaction);
  }

  formatStatement() {

    this.transactions.forEach((transaction) => {
      if ( transaction.type === 'credit') {
        this.currentBalance += transaction.amount;
        const statementLine = `${transaction.date} || ${transaction.amount} || || ${this.currentBalance}`;
        this.statement += '\n' + statementLine;

      } else {
        this.currentBalance -= transaction.amount;
        const statementLine = `${transaction.date} || || ${transaction.amount} || ${this.currentBalance}`;
        this.statement += '\n' + statementLine;
      }
    })
    this.transactions = []
  }

  printStatement() {
    this.formatStatement();
    console.log(this.statement);
    return this.statement;
  }

}

module.exports = Account