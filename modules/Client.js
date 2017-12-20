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

  transferMoney(emissorAccount, receptorAccount, money) {
    if (!this.isOwnerOf(emissorAccount)) {
      throw new Error('This client is not the owner of the account');
    }

    if (emissorAccount.isFrozen) {
      throw new Error('The emissor account is frozen');
    }

    if (receptorAccount.isFrozen) {
      throw new Error('The receptor account is frozen');
    }

    if (!emissorAccount.hasSameOrHigherMoney(money)) {
      throw new Error('The emissor account has not enough money');
    }

    emissorAccount.substractBalance(money);
    receptorAccount.addBalance(money)
  }

  isOwnerOf(accountToSearch) {
    const accountFound =
      this.accounts.filter(account => (account.id === accountToSearch.id));
    return accountFound.length !== 0;
  }
}
