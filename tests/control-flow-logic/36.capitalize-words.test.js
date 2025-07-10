import { describe, it, expect } from 'vitest';
import { capitalizeWords } from '../../tasks/2.control-flow-logic/36.capitalize-words.js';

describe('capitalizeWords', () => {
  it('should capitalize each word in string', () => {
    expect(capitalizeWords('hello world')).toEqual('Hello World');
  });

  it('should handle an empty string', () => {
    expect(capitalizeWords('')).toEqual('');
  });

  it('should handle a single word', () => {
    expect(capitalizeWords('javascript')).toEqual('Javascript');
  });

  it('should not change an already capitalized string', () => {
    expect(capitalizeWords('Hello World')).toEqual('Hello World');
  });
});
