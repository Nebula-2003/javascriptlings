import { describe, it, expect } from 'vitest';
import { isPrime } from '../../tasks/2.control-flow-logic/24.is-prime.js';

describe('isPrime', () => {
  it('should check if number is prime', () => {
    expect(isPrime(7)).toEqual(true);
  });

  it('should return false for a non-prime number', () => {
    expect(isPrime(4)).toEqual(false);
  });

  it('should return true for 2', () => {
    expect(isPrime(2)).toEqual(true);
  });

  it('should return false for 1', () => {
    expect(isPrime(1)).toEqual(false);
  });

  it('should return false for 0', () => {
    expect(isPrime(0)).toEqual(false);
  });
});
