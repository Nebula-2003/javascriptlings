import { describe, it, expect } from 'vitest';
import { objectDeepEqual } from '../../tasks/3.objects-and-maps/53.object-deep-equal.js';

describe('objectDeepEqual', () => {
  it('should check deep equality of two objects', () => {
    expect(objectDeepEqual({a: 1, b: {c: 2}}, {a: 1, b: {c: 2}})).toEqual(true);
  });

  it('should return false for objects with different values', () => {
    expect(objectDeepEqual({a: 1, b: {c: 3}}, {a: 1, b: {c: 2}})).toEqual(false);
  });

  it('should return false for objects with different keys', () => {
    expect(objectDeepEqual({a: 1, b: {c: 2}}, {a: 1, b: {d: 2}})).toEqual(false);
  });

  it('should handle arrays within objects', () => {
    const obj1 = { a: [1, 2], b: { c: 3 } };
    const obj2 = { a: [1, 2], b: { c: 3 } };
    const obj3 = { a: [1, 3], b: { c: 3 } };
    expect(objectDeepEqual(obj1, obj2)).toBe(true);
    expect(objectDeepEqual(obj1, obj3)).toBe(false);
  });
});
