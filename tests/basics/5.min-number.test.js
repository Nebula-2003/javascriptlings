import { describe, it, expect } from 'vitest';
import { minNumber } from '../../tasks/1.basics/5.min-number.js';

describe('minNumber', () => {
  it('should return the smallest number', () => {
    expect(minNumber([1, 2, 3])).toEqual(1);
  });

  it('should handle negative numbers', () => {
    expect(minNumber([-1, -5, -3])).toEqual(-5);
  });

  it('should handle a mix of positive and negative numbers', () => {
    expect(minNumber([-10, 5, 0, -2, 8])).toEqual(-10);
  });

  it('should return the single element in a single-element array', () => {
    expect(minNumber([42])).toEqual(42);
  });
});
