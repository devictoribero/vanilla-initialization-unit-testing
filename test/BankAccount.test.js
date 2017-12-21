import * as chai from 'chai';
import BankAccount from '../modules/BankAccount'

import {expect} from 'chai';
const should = chai.should();

describe('A BANK ACCOUNT', () => {
  it ('Should have an ID defined', () => {
    const bankAccountId = new BankAccount().id;

    bankAccountId.should.exist;
  });

  it ('Should have an ID auto generated type::string', () => {
    const bankAccountId = new BankAccount().id;

    bankAccountId.should.be.a('string');
  });

  it ('Should have an ID with more than 20 characters', () => {
    const bankAccountId = new BankAccount().id;

    bankAccountId.should.have.lengthOf(20);
  });

  it ('Should have a balance defined', () => {
    const balance = new BankAccount().balance;

    should.exist(balance);
  });

  it ('Should have an balance type::int', () => {
    const balance = new BankAccount().balance;

    balance.should.be.a('number');
  });

  it ('Should NOT have a negative balance', () => {
    const balance = new BankAccount().balance;

    balance.should.be.gte(0);
  });

  it ('Should substract correctly the amount of money from the account', () => {
    const account = new BankAccount(100);

    account.substractBalance(90);

    (account.balance).should.be.equal(10);
  });

  it ('Should throw an error if we try to substract more money than the existing', () => {
    const account = new BankAccount(100);

    expect(() => {
      account.substractBalance(999);
    }).to.throw('Balance can not be negative');
  });

  it ('Should NOT be able to add money if the account is frozen', () => {
    const account = new BankAccount(100, true);

    expect(() => {
      account.addBalance(1);
    }).to.throw('Can not add money to a frozen account');
  });

  it ('Should NOT be able to substract money if the account is frozen', () => {
    const account = new BankAccount(100, true);

    expect(() => {
      account.substractBalance(10);
    }).to.throw('Can not substract money to a frozen account');
  });
});
