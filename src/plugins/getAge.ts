const getAgePlugin = require('get-age');

export const getAge = (birthDate: string) => {
  if (!birthDate) return new Error('birthDate is required');

  return getAgePlugin(birthDate);
  // return new Date(birthDate).getDate();
};
