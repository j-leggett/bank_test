class Statement {

  constructor(transactions) {
    this.transactions = transactions;
    this.Statement = 'date || credit || debit || balance'
  } 

  print() {
    return this.Statement
  }

  
}

module.exports = Statement;