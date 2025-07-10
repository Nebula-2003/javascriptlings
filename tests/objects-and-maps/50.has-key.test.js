import { describe, it, expect } from 'vitest';
import { hasKey } from '../../tasks/3.objects-and-maps/50.has-key.js';

describe('hasKey', () => {
  it('should check if object has a key', () => {
    expect(hasKey({a: 1}, 'a')).toEqual(true);
  });

  it('should return false if the key does not exist', () => {
    expect(hasKey({a: 1}, 'b')).toEqual(false);
  });

  it('should return false for an empty object', () => {
    expect(hasKey({}, 'a')).toEqual(false);
  });

  it('should handle keys that exist but have undefined values', () => {
    expect(hasKey({a: undefined}, 'a')).toEqual(true);
  });
});
