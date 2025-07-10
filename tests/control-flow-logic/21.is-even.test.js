import { describe, it, expect } from 'vitest';
import { isEven } from '../../tasks/2.control-flow-logic/21.is-even.js';

describe('isEven', () => {
  it('should check if number is even', () => {
    expect(isEven(2)).toEqual(true);
  });

  it('should return false for an odd number', () => {
    expect(isEven(3)).toEqual(false);
  });

  it('should return true for zero', () => {
    expect(isEven(0)).toEqual(true);
  });

  it('should work with negative even numbers', () => {
    expect(isEven(-4)).toEqual(true);
  });
});
