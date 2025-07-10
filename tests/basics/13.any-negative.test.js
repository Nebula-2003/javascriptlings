import { describe, it, expect } from 'vitest';
import { anyNegative } from '../../tasks/1.basics/13.any-negative.js';

describe('anyNegative', () => {
  it('should return true if any number is negative', () => {
    expect(anyNegative([1, -2, 3])).toEqual(true);
  });

  it('should return false if no numbers are negative', () => {
    expect(anyNegative([1, 2, 3])).toEqual(false);
  });

  it('should return true if all numbers are negative', () => {
    expect(anyNegative([-1, -2, -3])).toEqual(true);
  });

  it('should return false for an empty array', () => {
    expect(anyNegative([])).toEqual(false);
  });
});
