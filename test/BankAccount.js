import * as chai from 'chai';
import BankAccount from '../modules/BankAccount'

import {expect} from 'chai';
import {assert} from 'chai';
const should = chai.should();

describe('BankAccount --', () => {
  it ('Should have an ID defined', () => {
    const bankAccountId = new BankAccount(0).id;
    bankAccountId.should.exist;
  });

  it ('Should have an ID auto generated type::string', () => {
    const bankAccountId = new BankAccount(0).id;
    bankAccountId.should.be.a('string');
  });

  it ('Should have an ID with more than 20 characters', () => {
    const bankAccountId = new BankAccount({ balance: 0 }).id;
    bankAccountId.should.have.lengthOf(20);
  });

  it ('Should have a balance defined', () => {
    const balance = new BankAccount({ balance: 0 }).balance;
    should.exist(balance);
  });

  it ('Should have an balance type::int', () => {
    const balance = new BankAccount({ balance: 0 }).balance;
    balance.should.be.a('number');
  });

  it ('Should not have a negative balance', () => {
    const balance = new BankAccount({ balance:0 }).balance;
    balance.should.be.gte(0);
  });

  it ('Should substract correctly the amount of money from the account', () => {
    const bankAccount = new BankAccount({ balance: 100 });

    bankAccount.substractBalance(90);

    (bankAccount.balance).should.be.equal(10);
  });

  it ('Should throw an error if we try to substract more money than the existing', () => {
    const bankAccount = new BankAccount({ balance: 100 });

    expect(() => {
      bankAccount.substractBalance(999);
    }).to.throw('Balance cant be negative');
  });

  it ('Should not be able to add money if the account is frozen', () => {
    const bankAccount = new BankAccount({ balance: 100, frozen: true });

    expect(() => {
      bankAccount.substractBalance(1);
    }).to.throw('Can not add money to a frozen account');
  });

  it ('Should not be able to substract money if the account is frozen', () => {
    const bankAccount = new BankAccount({ balance: 100, frozen: true });

    expect(() => {
      bankAccount.substractBalance(10);
    }).to.throw('Can not substract money to a frozen account');
  });
});
