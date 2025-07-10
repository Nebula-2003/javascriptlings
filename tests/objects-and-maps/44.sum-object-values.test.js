import { describe, it, expect } from 'vitest';
import { sumObjectValues } from '../../tasks/3.objects-and-maps/44.sum-object-values.js';

describe('sumObjectValues', () => {
  it('should sum all values of numeric object', () => {
    expect(sumObjectValues({a: 1, b: 2})).toEqual(3);
  });

  it('should return 0 for an empty object', () => {
    expect(sumObjectValues({})).toEqual(0);
  });

  it('should handle negative values', () => {
    expect(sumObjectValues({a: -1, b: -2, c: 5})).toEqual(2);
  });

  it('should ignore non-numeric values', () => {
    expect(sumObjectValues({a: 1, b: 'hello', c: 3})).toEqual(4);
  });
});
