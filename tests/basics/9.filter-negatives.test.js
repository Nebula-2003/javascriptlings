import { describe, it, expect } from 'vitest';
import { filterNegatives } from '../../tasks/1.basics/9.filter-negatives.js';

describe('filterNegatives', () => {
  it('should keep only negative numbers', () => {
    expect(filterNegatives([-1, 0, 1, 2])).toEqual([-1]);
  });
});