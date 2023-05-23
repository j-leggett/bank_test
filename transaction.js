class Transaction {
  
  constructor(amount) {
    this.amount = amount;
    this.date = new Date().toLocaleDateString();
  }

  getAmount() {
    return this.amount
  }

  getDate() {
  return this.date
  }
}

module.exports = Transaction