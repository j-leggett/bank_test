class Transaction {
  
  constructor(amount) {
    this.amount = amount;
  }

  transactionAmount() {
    return this.amount
  }
}

module.exports = Transaction