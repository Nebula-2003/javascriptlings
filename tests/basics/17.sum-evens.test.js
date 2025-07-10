import { describe, it, expect } from 'vitest';
import { sumEvens } from '../../tasks/1.basics/17.sum-evens.js';

describe('sumEvens', () => {
  it('should return sum of even numbers only', () => {
    expect(sumEvens([1, 2, 3, 4])).toEqual(6);
  });
});