import { describe, it, expect } from 'vitest';
import { objectToQueryString } from '../../tasks/3.objects-and-maps/55.object-to-query-string.js';

describe('objectToQueryString', () => {
  it('should convert object to URL query string', () => {
    expect(objectToQueryString({a: 1, b: 2})).toEqual('a=1&b=2');
  });

  it('should handle an empty object', () => {
    expect(objectToQueryString({})).toEqual('');
  });

  it('should handle various data types', () => {
    const obj = {name: 'John Doe', age: 30, subscribed: true};
    expect(objectToQueryString(obj)).toEqual('name=John%20Doe&age=30&subscribed=true');
  });
});
