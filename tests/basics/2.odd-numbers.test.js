import { describe, it, expect } from 'vitest';
import { oddNumbers } from '../../tasks/1.basics/2.odd-numbers.js';

describe('oddNumbers', () => {
  it('should return only odd numbers', () => {
    expect(oddNumbers([1, 2, 3, 4, 5, 6])).toEqual([1, 3, 5]);
  });

  it('should return an empty array if no odd numbers are found', () => {
    expect(oddNumbers([2, 4, 6, 8])).toEqual([]);
  });

  it('should return all numbers if all are odd', () => {
    expect(oddNumbers([1, 3, 5, 7])).toEqual([1, 3, 5, 7]);
  });

  it('should work with negative odd numbers', () => {
    expect(oddNumbers([-1, -2, -3, -4, 5, 6])).toEqual([-1, -3, 5]);
  });
});
