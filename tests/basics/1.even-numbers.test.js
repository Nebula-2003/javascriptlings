import { describe, it, expect } from 'vitest';
import { evenNumbers } from '../../tasks/1.basics/1.even-numbers.js';

describe('evenNumbers', () => {
  it('should return only even numbers', () => {
    expect(evenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });

  it('should return an empty array if no even numbers are found', () => {
    expect(evenNumbers([1, 3, 5, 7])).toEqual([]);
  });

  it('should return all numbers if all are even', () => {
    expect(evenNumbers([2, 4, 6, 8])).toEqual([2, 4, 6, 8]);
  });

  it('should work with negative even numbers', () => {
    expect(evenNumbers([-1, -2, -3, -4, 5, 6])).toEqual([-2, -4, 6]);
  });
});
