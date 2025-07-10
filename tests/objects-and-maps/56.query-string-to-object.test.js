import { describe, it, expect } from 'vitest';
import { queryStringToObject } from '../../tasks/3.objects-and-maps/56.query-string-to-object.js';

describe('queryStringToObject', () => {
  it('should convert query string to object', () => {
    expect(queryStringToObject('a=1&b=2')).toEqual({a: '1', b: '2'});
  });

  it('should handle an empty string', () => {
    expect(queryStringToObject('')).toEqual({});
  });

  it('should handle URI encoded characters', () => {
    const str = 'name=John%20Doe&age=30';
    expect(queryStringToObject(str)).toEqual({name: 'John Doe', age: '30'});
  });
});
