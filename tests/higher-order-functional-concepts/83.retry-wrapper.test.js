import { describe, it, expect } from 'vitest';
import { retryWrapper } from '../../tasks/5.higher-order-functional-concepts/83.retry-wrapper.js';

describe('retryWrapper', () => {
  it('should retry on error up to n times', async () => {
    // let callCount = 0;
    // const unreliableFn = () => {
    //   callCount++;
    //   if (callCount < 3) throw new Error('fail');
    //   return 'success';
    // };
    // const retriedFn = retryWrapper(unreliableFn, 3);
    // expect(retriedFn()).toEqual('success');
    // expect(callCount).toEqual(3);
  });
});