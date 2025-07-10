import { describe, it, expect } from 'vitest';
import { oddNumbers } from '../../tasks/1.basics/2.odd-numbers.js';

describe('oddNumbers', () => {
  it('should return only odd numbers', () => {
    expect(oddNumbers([1, 2, 3, 4, 5, 6])).toEqual([1, 3, 5]);
  });
});