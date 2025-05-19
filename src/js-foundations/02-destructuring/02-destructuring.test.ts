import { character } from './02-destructuring';

describe('js-foundation/02-destructuring.ts', () => {
  test('Characters should contain Flash, Superman', () => {

    expect(character).toContain('Flash');
    expect(character).toContain('Superman');
  });

  test('First character should be Flash', () => {
    const [superman, flash] = character;

    expect(flash).toBe('Flash');
    expect(superman).toBe('Superman');
  })
});
