import { describe, it, expect } from 'vitest';
import { sumArray } from '../../tasks/1.basics/3.sum-array.js';

describe('sumArray', () => {
  it('should return the sum of all numbers', () => {
    expect(sumArray([1, 2, 3])).toEqual(6);
  });

  it('should return 0 for an empty array', () => {
    expect(sumArray([])).toEqual(0);
  });

  it('should handle negative numbers', () => {
    expect(sumArray([-1, -2, 3])).toEqual(0);
  });

  it('should handle a single number in the array', () => {
    expect(sumArray([10])).toEqual(10);
  });
});