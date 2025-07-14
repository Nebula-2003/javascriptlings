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

  it('should handle a delay of 0', async () => {
    const start = Date.now();
    await timeoutPromise(0);
    const end = Date.now();
    // Should be very fast, but give it a small margin
    expect(end - start).toBeLessThan(50);
  });

  it('should resolve with undefined if no value is provided', async () => {
    await expect(timeoutPromise(50)).resolves.toBeUndefined();
  });

  it('should work with a longer delay', async () => {
    const start = Date.now();
    await timeoutPromise(200);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(200);
  });
});
