import { describe, it, expect } from 'vitest';
import { retryPromise } from '../../tasks/4.async-promises/65.retry-promise.js';

describe('retryPromise', () => {
  it('should retry a failing promise up to N times and succeed', async () => {
    let count = 0;
    const failingPromise = () => new Promise((resolve, reject) => {
      count++;
      if (count < 3) reject('fail');
      else resolve('success');
    });
    await expect(retryPromise(failingPromise, 3)).resolves.toEqual('success');
  });

  it('should fail if it never succeeds within the retry limit', async () => {
    let count = 0;
    const failingPromise = () => new Promise((_, reject) => {
      count++;
      reject(`fail ${count}`);
    });
    await expect(retryPromise(failingPromise, 3)).rejects.toEqual('fail 3');
  });

  it('should succeed on the first try', async () => {
    const succeedingPromise = () => Promise.resolve('success');
    await expect(retryPromise(succeedingPromise, 3)).resolves.toEqual('success');
  });
});
