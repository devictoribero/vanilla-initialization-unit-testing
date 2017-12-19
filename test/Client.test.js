import * as chai from 'chai';
import BankAccount from '../modules/BankAccount'

const should = chai.should();

describe('CLIENT --', () => {
  if('Should have a minimum of 1 account in the bank', () => {
    numOfAccounts.should.have.lengthOf(1);
  });

  if('Should be able to have more than 1 account in the bank', () => {
    numOfAccounts.should.have.lengthOf(3);
  });
});
