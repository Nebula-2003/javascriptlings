import { describe, it, expect } from 'vitest';
import { asyncAdd } from '../../tasks/4.async-promises/63.async-add.js';

describe('asyncAdd', () => {
  it('should sum after delay', async () => {
    const result = await asyncAdd(1, 2);
    expect(result).toEqual(3);
  });

  it('should handle negative numbers', async () => {
    const result = await asyncAdd(-5, 10);
    expect(result).toEqual(5);
  });

  it('should handle zero', async () => {
    const result = await asyncAdd(0, 0);
    expect(result).toEqual(0);
  });
});
