import { personFactory } from './05-factory';
describe('js-foundations/05-factory.ts', () => {
  const getUUID = () => '1234';
  const getAge = () => 35;
  test('personFactory should return a function', () => {
    const makePerson = personFactory({ getAge, getUUID });

    expect(typeof makePerson).toBe('function');
  });

  test('personFactory should return a person object', () => {
    const makePerson = personFactory({ getAge, getUUID });
    const person1 = makePerson({
      name: 'Edward Andres Moron Quintana',
      birthDate: '2000-06-02',
    });
    expect(person1).toEqual({
      id: '1234',
      name: 'Edward Andres Moron Quintana',
      birthDate: '2000-06-02',
      age: 35,
    });
  });
});
