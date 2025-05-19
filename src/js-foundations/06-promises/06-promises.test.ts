import { getPokemonById } from './06-promises';

describe('js-foundations/06-promises', () => {
  test('getPokemonById should return a pokemon', async () => {
    const pokemonId = 1;
    const pokemonName = await getPokemonById(pokemonId);

    expect(pokemonName).toBe('bulbasaur');
  });

  test('getPokemonById should return an error if the pokemon does not exist', async () => {
    const pokemonId = 100000000000;
    try {
      await getPokemonById(pokemonId);

      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBe(`Pokemon not found with ID ${pokemonId}`);
      console.log(error);
    }
  });
});
