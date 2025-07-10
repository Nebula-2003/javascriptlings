import { describe, it, expect } from 'vitest';
import { getKeys } from '../../tasks/3.objects-and-maps/42.get-keys.js';

describe('getKeys', () => {
  it('should return all keys from object', () => {
    expect(getKeys({a: 1, b: 2})).toEqual(['a', 'b']);
  });

  it('should return an empty array for an empty object', () => {
    expect(getKeys({})).toEqual([]);
  });

  it('should handle an object with more keys', () => {
    const obj = { name: 'John', age: 30, isAdmin: true };
    expect(getKeys(obj)).toEqual(['name', 'age', 'isAdmin']);
  });
});
