import { describe, it, expect } from 'vitest';
import { parallelPromises } from '../../tasks/4.async-promises/64.parallel-promises.js';

// Helper to create a promise that resolves after a delay
const delayedResolve = (value, delay) => new Promise(resolve => setTimeout(() => resolve(value), delay));

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

  it('should reject if any promise rejects', async () => {
    const p1 = Promise.resolve(1);
    const p2 = Promise.reject(new Error('Something went wrong'));
    await expect(parallelPromises([p1, p2])).rejects.toThrow('Something went wrong');
  });

  it('should handle promises with delays', async () => {
    const p1 = delayedResolve('first', 50);
    const p2 = delayedResolve('second', 30);
    const results = await parallelPromises([p1, p2]);
    expect(results).toEqual(['first', 'second']);
  });

  it('should maintain the order of the promises', async () => {
    const p1 = delayedResolve('first', 50);
    const p2 = delayedResolve('second', 30);
    const results = await parallelPromises([p1, p2]);
    expect(results).toEqual(['first', 'second']);
  });

  it('should handle promises resolving to null or undefined', async () => {
    const p1 = Promise.resolve(null);
    const p2 = Promise.resolve(undefined);
    const results = await parallelPromises([p1, p2]);
    expect(results).toEqual([null, undefined]);
  });
});
