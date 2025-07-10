import { describe, it, expect } from 'vitest';
import { multiplyByTwo } from '../../tasks/1.basics/10.multiply-by-two.js';

describe('multiplyByTwo', () => {
  it('should map numbers to double their value', () => {
    expect(multiplyByTwo([1, 2, 3])).toEqual([2, 4, 6]);
  });
});