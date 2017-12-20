export default class BankAccount {
  constructor(balance, isFrozen) {
    this.id = this.generateRandomId();
    this.balance = balance || 0;
    this.isFrozen = isFrozen || false;
  }

  generateRandomId() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    ).substring(0,20).toUpperCase();
  }

  addBalance(balanceToAdd) {
    if (this.isFrozen) {
      throw new Error('Can not add money to a frozen account');
    }
    this.balance += balanceToAdd;
  }

  substractBalance(balanceToSubstract) {
    if (this.isFrozen) {
      throw new Error('Can not substract money to a frozen account');
    }

    if (this.balance - balanceToSubstract < 0) {
      throw new Error('Balance cant be negative');
    }
    this.balance -= balanceToSubstract;
  }
}
