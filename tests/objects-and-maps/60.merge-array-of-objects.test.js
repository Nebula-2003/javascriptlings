import { describe, it, expect } from 'vitest';
import { mergeArrayOfObjects } from '../../tasks/3.objects-and-maps/60.merge-array-of-objects.js';

describe('mergeArrayOfObjects', () => {
  it('should merge multiple objects into one', () => {
    expect(mergeArrayOfObjects([{a: 1}, {b: 2}])).toEqual({a: 1, b: 2});
  });

  it('should handle an empty array', () => {
    expect(mergeArrayOfObjects([])).toEqual({});
  });

  it('should overwrite properties from earlier objects', () => {
    const arr = [{a: 1, b: 2}, {b: 3, c: 4}];
    expect(mergeArrayOfObjects(arr)).toEqual({a: 1, b: 3, c: 4});
  });

  it('should handle an array with a single object', () => {
    expect(mergeArrayOfObjects([{a: 1, b: 2}])).toEqual({a: 1, b: 2});
  });
});
