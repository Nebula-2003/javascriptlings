import { describe, it, expect } from 'vitest';
import { longestWord } from '../../tasks/2.control-flow-logic/28.longest-word.js';

describe('longestWord', () => {
  it('should find longest word in a sentence', () => {
    expect(longestWord('hello world')).toEqual('world');
  });

  it('should return the first longest word if there are ties', () => {
    expect(longestWord('find the longest word here')).toEqual('longest');
  });

  it('should handle sentences with punctuation', () => {
    expect(longestWord('what, is the longest-word?')).toEqual('longest-word');
  });

  it('should return an empty string if the input is empty', () => {
    expect(longestWord('')).toEqual('');
  });
});
