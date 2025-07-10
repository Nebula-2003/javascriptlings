import { describe, it, expect } from 'vitest';
import { sortDesc } from '../../tasks/2.control-flow-logic/32.sort-desc.js';

describe('sortDesc', () => {
  it('should sort array descending', () => {
    expect(sortDesc([3, 1, 2])).toEqual([3, 2, 1]);
  });

  it('should handle an already sorted array', () => {
    expect(sortDesc([5, 4, 3, 2, 1])).toEqual([5, 4, 3, 2, 1]);
  });

  it('should sort negative numbers', () => {
    expect(sortDesc([-1, -5, 0, 5, 2])).toEqual([5, 2, 0, -1, -5]);
  });

  it('should handle an empty array', () => {
    expect(sortDesc([])).toEqual([]);
  });
});
