import { describe, it, expect } from 'vitest';
import { reverseArray } from '../../tasks/1.basics/7.reverse-array.js';

describe('reverseArray', () => {
  it('should return a reversed array', () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
  });
});