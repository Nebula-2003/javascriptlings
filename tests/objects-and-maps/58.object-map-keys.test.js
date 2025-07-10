import { describe, it, expect } from 'vitest';
import { objectMapKeys } from '../../tasks/3.objects-and-maps/58.object-map-keys.js';

describe('objectMapKeys', () => {
  it('should map over object keys', () => {
    expect(objectMapKeys({a: 1, b: 2}, (key) => key + key)).toEqual({aa: 1, bb: 2});
  });

  it('should handle an empty object', () => {
    expect(objectMapKeys({}, (key) => key + key)).toEqual({});
  });

  it('should handle a more complex key mapping', () => {
    const obj = {name: 'John', age: 30};
    expect(objectMapKeys(obj, (key) => `user_${key}`)).toEqual({user_name: 'John', user_age: 30});
  });
});
