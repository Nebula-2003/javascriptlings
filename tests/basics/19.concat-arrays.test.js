import { describe, it, expect } from 'vitest';
import { concatArrays } from '../../tasks/1.basics/19.concat-arrays.js';

describe('concatArrays', () => {
  it('should join two arrays into one', () => {
    expect(concatArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('should handle an empty first array', () => {
    expect(concatArrays([], [1, 2])).toEqual([1, 2]);
  });

  it('should handle an empty second array', () => {
    expect(concatArrays([1, 2], [])).toEqual([1, 2]);
  });

  it('should handle two empty arrays', () => {
    expect(concatArrays([], [])).toEqual([]);
  });
});
