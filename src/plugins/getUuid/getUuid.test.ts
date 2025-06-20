import { getUuid } from './getUuid';
describe('plugins/getUuid.ts', () => {
    test('should return an ID string', () => {
        const expectedId = getUuid();

        console.log(expectedId)
        expect(typeof expectedId).toBe('string');
    })
});