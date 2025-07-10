import { describe, it, expect } from 'vitest';
import { evenNumbers } from '../../tasks/1.basics/1.even-numbers.js';

describe('evenNumbers', () => {
  it('should return only even numbers', () => {
    expect(evenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });
});