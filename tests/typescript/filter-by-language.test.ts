import { describe, test, expect } from 'vitest';
import { filterByLanguage } from '../../tasks/7.typescript/filter-by-language';

describe('filterByLanguage', () => {
  const sampleArray = [
    {
      name_en: 'Test1 English name',
      name_hi: 'Test1 Hindi name',
      title_en: 'Test1 English title',
      title_hi: 'Test1 Hindi title'
    },
    {
      name_en: 'Test2 English name',
      name_hi: 'Test2 Hindi name',
      title_en: 'Test2 English title',
      title_hi: 'Test2 Hindi title'
    },
    {
      name_en: 'Test3 English name',
      title_en: 'Test3 English title',
      title_hi: 'Test3 Hindi title'
    },
    {
      name_en: 'Test4 English name',
      title_hi: 'Test4 Hindi title'
    },
    {
      name_hi: 'Test5 Hindi name',
      title_en: 'Test5 English title',
      title_hi: 'Test5 Hindi title'
    }
  ];

  test('should filter for Hindi language', () => {
    const expected = [
      {
        name_hi: 'Test1 Hindi name',
        title_hi: 'Test1 Hindi title'
      },
      {
        name_hi: 'Test2 Hindi name',
        title_hi: 'Test2 Hindi title'
      },
      {
        name_hi: '',
        title_hi: 'Test3 Hindi title'
      },
      {
        name_hi: '',
        title_hi: 'Test4 Hindi title'
      },
      {
        name_hi: 'Test5 Hindi name',
        title_hi: 'Test5 Hindi title'
      }
    ];
    
    expect(filterByLanguage(sampleArray, 'hi')).toEqual(expected);
  });

  test('should filter for English language', () => {
    const expected = [
      {
        name_en: 'Test1 English name',
        title_en: 'Test1 English title'
      },
      {
        name_en: 'Test2 English name',
        title_en: 'Test2 English title'
      },
      {
        name_en: 'Test3 English name',
        title_en: 'Test3 English title'
      },
      {
        name_en: 'Test4 English name',
        title_en: ''
      },
      {
        name_en: '',
        title_en: 'Test5 English title'
      }
    ];
    
    expect(filterByLanguage(sampleArray, 'en')).toEqual(expected);
  });

  test('should handle empty array', () => {
    expect(filterByLanguage([], 'en')).toEqual([]);
    expect(filterByLanguage([], 'hi')).toEqual([]);
  });

  test('should handle objects with no matching language properties', () => {
    const input = [
      { other_prop: 'value' },
      { random_field: 'data' }
    ];
    const expected = [
      { name_en: '', title_en: '' },
      { name_en: '', title_en: '' }
    ];
    
    expect(filterByLanguage(input, 'en')).toEqual(expected);
  });

  test('should handle objects with only name properties', () => {
    const input = [
      { name_en: 'English name only' },
      { name_hi: 'Hindi name only' }
    ];
    const expectedEn = [
      { name_en: 'English name only', title_en: '' },
      { name_en: '', title_en: '' }
    ];
    const expectedHi = [
      { name_hi: '', title_hi: '' },
      { name_hi: 'Hindi name only', title_hi: '' }
    ];
    
    expect(filterByLanguage(input, 'en')).toEqual(expectedEn);
    expect(filterByLanguage(input, 'hi')).toEqual(expectedHi);
  });

  test('should handle objects with only title properties', () => {
    const input = [
      { title_en: 'English title only' },
      { title_hi: 'Hindi title only' }
    ];
    const expectedEn = [
      { name_en: '', title_en: 'English title only' },
      { name_en: '', title_en: '' }
    ];
    const expectedHi = [
      { name_hi: '', title_hi: '' },
      { name_hi: '', title_hi: 'Hindi title only' }
    ];
    
    expect(filterByLanguage(input, 'en')).toEqual(expectedEn);
    expect(filterByLanguage(input, 'hi')).toEqual(expectedHi);
  });
});