import { describe, it, expect } from 'vitest';
import { greetNames } from '../../tasks/1.basics/11.greet-names.js';

describe('greetNames', () => {
  it('should map names to greeting strings', () => {
    expect(greetNames(['Alice', 'Bob'])).toEqual(['Hello Alice', 'Hello Bob']);
  });
});