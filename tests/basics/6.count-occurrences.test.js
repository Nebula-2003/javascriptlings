import { describe, it, expect } from 'vitest';
import { countOccurrences } from '../../tasks/1.basics/6.count-occurrences.js';

describe('countOccurrences', () => {
  it('should count how many times a value occurs', () => {
    expect(countOccurrences([1, 2, 2, 3], 2)).toEqual(2);
  });

  it('should return 0 if the value does not occur', () => {
    expect(countOccurrences([1, 2, 3, 4], 5)).toEqual(0);
  });

  it('should count multiple occurrences correctly', () => {
    expect(countOccurrences([1, 1, 1, 2, 1], 1)).toEqual(4);
  });

  it('should work with an empty array', () => {
    expect(countOccurrences([], 1)).toEqual(0);
  });
});
