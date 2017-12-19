export default class BankAccount {
  constructor(balance) {
    this.id = this.generateRandomId();
    this.balance = balance;
  }

  generateRandomId() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    ).substring(0,20).toUpperCase();
  }

  addBalance(balanceToAdd) {
    this.balance += balanceToAdd;
  }

  substractBalance(balanceToSubstract) {
    if (this.balance - balanceToSubstract < 0) {
      throw new Error('Balance cant be negative');
    }
    this.balance -= balanceToSubstract;
  }
}
