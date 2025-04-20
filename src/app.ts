// const { emailTemplate } = require('./js-fundamentals/01-template');

// console.log(emailTemplate);

// require('./js-fundamentals/02-destructuring')
// const { getUserById } = require('./js-fundamentals/04-arrow');

// let id = 3;

// getUserById(id, (error, user) => {
//   if (error) throw new Error(error);
//   console.log(user);
// });

// const { getAge, getUuid: getUUID } = require('./plugins');
// const { buildMakePerson } = require('./js-fundamentals/05-factory');

// const makePerson = buildMakePerson({ getAge, getUUID });

// const obj = { name: 'Edward Andres Moron Quintana', birthDate: '2000-06-02' };
// const edward = makePerson(obj)

// console.log(edward)

// Siempre que hayan dependencias de tercero, adaptarlo con codigo mio
// const { getPokemonById } = require('./js-fundamentals/06-promises');

// const info = getPokemonById(6)
//   .then((pokemon) => console.log({ pokemon }))
//   .catch((err) => console.log(err))
//   .finally(() => console.log('Finalmente'));

// setTimeout(() => {
//     console.log(info)
// }, 3000)

// const { buildLogger } = require('./plugins');

// const logger = buildLogger('app.js ');

// logger.log('Hello world');
// logger.error('Esto es algo malo');
export const name = 'Edward'
console.log('Hello world');