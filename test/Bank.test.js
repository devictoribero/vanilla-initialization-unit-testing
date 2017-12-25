import * as chai from 'chai';
import {expect} from 'chai';
const should = chai.should();
import Bank from '../modules/Bank';
import BankAccount from '../modules/BankAccount';
import Client from '../modules/Client';

describe('A BANK', () => {

  describe('Should NOT be able to', () => {
    describe('create new office without a', () => {
      it('street', () => {
        const bank = new Bank('BBVA');
        const officeToOpen = {
          street: null,
          number: '5045',
          city: 'Sao Paulo',
          country: 'Brasil',
          employees: 10,
        };

        expect(() => {
          bank.openOffice(officeToOpen);

        }).to.throw('The bank can NOT open offices without a street');
      });

      it('number', () => {
        const bank = new Bank('BBVA');

        expect(() => {
          bank.openOffice({
            street: 'Maldivas',
            number: '',
            city: 'Sao Paulo',
            country: 'Brasil',
            employees: 10,
          });

        }).to.throw('The bank can NOT open offices without a number');
      });

      it('city', () => {
        const bank = new Bank('BBVA');

        expect(() => {
          bank.openOffice({
            street: 'Maldivas',
            number: '5045',
            city: '',
            country: 'Brasil',
            employees: 10,
          });

        }).to.throw('The bank can NOT open offices without a city');
      });

      it('country', () => {
        const bank = new Bank('BBVA');

        expect(() => {
          bank.openOffice({
            street: 'Maldivas',
            number: '5045',
            city: 'Sao Paulo',
            country: '',
            employees: 10,
          });

        }).to.throw('The bank can NOT open offices without a country');
      });
    });

    describe('move current offices to another city without a', () => {
      it ('street', () => {
        const bank = new Bank(
          'BBVA',
          [{
            street: 'Santos',
            number: '5045',
            city: 'Sao Paulo',
            country: 'Brasil',
            employees: 10,
          }]);

        expect(() => {
          bank.moveOfficeTo(bank.offices[0], {
            street: '',
            number: '5045',
            city: 'Sao Paulo',
            country: 'Brasil',
          });

        }).to.throw('The bank can NOT move the office to another city that has NOT a street');
      });

      it('number', () => {
        const bank = new Bank(
          'BBVA',
          [{
            street: 'Santos',
            number: '5045',
            city: 'Sao Paulo',
            country: 'Brasil',
            employees: 10,
          }]);

        expect(() => {
          bank.moveOfficeTo(bank.offices[0], {
            street: 'Maldivas',
            number: '',
            city: 'Sao Paulo',
            country: 'Brasil',
          });

        }).to.throw('The bank can NOT move the office to another city that has NOT a number');
      });

      it('city', () => {
        const bank = new Bank(
          'BBVA',
          [{
            street: 'Santos',
            number: '5045',
            city: 'Sao Paulo',
            country: 'Brasil',
            employees: 10,
          }]);

        expect(() => {
          bank.moveOfficeTo(bank.offices[0], {
            street: 'Maldivas',
            number: '5045',
            city: '',
            country: 'Brasil',
          });

        }).to.throw('The bank can NOT move the office to another city that has NOT a city');
      });

      it('country', () => {
        const bank = new Bank(
          'BBVA',
          [{
            street: 'Santos',
            number: '5045',
            city: 'Sao Paulo',
            country: 'Brasil',
            employees: 10,
          }]);

        expect(() => {
          bank.moveOfficeTo(bank.offices[0], {
            street: 'Maldivas',
            number: '5045',
            city: 'Sao Paulo',
            country: '',
          });

        }).to.throw('The bank can NOT move the office to another city that has NOT a country');
      });
    });
  });

  describe('Should be able to', () => {
    it('create new offices', () => {
      const bank = new Bank('BBVA');

      bank.openOffice({
        street: 'Santos',
        number: '5045',
        city: 'Sao Paulo',
        country: 'Brasil',
        employees: 10,
      });

      (bank.offices).should.be.lengthOf(1);
    });


    it('move current offices', () => {
      const office1 = {
        street: 'Santos',
        number: 5045,
        city: 'Sao Paulo',
        country: 'Brasil',
        employees: 10,
      };
      const office2 = {
        street: 'Papaya',
        number: 1,
        city: 'Sao Paulo',
        country: 'Brasil',
        employees: 10,
      };
      const bank = new Bank('BBVA', [office2]);
      bank.moveOfficeTo(bank.offices[0], office2);

      (bank.offices[0].number).should.not.be.equal(office1.number);
    });

    it('register new clients', () => {
      const onlyAccount = new BankAccount(10000);
      const client = new Client('Victor', 'Ribero', [onlyAccount]);
      const bank = new Bank('BBVA');
      const numberOfClients = bank.clients.length;

      bank.registerNewClient(client);

      numberOfClients.should.not.be.equal(bank.clients.length);
    });

    it ('freeze accounts', () => {
      const onlyAccount = new BankAccount(10000);
      const isNotFrozen = onlyAccount.isFrozen;
      const client = new Client('Victor', 'Ribero', [onlyAccount]);
      const bbva = new Bank('BBVA');
      bbva.registerNewClient(client);

      bbva.freezeAccount(onlyAccount);

      (onlyAccount.isFrozen).should.not.be.equal(isNotFrozen);
    });

    it ('unfreeze accounts', () => {
      const onlyAccount = new BankAccount(10000, true);
      const isFrozen = onlyAccount.isFrozen;
      const client = new Client('Victor', 'Ribero', [onlyAccount]);
      const bbva = new Bank('BBVA');
      bbva.registerNewClient(client);

      bbva.unfreezeAccount(onlyAccount);

      (onlyAccount.isFrozen).should.not.be.equal(isFrozen);
    });
  });



  describe ('When is tranfering money from one account to another one', () => {
    it ('Should not be able to transfer money if the any account is frozen', () => {

    });

    it ('Should be able to freeze accounts if someone has not enough money', () => {

    });
  });
});
