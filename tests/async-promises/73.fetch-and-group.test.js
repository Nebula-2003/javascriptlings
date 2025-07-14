import { describe, it, expect } from 'vitest';
import { fetchAndGroup } from '../../tasks/4.async-promises/73.fetch-and-group.js';

describe('fetchAndGroup', () => {
  it('should fetch multiple and group results', async () => {
    const result = await fetchAndGroup(['https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicode.com/todos/2']);
    expect(result).toEqual([{id: 1, userId: 1, title: 'delectus aut autem', completed: false}, {id: 2, userId: 1, title: 'quis ut nam facilis et officia qui', completed: false}]);
  });
});