// function that creates another function


const buildMakePerson = ({ getUUID, getAge }) => {
  return ({ name, birthDate }) => {
    return {
      id: getUUID(),
      name,
      birthDate,
      age: getAge(birthDate),
    };
  };
};

module.exports = {
  buildMakePerson,
};

// const obj = { name: 'Edward Andres Moron Quintana', birthDate: '2000-06-02' };

// const john = buildPerson(obj);

// console.log(john);

/**
 * Usualmente usamos paquetes de terceros
 * Lo mejor es contrastar el uso de la dependencia, para saber que es mejor, si usarla o pesa mucho,
 * si a nosotros se nos facilita mas o menos la vida programando
 *
 * Patron adaptador:
 * Lo ideal es que cuando trabajemos con alguna dependencia de un tercero, lo mejor
 * es usar algun tipo de capa o proteccion, en el cual no es mas que crear nuestro propio codigo
 * y adaptar la dependencia de tercero. para que nuestro codigo no dependa de la dependencia
 *
 */
