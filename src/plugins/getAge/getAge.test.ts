import { getAge } from './getAge';

describe('plugins/getAge.ts', () => {
  test('getAge should return an number', () => {
    const birthDate = '2000-02-06';

    const age = getAge(birthDate);

    expect(typeof age).toBe('number');
  });

  test('getAge should return the current age', () => {
    const birthDate = '2000-02-06';
    const expectedAge = getAge(birthDate);

    const calculatedAge = new Date().getFullYear() - new Date(birthDate).getFullYear();

    expect(expectedAge).toBe(calculatedAge);
  });

  test('getAge should return an error if birthDate is not provided', () => {
    const birthDate = '';

    const age = getAge(birthDate);

    expect(age).toEqual(new Error('birthDate is required'));
  });

  test('getAge should return 0 years', () => {
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2028);

    const birthDate = '2000-02-06';
    const age = getAge(birthDate);

    expect(age).toBe(0);
    expect(spy).toHaveBeenCalled();
  })
});
