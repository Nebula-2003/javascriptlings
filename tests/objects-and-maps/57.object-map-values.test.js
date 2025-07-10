import { describe, it, expect } from 'vitest';
import { objectMapValues } from '../../tasks/3.objects-and-maps/57.object-map-values.js';

describe('objectMapValues', () => {
  it('should map over object values', () => {
    expect(objectMapValues({a: 1, b: 2}, (val) => val * 2)).toEqual({a: 2, b: 4});
  });

  it('should handle an empty object', () => {
    expect(objectMapValues({}, (val) => val * 2)).toEqual({});
  });

  it('should work with different value types', () => {
    const obj = {a: 'x', b: 'y'};
    expect(objectMapValues(obj, (val) => val.toUpperCase())).toEqual({a: 'X', b: 'Y'});
  });
});
