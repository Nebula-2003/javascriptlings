import { describe, it, expect, vi } from 'vitest';
import { fetchJson } from '../../tasks/4.async-promises/62.fetch-json.js';

// Mocking fetch
global.fetch = vi.fn();

describe('fetchJson', () => {
  it('should simulate a fetch and parse JSON', async () => {
    const mockData = { id: 1, title: 'Test' };
    fetch.mockResolvedValue({
      json: () => Promise.resolve(mockData),
    });

    const data = await fetchJson('https://example.com/data');
    expect(data).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith('https://example.com/data');
  });

  it('should handle fetch error', async () => {
    fetch.mockRejectedValue(new Error('Network error'));
    await expect(fetchJson('https://example.com/error')).rejects.toThrow('Network error');
  });
});
