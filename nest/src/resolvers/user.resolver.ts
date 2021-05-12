import {
  Args,
  Mutation,
  Resolver,
  Query,
  Field,
  Int,
  ObjectType,
} from '@nestjs/graphql';

@ObjectType()
class User {
  @Field(() => Int)
  id: number;

  @Field(() => String, { nullable: true })
  name?: string;
}

let nextUserId = 4;
let users: User[] = [
  { id: 1 },
  { id: 2, name: 'Test' },
  { id: 3, name: 'Name' },
];

@Resolver(() => User)
export class UserResolver {
  @Query(() => [User])
  users(): User[] {
    return users;
  }

  @Query(() => User)
  user(@Args('id') id: number): User {
    return users.find((user) => user.id === id);
  }

  @Mutation(() => User)
  addUser(@Args('name') name: string) {
    const user = {
      id: nextUserId++,
      name,
    };
    users.push(user);
    return user;
  }

  @Mutation(() => User)
  updateUser(@Args('id') id: number, @Args('name') name: string) {
    const user = users.find((user) => user.id === id);
    if (user) {
      user.name = name;
    }
    return user;
  }

  @Mutation(() => Boolean)
  removeUser(@Args('id') id: number) {
    if (users.find((user) => user.id === id)) {
      users = users.filter((user) => user.id !== id);
      return true;
    }
    return false;
  }
}
