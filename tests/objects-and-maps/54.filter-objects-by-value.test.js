import { describe, it, expect } from 'vitest';
import { filterObjectsByValue } from '../../tasks/3.objects-and-maps/54.filter-objects-by-value.js';

describe('filterObjectsByValue', () => {
  it('should filter object array based on value', () => {
    const data = [{a: 1, b: 5}, {a: 2, b: 6}, {a: 1, c: 7}];
    expect(filterObjectsByValue(data, 'a', 1)).toEqual([{a: 1, b: 5}, {a: 1, c: 7}]);
  });

  it('should return an empty array if no objects match', () => {
    const data = [{a: 1}, {a: 2}];
    expect(filterObjectsByValue(data, 'a', 3)).toEqual([]);
  });

  it('should handle an empty array', () => {
    expect(filterObjectsByValue([], 'a', 1)).toEqual([]);
  });
});
