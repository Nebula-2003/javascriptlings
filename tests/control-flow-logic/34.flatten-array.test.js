import { describe, it, expect } from 'vitest';
import { flattenArray } from '../../tasks/2.control-flow-logic/34.flatten-array.js';

describe('flattenArray', () => {
  it('should flatten a nested array one level', () => {
    expect(flattenArray([1, [2, 3]])).toEqual([1, 2, 3]);
  });
});