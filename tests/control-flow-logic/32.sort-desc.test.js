import { describe, it, expect } from 'vitest';
import { sortDesc } from '../../tasks/2.control-flow-logic/32.sort-desc.js';

describe('sortDesc', () => {
  it('should sort array descending', () => {
    expect(sortDesc([3, 1, 2])).toEqual([3, 2, 1]);
  });
});