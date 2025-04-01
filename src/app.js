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

const { getPokemonById } = require('./js-fundamentals/06-promises');

const info = getPokemonById(6).then(pokemon => console.log(pokemon));
console.log(info);

// setTimeout(() => {
//     console.log(info)
// }, 3000)
