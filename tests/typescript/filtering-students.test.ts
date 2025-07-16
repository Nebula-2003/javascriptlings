import { describe, test, expect } from 'vitest';
import { filterStudents } from '../../tasks/7.typescript/filter-students.ts';

describe('filterStudents', () => {
  const sampleList = [
    { name: 'sagar', std: 12 },
    { name: 'dhaval', std: 10 },
    { name: 'ronak', std: 10 },
    { name: 'ketan', std: 11 }
  ];

  test('should filter by names only', () => {
    const filterArray = ["dhaval", "ronak", "jay"];
    const expected = [
      { name: 'sagar', std: 12 },
      { name: 'ketan', std: 11 }
    ];
    
    expect(filterStudents(sampleList, filterArray)).toEqual(expected);
  });

  test('should filter by names and standards', () => {
    const filterArray = ["dhaval", "ronak", "jay", 12];
    const expected = [{ name: 'ketan', std: 11 }];
    
    expect(filterStudents(sampleList, filterArray)).toEqual(expected);
  });

  test('should return all items when filter array is empty', () => {
    const filterArray: (string | number)[] = [];
    
    expect(filterStudents(sampleList, filterArray)).toEqual(sampleList);
  });

  test('should return empty array when all items are filtered', () => {
    const filterArray = ["sagar", "dhaval", "ronak", "ketan"];
    
    expect(filterStudents(sampleList, filterArray)).toEqual([]);
  });

  test('should handle empty input array', () => {
    const filterArray = ["dhaval", "ronak"];
    
    expect(filterStudents([], filterArray)).toEqual([]);
  });

  test('should filter by standards only', () => {
    const filterArray = [10, 12];
    const expected = [{ name: 'ketan', std: 11 }];
    
    expect(filterStudents(sampleList, filterArray)).toEqual(expected);
  });

  test('should handle non-existent filter values', () => {
    const filterArray = ["nonexistent", 99];
    
    expect(filterStudents(sampleList, filterArray)).toEqual(sampleList);
  });
});