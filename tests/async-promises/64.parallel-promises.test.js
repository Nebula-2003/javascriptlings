import { describe, it, expect } from 'vitest';
import { parallelPromises } from '../../tasks/4.async-promises/64.parallel-promises.js';

describe('parallelPromises', () => {
  it('should run multiple promises together', async () => {
    const p1 = Promise.resolve(1);
    const p2 = Promise.resolve(2);
    const results = await parallelPromises([p1, p2]);
    expect(results).toEqual([1, 2]);
  });

  it('should handle an empty array of promises', async () => {
    const results = await parallelPromises([]);
    expect(results).toEqual([]);
  });

  it('should handle promises that resolve with different types', async () => {
    const p1 = Promise.resolve('hello');
    const p2 = Promise.resolve(true);
    const results = await parallelPromises([p1, p2]);
    expect(results).toEqual(['hello', true]);
  });
});
