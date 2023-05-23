class Transaction {
  
  constructor(amount) {
    this.amount = amount;
    this.date = new Date().toLocaleDateString();
    this.type = null; //debit or credit
  }

  getAmount() {
    return this.amount;
  }

  getDate() {
  return this.date;
  }

  debitOrCredit(type) {
    this.type = type;
  }

  getType() {
    return this.type;
  }
}

module.exports = Transaction