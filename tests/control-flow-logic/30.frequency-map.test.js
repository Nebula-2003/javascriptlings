import { describe, it, expect } from 'vitest';
import { frequencyMap } from '../../tasks/2.control-flow-logic/30.frequency-map.js';

describe('frequencyMap', () => {
  it('should return object of frequency count', () => {
    expect(frequencyMap([1, 2, 2, 3])).toEqual({1: 1, 2: 2, 3: 1});
  });

  it('should handle an empty array', () => {
    expect(frequencyMap([])).toEqual({});
  });

  it('should work with strings', () => {
    expect(frequencyMap(['a', 'b', 'a', 'c', 'b', 'a'])).toEqual({ a: 3, b: 2, c: 1 });
  });

  it('should handle an array with no duplicates', () => {
    expect(frequencyMap([1, 2, 3])).toEqual({ 1: 1, 2: 1, 3: 1 });
  });
});
