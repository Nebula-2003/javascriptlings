import { describe, it, expect } from 'vitest';
import { removeKey } from '../../tasks/3.objects-and-maps/51.remove-key.js';

describe('removeKey', () => {
  it('should remove a key from an object', () => {
    expect(removeKey({a: 1, b: 2}, 'a')).toEqual({b: 2});
  });

  it('should not change the object if key does not exist', () => {
    const obj = {a: 1, b: 2};
    expect(removeKey(obj, 'c')).toEqual({a: 1, b: 2});
  });

  it('should handle an empty object', () => {
    expect(removeKey({}, 'a')).toEqual({});
  });
});
