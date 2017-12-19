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
    const bankAccountId = new BankAccount(0).id;
    bankAccountId.should.have.lengthOf(20);
  });

  it ('Should have a balance defined', () => {
    const balance = new BankAccount(0).balance;
    should.exist(balance);
  });

  it ('Shouldn have an balance type::int', () => {
    const balance = new BankAccount(0).balance;
    balance.should.be.a('number');
  });

  it ('Shouldn\'t have a negative balance', () => {
    const balance = new BankAccount(0).balance;
    balance.should.be.gte(0);
  });

  it ('Shouln\'t be possible to substr more balance than the one is in the account', () => {
    const bankAccount = new BankAccount(100);

    bankAccount.substractBalance(90);

    (bankAccount.balance).should.be.equal(10);
  });
});
