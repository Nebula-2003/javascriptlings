import { describe, it, expect, vi } from 'vitest';
import { fetchWithFallback } from '../../tasks/4.async-promises/70.fetch-with-fallback.js';

global.fetch = vi.fn();

describe('fetchWithFallback', () => {
  it('should try first URL, then fallback to second', async () => {
    const mockSuccess = { id: 1 };
    fetch
      .mockRejectedValueOnce(new Error('Network error'))
      .mockResolvedValueOnce({ json: () => Promise.resolve(mockSuccess) });

    const result = await fetchWithFallback(['https://fail.com', 'https://success.com']);
    expect(result).toEqual(mockSuccess);
    expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch).toHaveBeenCalledWith('https://fail.com');
    expect(fetch).toHaveBeenCalledWith('https://success.com');
  });

  it('should return the result from the first URL if it succeeds', async () => {
    const mockSuccess = { id: 1 };
    fetch.mockResolvedValue({ json: () => Promise.resolve(mockSuccess) });

    const result = await fetchWithFallback(['https://success.com', 'https://fallback.com']);
    expect(result).toEqual(mockSuccess);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://success.com');
  });

  it('should reject if all URLs fail', async () => {
    fetch.mockRejectedValue(new Error('Network error'));
    await expect(fetchWithFallback(['https://fail1.com', 'https://fail2.com'])).rejects.toThrow('All fetch attempts failed');
  });
});
