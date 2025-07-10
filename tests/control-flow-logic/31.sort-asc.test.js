import { describe, it, expect } from 'vitest';
import { sortAsc } from '../../tasks/2.control-flow-logic/31.sort-asc.js';

describe('sortAsc', () => {
  it('should sort array ascending', () => {
    expect(sortAsc([3, 1, 2])).toEqual([1, 2, 3]);
  });

  it('should handle an already sorted array', () => {
    expect(sortAsc([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should sort negative numbers', () => {
    expect(sortAsc([-1, -5, 0, 5, 2])).toEqual([-5, -1, 0, 2, 5]);
  });

  it('should handle an empty array', () => {
    expect(sortAsc([])).toEqual([]);
  });
});
