export default class Client {
  constructor(name, lastname, accounts) {
    if (accounts === null || accounts === undefined) {
      throw new Error('Client should have an account');
    }
    this.name = name;
    this.lastname = lastname;
    this.accounts = accounts;
  }

  currentAccounts() {
    return this.accounts;
  }

  frozenAccounts() {
    return this.accounts.filter(account => (account.isFrozen));
  }
}
