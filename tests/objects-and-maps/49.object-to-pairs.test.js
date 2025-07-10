import { describe, it, expect } from 'vitest';
import { objectToPairs } from '../../tasks/3.objects-and-maps/49.object-to-pairs.js';

describe('objectToPairs', () => {
  it('should convert object to key-value array', () => {
    expect(objectToPairs({a: 1, b: 2})).toEqual([['a', 1], ['b', 2]]);
  });

  it('should handle an empty object', () => {
    expect(objectToPairs({})).toEqual([]);
  });

  it('should handle a larger object', () => {
    const obj = {name: 'John', age: 30, isAdmin: true};
    expect(objectToPairs(obj)).toEqual([['name', 'John'], ['age', 30], ['isAdmin', true]]);
  });
});
