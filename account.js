const Transaction = require('./transaction')

class Account {

  constructor() {
    this.balance = 0;
    this.transactions = [];
    this.statement = 'date || credit || debit || balance';
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