import { describe, it, expect } from 'vitest';
import { arrayLength } from '../../tasks/1.basics/14.array-length.js';

describe('arrayLength', () => {
  it('should return length of input array', () => {
    expect(arrayLength([1, 2, 3])).toEqual(3);
  });

  it('should return 0 for an empty array', () => {
    expect(arrayLength([])).toEqual(0);
  });

  it('should return 1 for an array with a single element', () => {
    expect(arrayLength(['a'])).toEqual(1);
  });
});
