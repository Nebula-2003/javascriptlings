import { describe, it, expect } from 'vitest';
import { firstLast } from '../../tasks/1.basics/15.first-last.js';

describe('firstLast', () => {
  it('should return first and last element as array', () => {
    expect(firstLast([1, 2, 3, 4])).toEqual([1, 4]);
  });

  it('should return the same element twice for a single-element array', () => {
    expect(firstLast([1])).toEqual([1, 1]);
  });

  it('should work with an array of two elements', () => {
    expect(firstLast([5, 10])).toEqual([5, 10]);
  });
});
