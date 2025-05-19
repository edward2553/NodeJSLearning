const users = [
  {
    id: 1,
    name: 'John Doe',
  },
  {
    id: 2,
    name: 'Jane Doe',
  },
];

// export function getUserByAsync(
//   id: number,
//   callback: (message: string | null, data: any) => void
// ) {
//   const user = users.find(function (user) {
//     return user.id === id;
//   });
//   if (!user) {
//     setTimeout(() => {
//       callback(`User with ID ${id} not found`, undefined);
//     }, 2000);
//     return;
//   }

//   return callback(null, user);
// }

export function getUserById(
  id: number,
  callback: (message: string | null, data: any) => void
) {
  const user = users.find(function (user) {
    return user.id === id;
  });
  if (!user) return callback(`User with ID ${id} not found`, undefined);

  return callback(null, user);
}
