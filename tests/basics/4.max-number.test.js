import { describe, it, expect } from 'vitest';
import { maxNumber } from '../../tasks/1.basics/4.max-number.js';

describe('maxNumber', () => {
  it('should return the largest number', () => {
    expect(maxNumber([1, 2, 3])).toEqual(3);
  });

  it('should handle negative numbers', () => {
    expect(maxNumber([-1, -5, -3])).toEqual(-1);
  });

  it('should handle a mix of positive and negative numbers', () => {
    expect(maxNumber([-10, 5, 0, -2, 8])).toEqual(8);
  });

  it('should return the single element in a single-element array', () => {
    expect(maxNumber([42])).toEqual(42);
  });
});
