import { describe, it, expect } from 'vitest';
import { timeoutWrapper } from '../../tasks/4.async-promises/66.timeout-wrapper.js';

describe('timeoutWrapper', () => {
  it('should cancel a promise if timeout exceeded', async () => {
    const longPromise = new Promise(resolve => setTimeout(() => resolve('done'), 200));
    await expect(timeoutWrapper(longPromise, 50)).rejects.toThrow('Timeout');
  });

  it('should resolve if promise finishes before timeout', async () => {
    const shortPromise = new Promise(resolve => setTimeout(() => resolve('done'), 50));
    await expect(timeoutWrapper(shortPromise, 200)).resolves.toEqual('done');
  });
});
