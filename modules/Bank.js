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
}
