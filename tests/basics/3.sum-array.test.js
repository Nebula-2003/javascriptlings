import { describe, it, expect } from 'vitest';
import { sumArray } from '../../tasks/1.basics/3.sum-array.js';

describe('sumArray', () => {
  it('should return the sum of all numbers', () => {
    expect(sumArray([1, 2, 3])).toEqual(6);
  });
});