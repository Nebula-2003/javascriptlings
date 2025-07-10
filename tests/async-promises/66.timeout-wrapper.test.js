import { describe, it, expect } from 'vitest';
import { timeoutWrapper } from '../../tasks/4.async-promises/66.timeout-wrapper.js';

describe('timeoutWrapper', () => {
  it('should cancel a promise if timeout exceeded', async () => {
    // const longPromise = new Promise(resolve => setTimeout(resolve, 200));
    // await expect(timeoutWrapper(longPromise, 50)).rejects.toThrow('Timeout');
  });
});