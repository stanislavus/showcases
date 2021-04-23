import { Client, CONTRACTS } from '@grpc-example/contracts';

const userClient = new Client(CONTRACTS.USER, '30043');

userClient.list(null, (err, result) => {
  console.log(result);
});

userClient.read({ id: 1 }, (err, result) => {
  console.log(result);
});

userClient.read({ id: 4 }, (err, result) => {
  console.log(result);
});

userClient.create({ name: "New User" }, (err, result) => {
  console.log(result);

  userClient.read({ id: 4 }, (err, result) => {
    console.log(result);

    userClient.delete({ id: 4 }, (err, result) => {
      console.log(result);
    });
  });
});

export default userClient;
