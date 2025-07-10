import { describe, it, expect } from 'vitest';
import { isPalindromeNumber } from '../../tasks/2.control-flow-logic/33.is-palindrome-number.js';

describe('isPalindromeNumber', () => {
  it('should check if number reads same forward/back', () => {
    expect(isPalindromeNumber(121)).toEqual(true);
  });

  it('should return false for a non-palindrome number', () => {
    expect(isPalindromeNumber(123)).toEqual(false);
  });

  it('should return true for a single-digit number', () => {
    expect(isPalindromeNumber(5)).toEqual(true);
  });

  it('should handle a larger palindrome number', () => {
    expect(isPalindromeNumber(12321)).toEqual(true);
  });

  it('should return false for negative numbers', () => {
    expect(isPalindromeNumber(-121)).toEqual(false);
  });
});
