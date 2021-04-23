import grpc from 'grpc';
import protoLoader from '@grpc/proto-loader';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const CONTRACTS = {
  HELLO: 'hello',
  USER: 'user',
};

const SERVICES = {
  [CONTRACTS.HELLO]: 'HelloService',
  [CONTRACTS.USER]: 'UserService'
};

const CONTRACT_VALUES = new Set(Object.values(CONTRACTS));

const loadContract = contract => {

  if (!CONTRACT_VALUES.has(contract)) {
    throw new Error(`Contract "${contract}" is not exist`);
  }

  const PROTO_PATH = path.resolve(__dirname, `./${contract}.proto`);

  const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
  });

  return grpc.loadPackageDefinition(packageDefinition)[SERVICES[contract]];
};


export class Server {
  #instance = new grpc.Server();

  constructor(definition) {
    Object.entries(definition).forEach(([contract, implementation]) => {
      const Service = loadContract(contract);
      this.#instance.addService(Service.service, implementation);
    });
  }

  bind(port, ip = '127.0.0.1') {
    this.#instance.bind(`${ip}:${port}`, grpc.ServerCredentials.createInsecure());
  }

  start() {
    this.#instance.start();
    console.log('The server has been started');
  }
}

export class Client {
  constructor(contract, port, ip = '127.0.0.1') {
    const Service = loadContract(contract);
    return new Service(
      `${ip}:${port}`,
      grpc.credentials.createInsecure()
    );
  }
}
