import { describe, it, expect } from 'vitest';
import { chunkArray } from '../../tasks/2.control-flow-logic/35.chunk-array.js';

describe('chunkArray', () => {
  it('should split array into chunks', () => {
    expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('should handle a chunk size of 1', () => {
    expect(chunkArray([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });

  it('should handle a chunk size larger than the array length', () => {
    expect(chunkArray([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
  });

  it('should handle an empty array', () => {
    expect(chunkArray([], 2)).toEqual([]);
  });

  it('should handle an array that divides evenly', () => {
    expect(chunkArray([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });
});
