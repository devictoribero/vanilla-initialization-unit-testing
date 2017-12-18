import {should} from 'chai';

describe('BankAccount --', () => {
  it('Should have an ID defined', () => {
    should.exist(id);
  });

  it('Should have an ID auto generated type::string', () => {
    id.should.be.a('string');
  });

  it('Should have an ID with more than 7 characters', () => {
    id.should.have.lengthOf(7);
  });

  it('Should have a balance defined', () => {
    should.exist(balance);
  });

  it('Shouldn have an balance type::int', () => {
    balance.should.be.a('string');
  });

  it('Shouldn\'t have a negative balance', () => {
  });

});
