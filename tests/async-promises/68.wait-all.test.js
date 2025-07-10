import { describe, it, expect } from 'vitest';
import { waitAll } from '../../tasks/4.async-promises/68.wait-all.js';

describe('waitAll', () => {
  it('should wait for all promises to finish', async () => {
    const p1 = Promise.resolve(1);
    const p2 = Promise.resolve(2);
    const results = await waitAll([p1, p2]);
    expect(results).toEqual([1, 2]);
  });

  it('should reject if any promise rejects', async () => {
    const p1 = Promise.resolve(1);
    const p2 = Promise.reject('error');
    await expect(waitAll([p1, p2])).rejects.toBe('error');
  });

  it('should handle an empty array', async () => {
    const results = await waitAll([]);
    expect(results).toEqual([]);
  });
});
