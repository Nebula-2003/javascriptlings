import { describe, it, expect } from 'vitest';
import { isEven } from '../../tasks/2.control-flow-logic/21.is-even.js';

describe('isEven', () => {
  it('should check if number is even', () => {
    expect(isEven(2)).toEqual(true);
  });
});