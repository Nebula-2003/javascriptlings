import { describe, it, expect } from 'vitest';
import { invertObject } from '../../tasks/3.objects-and-maps/45.invert-object.js';

describe('invertObject', () => {
  it('should flip key/values in object', () => {
    expect(invertObject({a: 1, b: 2})).toEqual({1: 'a', 2: 'b'});
  });

  it('should handle an empty object', () => {
    expect(invertObject({})).toEqual({});
  });

  it('should handle a larger object', () => {
    const obj = { name: 'John', role: 'admin' };
    expect(invertObject(obj)).toEqual({ John: 'name', admin: 'role' });
  });

  it('should handle values that are not unique, last one wins', () => {
    const obj = { a: 'x', b: 'y', c: 'x' };
    expect(invertObject(obj)).toEqual({ x: 'c', y: 'b' });
  });
});
