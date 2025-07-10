import { describe, it, expect } from 'vitest';
import { includesValue } from '../../tasks/1.basics/20.includes-value.js';

describe('includesValue', () => {
  it('should check if value exists in array', () => {
    expect(includesValue([1, 2, 3], 2)).toEqual(true);
  });
});