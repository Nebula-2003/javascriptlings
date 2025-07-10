import { describe, it, expect } from 'vitest';
import { squareNumbers } from '../../tasks/1.basics/18.square-numbers.js';

describe('squareNumbers', () => {
  it('should return squared numbers', () => {
    expect(squareNumbers([1, 2, 3])).toEqual([1, 4, 9]);
  });

  it('should return an empty array for an empty input', () => {
    expect(squareNumbers([])).toEqual([]);
  });

  it('should handle negative numbers', () => {
    expect(squareNumbers([-1, -2, -3])).toEqual([1, 4, 9]);
  });

  it('should handle zero', () => {
    expect(squareNumbers([0, 4])).toEqual([0, 16]);
  });
});
