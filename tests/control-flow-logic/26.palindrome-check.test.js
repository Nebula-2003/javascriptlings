import { describe, it, expect } from 'vitest';
import { palindromeCheck } from '../../tasks/2.control-flow-logic/26.palindrome-check.js';

describe('palindromeCheck', () => {
  it('should return true if string is a palindrome', () => {
    expect(palindromeCheck('madam')).toEqual(true);
  });

  it('should return false for a non-palindrome', () => {
    expect(palindromeCheck('hello')).toEqual(false);
  });

  it('should be case-insensitive', () => {
    expect(palindromeCheck('Racecar')).toEqual(true);
  });

  it('should return true for an empty string', () => {
    expect(palindromeCheck('')).toEqual(true);
  });

  it('should handle palindromic sentences', () => {
    expect(palindromeCheck('A man a plan a canal Panama')).toEqual(true);
  });
});
