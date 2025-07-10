import { describe, it, expect } from 'vitest';
import { countVowels } from '../../tasks/2.control-flow-logic/27.count-vowels.js';

describe('countVowels', () => {
  it('should count vowels in a string', () => {
    expect(countVowels('hello')).toEqual(2);
  });

  it('should return 0 for a string with no vowels', () => {
    expect(countVowels('rhythm')).toEqual(0);
  });

  it('should handle mixed case vowels', () => {
    expect(countVowels('JavaScript')).toEqual(3);
  });

  it('should return 0 for an empty string', () => {
    expect(countVowels('')).toEqual(0);
  });
});
