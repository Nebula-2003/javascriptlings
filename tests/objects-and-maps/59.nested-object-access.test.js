import { describe, it, expect } from 'vitest';
import { nestedObjectAccess } from '../../tasks/3.objects-and-maps/59.nested-object-access.js';

describe('nestedObjectAccess', () => {
  const obj = {a: {b: {c: 1, d: [2, 3]}}};

  it('should access deep nested keys safely', () => {
    expect(nestedObjectAccess(obj, 'a.b.c')).toEqual(1);
  });

  it('should return undefined for a non-existent path', () => {
    expect(nestedObjectAccess(obj, 'a.b.e')).toBeUndefined();
    expect(nestedObjectAccess(obj, 'x.y.z')).toBeUndefined();
  });

  it('should access array elements', () => {
    expect(nestedObjectAccess(obj, 'a.b.d[0]')).toEqual(2);
  });

  it('should handle an empty path', () => {
    expect(nestedObjectAccess(obj, '')).toBeUndefined();
  });
});
