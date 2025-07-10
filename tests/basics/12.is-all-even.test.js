import { describe, it, expect } from 'vitest';
import { isAllEven } from '../../tasks/1.basics/12.is-all-even.js';

describe('isAllEven', () => {
  it('should return true if all numbers are even', () => {
    expect(isAllEven([2, 4, 6])).toEqual(true);
  });

  it('should return false if any number is odd', () => {
    expect(isAllEven([2, 3, 6])).toEqual(false);
  });

  it('should return true for an empty array', () => {
    expect(isAllEven([])).toEqual(true);
  });

  it('should work with negative even numbers', () => {
    expect(isAllEven([-2, -4, -6])).toEqual(true);
  });
});
