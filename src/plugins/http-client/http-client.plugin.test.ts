import { httpClientPlugin } from './http-client.plugin';

describe('plugins/http-client.plugin.ts', () => {
  test('httpClientPlugin.get() should return the data', async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    const data = await httpClientPlugin.get(url);

    expect(data).toEqual({
      userId: expect.any(Number),
      id: expect.any(Number),
      title: expect.any(String),
      completed: expect.any(Boolean),
    });
  });

  test('httpClient should have POST, PUT and DELETE methods', () => {
    expect(typeof httpClientPlugin.post).toBe('function');
    expect(typeof httpClientPlugin.put).toBe('function');
    expect(typeof httpClientPlugin.delete).toBe('function');
    expect(typeof httpClientPlugin.get).toBe('function');
  })
});
