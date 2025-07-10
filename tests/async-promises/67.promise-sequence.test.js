import { describe, it, expect } from 'vitest';
import { promiseSequence } from '../../tasks/4.async-promises/67.promise-sequence.js';

describe('promiseSequence', () => {
  it('should chain multiple promises in order', async () => {
    const p1 = () => Promise.resolve(1);
    const p2 = (val) => Promise.resolve(val + 2);
    const results = await promiseSequence([p1, p2]);
    expect(results).toEqual([1, 3]);
  });

  it('should handle an empty array', async () => {
    const results = await promiseSequence([]);
    expect(results).toEqual([]);
  });

  it('should pass results from one promise to the next', async () => {
    let callOrder = [];
    const p1 = () => {
      callOrder.push(1);
      return Promise.resolve(10);
    };
    const p2 = (val) => {
      callOrder.push(2);
      expect(val).toBe(10);
      return Promise.resolve(val * 2);
    };
    const results = await promiseSequence([p1, p2]);
    expect(results).toEqual([10, 20]);
    expect(callOrder).toEqual([1, 2]);
  });
});
