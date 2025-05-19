// const getPokemonById = (id, callback) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   fetch(url).then((response) => {
//     response.json().then((pokemon) => {
//       callback && callback(pokemon.name);
//     });
//   });
//   return 'Pokemon';
// };

// const getPokemonById = (id) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//   return fetch(url)
//     .then((resp) => resp.json())
//     .then((pokemon) => pokemon.name);
// };

// Una funcion async no es mas que una funcion que internamente regresa una promesa
// const getPokemonById = async (id) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//   const response = await fetch(url);
//   const pokemon = await response.json();

// // throw new Error('Error: Pokemon not found');

//   return pokemon.name;
// };

import { httpClientPlugin as http } from '../../plugins';

export const getPokemonById = async (id: string | number) => {
  try {
    
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  
    const pokemon = await http.get(url);
    return pokemon.name;
  } catch (error) {
    throw `Pokemon not found with ID ${id}`;
  }
};
