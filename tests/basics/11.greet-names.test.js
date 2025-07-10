import { describe, it, expect } from 'vitest';
import { greetNames } from '../../tasks/1.basics/11.greet-names.js';

describe('greetNames', () => {
  it('should map names to greeting strings', () => {
    expect(greetNames(['Alice', 'Bob'])).toEqual(['Hello Alice', 'Hello Bob']);
  });

  it('should return an empty array for an empty input array', () => {
    expect(greetNames([])).toEqual([]);
  });

  it('should work with a single name', () => {
    expect(greetNames(['Charlie'])).toEqual(['Hello Charlie']);
  });
});
