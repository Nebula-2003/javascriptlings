import { describe, it, expect } from 'vitest';
import { binarySearch } from '../../tasks/2.control-flow-logic/40.binary-search.js';

describe('binarySearch', () => {
  it('should perform binary search on sorted array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toEqual(2);
  });

  it('should return -1 if the element is not found', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toEqual(-1);
  });

  it('should find an element at the beginning of the array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toEqual(0);
  });

  it('should find an element at the end of the array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toEqual(4);
  });

  it('should handle an empty array', () => {
    expect(binarySearch([], 5)).toEqual(-1);
  });
});
