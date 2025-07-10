import { describe, it, expect } from 'vitest';
import { capitalizeWords } from '../../tasks/2.control-flow-logic/36.capitalize-words.js';

describe('capitalizeWords', () => {
  it('should capitalize each word in string', () => {
    expect(capitalizeWords('hello world')).toEqual('Hello World');
  });
});