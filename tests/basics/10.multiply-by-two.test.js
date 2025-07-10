import { describe, it, expect } from 'vitest';
import { multiplyByTwo } from '../../tasks/1.basics/10.multiply-by-two.js';

describe('multiplyByTwo', () => {
  it('should map numbers to double their value', () => {
    expect(multiplyByTwo([1, 2, 3])).toEqual([2, 4, 6]);
  });

  it('should return an empty array for an empty input array', () => {
    expect(multiplyByTwo([])).toEqual([]);
  });

  it('should work with negative numbers', () => {
    expect(multiplyByTwo([-1, -2, -3])).toEqual([-2, -4, -6]);
  });

  it('should work with zero', () => {
    expect(multiplyByTwo([0, 5, -5])).toEqual([0, 10, -10]);
  });
});
