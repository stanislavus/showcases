import { buildSchema } from 'graphql';
const { graphqlHTTP } = require('express-graphql');
import fetch from 'node-fetch';

const schema = buildSchema(`
  type Query {
    hello: String,
    user(id: Int!): User,
    users: [User],
    google: String
  }

  type Mutation {
    addUser(name: String!): User!,
    removeUser(id: Int!): Boolean 
  }

  type User {
    id: Int!,
    name: String
  }
`);

let nextUserId = 4;
let users = [
  {id: 1},
  {id: 2, name: 'Test'},
  {id: 3, name: 'Name'},
];

export default (app: any)=> app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: {
          hello: () => 'hello world!!!',
          user: ({ id }: {id: number}) => users.find(user => user.id === id),
          users: () => users,
          google: async () => (await fetch('https://google.com', { method: 'GET' })).text(),
          addUser: ({ name }: { name: string }) => {
            const user = {
              id: nextUserId++,
              name,
            };
            users.push(user);
            return user;
          },
          removeUser: ({ id }: { id: number }) => {
            if (users.find(user => user.id === id)) {
              users = users.filter(user => user.id !== id);
              return true;
            }
            return false;
          }
        },
        graphiql: true,
    }),
);