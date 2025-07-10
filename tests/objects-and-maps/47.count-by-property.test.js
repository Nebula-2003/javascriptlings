import { describe, it, expect } from 'vitest';
import { countByProperty } from '../../tasks/3.objects-and-maps/47.count-by-property.js';

describe('countByProperty', () => {
  it('should count objects by key (e.g., by age)', () => {
    const people = [{age: 10}, {age: 20}, {age: 10}];
    expect(countByProperty(people, 'age')).toEqual({10: 2, 20: 1});
  });

  it('should handle an empty array', () => {
    expect(countByProperty([], 'age')).toEqual({});
  });

  it('should work with string properties', () => {
    const fruits = [{type: 'apple'}, {type: 'banana'}, {type: 'apple'}];
    expect(countByProperty(fruits, 'type')).toEqual({apple: 2, banana: 1});
  });

  it('should return an empty object if property does not exist', () => {
    const items = [{name: 'A'}, {name: 'B'}];
    expect(countByProperty(items, 'color')).toEqual({});
  });
});
