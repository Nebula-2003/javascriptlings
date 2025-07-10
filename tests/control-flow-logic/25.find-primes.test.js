import { describe, it, expect } from 'vitest';
import { findPrimes } from '../../tasks/2.control-flow-logic/25.find-primes.js';

describe('findPrimes', () => {
  it('should return all primes up to n', () => {
    expect(findPrimes(10)).toEqual([2, 3, 5, 7]);
  });

  it('should return primes up to 20', () => {
    expect(findPrimes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  });

  it('should return an empty array for n < 2', () => {
    expect(findPrimes(1)).toEqual([]);
  });

  it('should handle the case of n = 2', () => {
    expect(findPrimes(2)).toEqual([2]);
  });
});
