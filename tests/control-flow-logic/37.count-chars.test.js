import { describe, it, expect } from 'vitest';
import { countChars } from '../../tasks/2.control-flow-logic/37.count-chars.js';

describe('countChars', () => {
  it('should count frequency of each character', () => {
    expect(countChars('hello')).toEqual({h: 1, e: 1, l: 2, o: 1});
  });

  it('should handle an empty string', () => {
    expect(countChars('')).toEqual({});
  });

  it('should handle a string with all same characters', () => {
    expect(countChars('aaaaa')).toEqual({ a: 5 });
  });

  it('should be case sensitive', () => {
    expect(countChars('Hello')).toEqual({ H: 1, e: 1, l: 2, o: 1 });
  });
});
