import { describe, it, expect } from 'vitest';
import { filterPositives } from '../../tasks/1.basics/8.filter-positives.js';

describe('filterPositives', () => {
  it('should keep only positive numbers', () => {
    expect(filterPositives([-1, 0, 1, 2])).toEqual([1, 2]);
  });

  it('should return an empty array if no positive numbers are found', () => {
    expect(filterPositives([-1, -2, -3])).toEqual([]);
  });

  it('should return the same array if all numbers are positive', () => {
    expect(filterPositives([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should handle an empty array', () => {
    expect(filterPositives([])).toEqual([]);
  });
});
