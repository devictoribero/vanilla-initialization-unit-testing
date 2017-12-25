import isEquivalent from '../helpers/isEquivalent';

export default class Bank {
  constructor(name, offices) {
    this.name = name;
    this.offices = offices || [];
  }

  openOffice(office) {
    if (office.street===undefined || office.street===null || office.street=== '') {
      throw new Error('The bank can NOT open offices without a street');
    }
    if (office.number===undefined || office.number===null || office.number=== '') {
      throw new Error('The bank can NOT open offices without a number');
    }
    if (office.city===undefined || office.city===null || office.city=== '') {
      throw new Error('The bank can NOT open offices without a city');
    }
    if (office.country===undefined || office.country===null || office.country=== '') {
      throw new Error('The bank can NOT open offices without a country');
    }
    if (office.employees===undefined || office.employees===null) {
      office.employees = 0;
    }
    this.offices.push(office);
  }

  moveOfficeTo(officeToChange, newOffice) {
    if (newOffice.street===undefined || newOffice.street===null || newOffice.street=== '') {
      throw new Error('The bank can NOT move the office to another city that has NOT a street');
    }
    if (newOffice.number===undefined || newOffice.number===null || newOffice.number=== '') {
      throw new Error('The bank can NOT move the office to another city that has NOT a number');
    }
    if (newOffice.city===undefined || newOffice.city===null || newOffice.city=== '') {
      throw new Error('The bank can NOT move the office to another city that has NOT a city');
    }
    if (newOffice.country===undefined || newOffice.country===null || newOffice.country=== '') {
      throw new Error('The bank can NOT move the office to another city that has NOT a country');
    }

    let haveFoundAccount = false,
        i = 0;
    while (haveFoundAccount === false && this.offices[i] !== undefined) {
      if (isEquivalent(officeToChange, this.offices[i])) {
        this.offices[i] = Object.assign({}, newOffice);
        return;
      }
      i++;
    }
  }
}
