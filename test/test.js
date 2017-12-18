import { assert } from 'chai';
import sum from '../index.js';

describe('App', () => {
  it('it works', () => {
    const result = sum(5,5);
    assert.equal(result, 5);
  });
});
