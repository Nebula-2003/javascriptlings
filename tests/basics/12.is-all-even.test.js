import { describe, it, expect } from 'vitest';
import { isAllEven } from '../../tasks/1.basics/12.is-all-even.js';

describe('isAllEven', () => {
  it('should return true if all numbers are even', () => {
    expect(isAllEven([2, 4, 6])).toEqual(true);
  });
});