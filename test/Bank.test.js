import * as chai from 'chai';
import {expect} from 'chai';
const should = chai.should();
import Bank from '../modules/Bank';

describe('A BANK', () => {

  describe('Should NOT be able to', () => {
    it('Should NOT be able to create new offices without street', () => {
      const bank = new Bank('BBVA');

      expect(
        bank.openOffice({
          street: '',
          number: '5045',
          city: 'Sao Paulo',
          country: 'Brasil',
          employees: 10,
        })

      ).to.throw('The bank can NOT open offices without a street');
    });

    it('Should NOT be able to create new offices without number', () => {
      const bank = new Bank('BBVA');

      expect(
        bank.openOffice({
          street: 'Maldivas',
          number: '',
          city: 'Sao Paulo',
          country: 'Brasil',
          employees: 10,
        })

      ).to.throw('The bank can NOT open offices without a number');
    });

    it('Should NOT be able to create new offices without city', () => {
      const bank = new Bank('BBVA');

      expect(
        bank.openOffice({
          street: 'Maldivas',
          number: '5045',
          city: '',
          country: 'Brasil',
          employees: 10,
        })

      ).to.throw('The bank can NOT open offices without a city');
    });

    it('Should NOT be able to create new offices without country', () => {
      const bank = new Bank('BBVA');

      expect(
        bank.openOffice({
          street: 'Maldivas',
          number: '5045',
          city: 'Sao Paulo',
          country: '',
          employees: 10,
        })

      ).to.throw('The bank can NOT open offices without a country');
    });
  });


  it('Should be able to create new offices', () => {
    const bank = new Bank('BBVA');

    bank.openOffice({
      street: 'Santos',
      number: '5045',
      city: 'Sao Paulo',
      country: 'Brasil',
      employees: 10,
    });

    (bank.offices).has.lengthOf(1);
  });

  it('Should NOT be able to move current offices to another city without a street', () => {
    const bank = new Bank(
      'BBVA',
      {
        street: 'Santos',
        number: '5045',
        city: 'Sao Paulo',
        country: 'Brasil',
        employees: 10,
      });

    expect(
      (bank.office[0]).moveTo({
        street: '',
        number: '5045',
        city: 'Sao Paulo',
        country: 'Brasil',
      })

    ).to.throw('The bank can NOT move the office to another city that has NOT a street');
  });

  it('Should NOT be able to move current offices to another city without a number', () => {
    const bank = new Bank(
      'BBVA',
      {
        street: 'Santos',
        number: '5045',
        city: 'Sao Paulo',
        country: 'Brasil',
        employees: 10,
      });

      expect(
        (bank.office[0]).moveTo({
          street: 'Maldivas',
          number: '',
          city: 'Sao Paulo',
          country: 'Brasil',
        })

      ).to.throw('The bank can NOT move the office to another city that has NOT a number');
  });

  it('Should NOT be able to move current offices to another city without a city', () => {
    const bank = new Bank(
      'BBVA',
      {
        street: 'Santos',
        number: '5045',
        city: 'Sao Paulo',
        country: 'Brasil',
        employees: 10,
      });

      expect(
        (bank.office[0]).moveTo({
          street: 'Maldivas',
          number: '5045',
          city: '',
          country: 'Brasil',
        })

      ).to.throw('The bank can NOT move the office to another city that has NOT a city');
  });

  it('Should NOT be able to move current offices to another city without a country', () => {
    const bank = new Bank(
      'BBVA',
      {
        street: 'Santos',
        number: '5045',
        city: 'Sao Paulo',
        country: 'Brasil',
        employees: 10,
      });

      expect(
        (bank.office[0]).moveTo({
          street: 'Maldivas',
          number: '5045',
          city: 'Sao Paulo',
          country: '',
        })

      ).to.throw('The bank can NOT move the office to another city that has NOT a country');
  });

  it('Should be able to move current offices', () => {
    const bank = new Bank(
      'BBVA',
      {
        street: 'Santos',
        number: '5045',
        city: 'Sao Paulo',
        country: 'Brasil',
        employees: 10,
      });

    (bank.office[0]).moveTo({
      street: 'Santos',
      number: '5045',
      city: 'Sao Paulo',
      country: 'Brasil',
    });
  });

  it('Should be able to create accounts', () => {

  });

  it('Should be able to freeze accounts', () => {

  });


  describe('When is tranfering money from one account to another one', () => {
    it('Should not be able to transfer money if the any account is frozen', () => {

    });

    it('Should be able to freeze accounts if someone has not enough money', () => {

    });
  });
});
