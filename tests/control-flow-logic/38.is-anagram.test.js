import { describe, it, expect } from 'vitest';
import { isAnagram } from '../../tasks/2.control-flow-logic/38.is-anagram.js';

describe('isAnagram', () => {
  it('should check if two strings are anagrams', () => {
    expect(isAnagram('listen', 'silent')).toEqual(true);
  });

  it('should return false for non-anagrams', () => {
    expect(isAnagram('hello', 'world')).toEqual(false);
  });

  it('should be case-insensitive', () => {
    expect(isAnagram('Listen', 'Silent')).toEqual(true);
  });

  it('should return true for two empty strings', () => {
    expect(isAnagram('', '')).toEqual(true);
  });

  it('should handle anagrams with different spacing', () => {
    expect(isAnagram('funeral', 'real fun')).toEqual(true);
  });
});
