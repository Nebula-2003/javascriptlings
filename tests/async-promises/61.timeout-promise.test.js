import { describe, it, expect } from 'vitest';
import { timeoutPromise } from '../../tasks/4.async-promises/61.timeout-promise.js';

describe('timeoutPromise', () => {
  it('should return promise that resolves after delay', async () => {
    const start = Date.now();
    await timeoutPromise(100);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(100);
  });

  it('should resolve with the correct value', async () => {
    await expect(timeoutPromise(50, 'test')).resolves.toBe('test');
  });
});
