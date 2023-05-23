const Transaction = require('./transaction')

class Account {

  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  getBalance() {
    return this.balance
  }

  deposit(amount) {
    const transaction = new Transaction(amount);
    transaction.debitOrCredit('credit');
    this.transactions.push(transaction);
  }
  
}

module.exports = Account