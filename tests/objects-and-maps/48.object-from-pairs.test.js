import { describe, it, expect } from 'vitest';
import { objectFromPairs } from '../../tasks/3.objects-and-maps/48.object-from-pairs.js';

describe('objectFromPairs', () => {
  it('should convert key-value array to object', () => {
    expect(objectFromPairs([['a', 1], ['b', 2]])).toEqual({a: 1, b: 2});
  });

  it('should handle an empty array', () => {
    expect(objectFromPairs([])).toEqual({});
  });

  it('should handle a larger array of pairs', () => {
    const pairs = [['name', 'John'], ['age', 30], ['isAdmin', true]];
    expect(objectFromPairs(pairs)).toEqual({name: 'John', age: 30, isAdmin: true});
  });
});
