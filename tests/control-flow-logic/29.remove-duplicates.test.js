import { describe, it, expect } from 'vitest';
import { removeDuplicates } from '../../tasks/2.control-flow-logic/29.remove-duplicates.js';

describe('removeDuplicates', () => {
  it('should remove duplicate entries from array', () => {
    expect(removeDuplicates([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should return the same array if there are no duplicates', () => {
    expect(removeDuplicates([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('should handle an empty array', () => {
    expect(removeDuplicates([])).toEqual([]);
  });

  it('should work with strings', () => {
    expect(removeDuplicates(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
  });
});
