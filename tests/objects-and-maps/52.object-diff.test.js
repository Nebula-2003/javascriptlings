import { describe, it, expect } from 'vitest';
import { objectDiff } from '../../tasks/3.objects-and-maps/52.object-diff.js';

describe('objectDiff', () => {
  it('should return keys that differ between two objects', () => {
    expect(objectDiff({a: 1, b: 2}, {a: 1, b: 3})).toEqual(['b']);
  });

  it('should return an empty array if objects are the same', () => {
    expect(objectDiff({a: 1, b: 2}, {a: 1, b: 2})).toEqual([]);
  });

  it('should return keys that exist in one object but not the other', () => {
    expect(objectDiff({a: 1, b: 2}, {a: 1, c: 2})).toEqual(['b', 'c']);
  });

  it('should handle empty objects', () => {
    expect(objectDiff({}, {})).toEqual([]);
    expect(objectDiff({a: 1}, {})).toEqual(['a']);
    expect(objectDiff({}, {b: 2})).toEqual(['b']);
  });
});
