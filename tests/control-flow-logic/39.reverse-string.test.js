import { describe, it, expect } from 'vitest';
import { reverseString } from '../../tasks/2.control-flow-logic/39.reverse-string.js';

describe('reverseString', () => {
  it('should reverse a given string', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });

  it('should handle an empty string', () => {
    expect(reverseString('')).toEqual('');
  });

  it('should handle a single character string', () => {
    expect(reverseString('a')).toEqual('a');
  });

  it('should handle a palindromic string', () => {
    expect(reverseString('madam')).toEqual('madam');
  });
});
