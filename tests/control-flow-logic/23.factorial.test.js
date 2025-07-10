import { describe, it, expect } from 'vitest';
import { factorial } from '../../tasks/2.control-flow-logic/23.factorial.js';

describe('factorial', () => {
  it('should return factorial of a number', () => {
    expect(factorial(5)).toEqual(120);
  });

  it('should return 1 for factorial of 0', () => {
    expect(factorial(0)).toEqual(1);
  });

  it('should return 1 for factorial of 1', () => {
    expect(factorial(1)).toEqual(1);
  });

  it('should calculate factorial for a different number', () => {
    expect(factorial(3)).toEqual(6);
  });
});
