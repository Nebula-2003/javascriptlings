import { describe, it, expect } from 'vitest';
import { objectMerge } from '../../tasks/3.objects-and-maps/43.object-merge.js';

describe('objectMerge', () => {
  it('should merge two objects', () => {
    expect(objectMerge({a: 1}, {b: 2})).toEqual({a: 1, b: 2});
  });

  it('should overwrite properties from the first object', () => {
    expect(objectMerge({a: 1, b: 2}, {b: 3, c: 4})).toEqual({a: 1, b: 3, c: 4});
  });

  it('should handle an empty object', () => {
    expect(objectMerge({a: 1}, {})).toEqual({a: 1});
    expect(objectMerge({}, {b: 2})).toEqual({b: 2});
  });

  it('should handle two empty objects', () => {
    expect(objectMerge({}, {})).toEqual({});
  });
});
