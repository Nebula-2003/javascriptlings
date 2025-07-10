import { describe, it, expect } from 'vitest';
import { groupByLength } from '../../tasks/3.objects-and-maps/46.group-by-length.js';

describe('groupByLength', () => {
  it('should group array of words by length', () => {
    expect(groupByLength(['a', 'bb', 'ccc'])).toEqual({1: ['a'], 2: ['bb'], 3: ['ccc']});
  });

  it('should handle an empty array', () => {
    expect(groupByLength([])).toEqual({});
  });

  it('should group multiple words of the same length', () => {
    const words = ['one', 'two', 'three', 'four', 'five'];
    expect(groupByLength(words)).toEqual({
      3: ['one', 'two'],
      4: ['four', 'five'],
      5: ['three']
    });
  });
});
