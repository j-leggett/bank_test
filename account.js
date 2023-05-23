class Account {

  constructor() {
    this.amount = 0;
  }

  getAmount() {
    return this.amount
  }

  deposit(money) {
    this.amount += money;
  }
}

module.exports = Account