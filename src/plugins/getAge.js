const getAgePlugin = require('get-age');

const getAge = (birthDate) => {
    if (!birthDate) return new Error('birthDate is required');

    return getAgePlugin(birthDate);
    // return new Date(birthDate).getDate();
}

module.exports = getAge;