import { describe, it, expect } from 'vitest';
import { getValues } from '../../tasks/3.objects-and-maps/41.get-values.js';

describe('getValues', () => {
  it('should return all values from object', () => {
    expect(getValues({a: 1, b: 2})).toEqual([1, 2]);
  });

  it('should return an empty array for an empty object', () => {
    expect(getValues({})).toEqual([]);
  });

  it('should handle various data types', () => {
    const obj = { name: 'John', age: 30, isAdmin: true };
    expect(getValues(obj)).toEqual(['John', 30, true]);
  });
});
