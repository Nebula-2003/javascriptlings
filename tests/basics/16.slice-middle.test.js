import { describe, it, expect } from 'vitest';
import { sliceMiddle } from '../../tasks/1.basics/16.slice-middle.js';

describe('sliceMiddle', () => {
  it('should return the middle portion of an array', () => {
    expect(sliceMiddle([1, 2, 3, 4, 5])).toEqual([2, 3, 4]);
  });

  it('should handle an even number of elements', () => {
    expect(sliceMiddle([1, 2, 3, 4, 5, 6])).toEqual([2, 3, 4, 5]);
  });

  it('should return a single element for an array of length 3', () => {
    expect(sliceMiddle([1, 2, 3])).toEqual([2]);
  });

  it('should return an empty array for arrays with less than 3 elements', () => {
    expect(sliceMiddle([1, 2])).toEqual([]);
    expect(sliceMiddle([1])).toEqual([]);
    expect(sliceMiddle([])).toEqual([]);
  });
});
