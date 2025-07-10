import { describe, it, expect } from 'vitest';
import { filterNegatives } from '../../tasks/1.basics/9.filter-negatives.js';

describe('filterNegatives', () => {
  it('should keep only negative numbers', () => {
    expect(filterNegatives([-1, 0, 1, 2])).toEqual([-1]);
  });

  it('should return an empty array if no negative numbers are found', () => {
    expect(filterNegatives([0, 1, 2, 3])).toEqual([]);
  });

  it('should return the same array if all numbers are negative', () => {
    expect(filterNegatives([-1, -2, -3])).toEqual([-1, -2, -3]);
  });

  it('should handle an empty array', () => {
    expect(filterNegatives([])).toEqual([]);
  });
});
