import { Client, CONTRACTS } from '@grpc-example/contracts';

const helloClient = new Client(CONTRACTS.HELLO, '30043');

helloClient.sayHello({ name: null }, (err, result) => {
  console.log(result);
});

export default helloClient;
