import { describe, it, expect } from 'vitest';
import { waitAny } from '../../tasks/4.async-promises/69.wait-any.js';

describe('waitAny', () => {
  it('should return result of first promise to resolve', async () => {
    const p1 = new Promise(resolve => setTimeout(() => resolve(1), 100));
    const p2 = new Promise(resolve => setTimeout(() => resolve(2), 50));
    const result = await waitAny([p1, p2]);
    expect(result).toEqual(2);
  });

  it('should resolve even if some promises reject', async () => {
    const p1 = Promise.reject('error');
    const p2 = new Promise(resolve => setTimeout(() => resolve('success'), 50));
    await expect(waitAny([p1, p2])).resolves.toBe('success');
  });

  it('should reject if all promises reject', async () => {
    const p1 = Promise.reject('error1');
    const p2 = Promise.reject('error2');
    await expect(waitAny([p1, p2])).rejects.toThrow();
  });
});
