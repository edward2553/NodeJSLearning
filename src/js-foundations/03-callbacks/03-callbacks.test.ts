import { getUserById } from './03-callbacks';
describe('js-foundation/03-callbacks.ts', () => {
  const expectedUser = { id: 2, name: 'Jane Doe' };

  test('getUserById should return a user', () => {
    const id = 2;

    getUserById(id, (message, data) => {
      expect(data).toEqual(expectedUser);
    });
  });

  test('getUserById should return an error if the user is not found', () => {
    const id = 44;
    const expectedError = `User with ID ${id} not found`;
    getUserById(id, (message, data) => {
      expect(message).toEqual(expectedError);
      expect(data).toBeUndefined();
    });
  });
});
