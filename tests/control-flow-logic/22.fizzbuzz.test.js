import { describe, it, expect } from 'vitest';
import { fizzbuzz } from '../../tasks/2.control-flow-logic/22.fizzbuzz.js';

describe('fizzbuzz', () => {
  it('should return fizzbuzz for multiples of 3 and 5', () => {
    expect(fizzbuzz(15)).toEqual('FizzBuzz');
  });

  it('should return "Fizz" for multiples of 3', () => {
    expect(fizzbuzz(3)).toEqual('Fizz');
    expect(fizzbuzz(9)).toEqual('Fizz');
  });

  it('should return "Buzz" for multiples of 5', () => {
    expect(fizzbuzz(5)).toEqual('Buzz');
    expect(fizzbuzz(10)).toEqual('Buzz');
  });

  it('should return the number if not a multiple of 3 or 5', () => {
    expect(fizzbuzz(7)).toEqual(7);
  });
});
