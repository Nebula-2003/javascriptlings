import { describe, it, expect } from 'vitest';
import { reverseArray } from '../../tasks/1.basics/7.reverse-array.js';

describe('reverseArray', () => {
  it('should return a reversed array', () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  it('should return an empty array if the input is an empty array', () => {
    expect(reverseArray([])).toEqual([]);
  });

  it('should return the same array if it has only one element', () => {
    expect(reverseArray([42])).toEqual([42]);
  });

  it('should reverse an array with an even number of elements', () => {
    expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
  });
});
