const assert = require('chai').assert;
const sum = require('../index.js');

describe('App', () => {
  it('it works', () => {
    const result = sum(5,5);
    assert.equal(result, 5);
  });
});
