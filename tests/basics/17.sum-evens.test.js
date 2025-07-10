import { describe, it, expect } from 'vitest';
import { sumEvens } from '../../tasks/1.basics/17.sum-evens.js';

describe('sumEvens', () => {
  it('should return sum of even numbers only', () => {
    expect(sumEvens([1, 2, 3, 4])).toEqual(6);
  });

  it('should return 0 if no even numbers are found', () => {
    expect(sumEvens([1, 3, 5])).toEqual(0);
  });

  it('should handle negative even numbers', () => {
    expect(sumEvens([-2, 1, -4, 3])).toEqual(-6);
  });

  it('should return 0 for an empty array', () => {
    expect(sumEvens([])).toEqual(0);
  });
});
