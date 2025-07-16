import { describe, test, expect } from 'vitest';
import { generateTimeSlots } from '../../tasks/7.typescript/generate-time-slots';

describe('generateTimeSlots', () => {
  test('should generate 30-minute intervals', () => {
    const expected = [
      '09:00-09:30',
      '09:30-10:00',
      '10:00-10:30',
      '10:30-11:00',
      '11:00-11:30',
      '11:30-12:00'
    ];
    
    expect(generateTimeSlots('09:00', '12:00', 30)).toEqual(expected);
  });

  test('should generate 60-minute intervals', () => {
    const expected = [
      '09:00-10:00',
      '10:00-11:00',
      '11:00-12:00'
    ];
    
    expect(generateTimeSlots('09:00', '12:00', 60)).toEqual(expected);
  });

  test('should generate 15-minute intervals', () => {
    const expected = [
      '14:00-14:15',
      '14:15-14:30',
      '14:30-14:45',
      '14:45-15:00'
    ];
    
    expect(generateTimeSlots('14:00', '15:00', 15)).toEqual(expected);
  });

  test('should handle single hour with 120-minute interval', () => {
    const expected = ['10:00-12:00'];
    
    expect(generateTimeSlots('10:00', '12:00', 120)).toEqual(expected);
  });

  test('should handle cross-midnight times', () => {
    const expected = [
      '23:00-23:30',
      '23:30-00:00'
    ];
    
    expect(generateTimeSlots('23:00', '00:00', 30)).toEqual(expected);
  });

  test('should return empty array when start time equals end time', () => {
    expect(generateTimeSlots('10:00', '10:00', 30)).toEqual([]);
  });

  test('should handle single 10-minute interval', () => {
    const expected = ['09:00-09:10'];
    
    expect(generateTimeSlots('09:00', '09:10', 10)).toEqual(expected);
  });

  test('should handle intervals that don\'t divide evenly', () => {
    const expected = [
      '09:00-09:45',
      '09:45-10:30'
    ];
    
    expect(generateTimeSlots('09:00', '10:30', 45)).toEqual(expected);
  });
});