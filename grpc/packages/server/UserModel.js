let users = [
  {id: 1, name: 'First'},
  {id: 2, name: 'Test'},
  {id: 3, name: 'Name'},
];
let nextUserId = 4;

const UserModel = {
  list: (_, callback) => callback(null, { users }),
  read: (call, callback) => callback(null, users.find(user => user.id === call.request.id)),
  create: (call, callback) => {
    const user = {
      id: nextUserId++,
      name: call.request.name,
    };
    users.push(user);
    return callback(null, user);
  },
  update: (call, callback) => {
    const updateUser = call.request;
    const user = users.find(user => user.id === updateUser.id);
    if (user) {
      Object.assign(user, updateUser);
      return callback(null, { status: true });
    }
    return callback(null, { status: false });
  },
  delete: (call, callback) => {
    const id = call.request.id;
    if (users.find(user => user.id === id)) {
      users = users.filter(user => user.id !== id);
      return callback(null, { status: true });
    }
    return callback(null, { status: false });
  }
};

export default UserModel;
