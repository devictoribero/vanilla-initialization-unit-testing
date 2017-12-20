import * as chai from 'chai';
import {expect} from 'chai';
import BankAccount from '../modules/BankAccount';
import Client from '../modules/Client';

const should = chai.should();

describe('A CLIENT', () => {
  it ('Should NOT be able to have 0 bank accounts', () => {
    expect(() => {
      const numOfAccounts = new Client('Victor', 'Ribero');

    }).to.throw('Client should have an account');
  });

  it ('Should have a minimum of 1 bank account', () => {
    const client = new Client('Victor', 'Ribero', [new BankAccount()]);
    const accounts = client.currentAccounts();

    accounts.should.have.lengthOf(1);
  });

  it ('Should be able to have more than 1 bank accounts', () => {
    const accounts = new Client(
      'Victor',
      'Ribero',
      [new BankAccount(), new BankAccount(100)],
    ).currentAccounts();

    accounts.should.have.lengthOf(2);
  });

  it ('Should know which frozen he has frozen', () => {
    const client = new Client(
      'Victor',
      'Ribero',
      [
        new BankAccount(100, true),
        new BankAccount(100, false),
        new BankAccount(100, true),
      ],
    );

    const frozenAccounts = client.frozenAccounts();

    frozenAccounts.should.have.lengthOf(2);
  });

  describe('when wants to transfer money from one of his accounts', () => {
    it ('Should be the owner of emissor account', () => {
      const accountNotOwned = new BankAccount(10000);
      const client = new Client('Victor', 'Ribero', [new BankAccount(100)]);

      expect(() => {
        client.transferMoney(accountNotOwned, client.accounts[0], 100);

      }).to.throw('This client is not the owner of the account');
    });

    it ('Should have enough money in his account', () => {
      const client = new Client('Victor', 'Ribero', [new BankAccount()]);
      const NOT_ENOUGH_MONEY = 100;

      expect(() => {
        client.transferMoney(
          client.accounts[0],
          client.accounts[0],
          NOT_ENOUGH_MONEY
        );

      }).to.throw('The emissor account has not enough money');
    });
  });
});
