import { describe, it, expect } from 'vitest';
import { flattenArray } from '../../tasks/2.control-flow-logic/34.flatten-array.js';

describe('flattenArray', () => {
  it('should flatten a nested array one level', () => {
    expect(flattenArray([1, [2, 3]])).toEqual([1, 2, 3]);
  });

  it('should handle multiple nested arrays', () => {
    expect(flattenArray([1, [2, 3], [4, 5]])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return the same array if it is already flat', () => {
    expect(flattenArray([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should handle an empty array', () => {
    expect(flattenArray([])).toEqual([]);
  });

  it('should handle an array of empty arrays', () => {
    expect(flattenArray([[], []])).toEqual([]);
  });
});
