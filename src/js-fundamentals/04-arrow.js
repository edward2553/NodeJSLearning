const users = [
  {
    id: 1,
    name: 'John Doe',
  },
  {
    id: 2,
    name: 'Jane Doe',
  },
  {
    id: 3,
    name: 'Asereje',
  },
];

const getUserById = (id, callback) => {
  const user = users.find((user) => user.id === id);

  return user
    ? callback(null, user)
    : callback(`User with ID ${id} not found`, undefined);
};

module.exports = {
  getUserById,
};
