import { Query, Resolver } from '@nestjs/graphql';

@Resolver('Hello')
export class HelloResolver {
  @Query(() => String)
  hello(): string {
    return 'Hello World!!!';
  }
}
