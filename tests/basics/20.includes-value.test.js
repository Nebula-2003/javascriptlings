import { describe, it, expect } from 'vitest';
import { includesValue } from '../../tasks/1.basics/20.includes-value.js';

describe('includesValue', () => {
  it('should check if value exists in array', () => {
    expect(includesValue([1, 2, 3], 2)).toEqual(true);
  });

  it('should return false if the value does not exist', () => {
    expect(includesValue([1, 2, 3], 4)).toEqual(false);
  });

  it('should return false for an empty array', () => {
    expect(includesValue([], 1)).toEqual(false);
  });

  it('should find a negative number', () => {
    expect(includesValue([-1, -2, 3], -1)).toEqual(true);
  });
});
