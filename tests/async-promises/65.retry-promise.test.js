import { describe, it, expect } from 'vitest';
import { retryPromise } from '../../tasks/4.async-promises/65.retry-promise.js';

describe('retryPromise', () => {
  it('should retry a failing promise up to N times', async () => {
    // let count = 0;
    // const failingPromise = () => new Promise((resolve, reject) => {
    //   count++;
    //   if (count < 3) reject('fail');
    //   else resolve('success');
    // });
    // await expect(retryPromise(failingPromise, 3)).resolves.toEqual('success');
  });
});