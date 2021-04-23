import { CONTRACTS, Server } from '@grpc-example/contracts';
import UserModel from './UserModel.js';

const server = new Server({
  [CONTRACTS.HELLO]: {
    sayHello: (call, callback) => callback(null, {message: `Hello, ${call.request.name || 'user'}`}),
  },
  [CONTRACTS.USER]: UserModel,
});

server.bind('30043');
server.start();
