import { Query, Resolver } from '@nestjs/graphql';
import fetch from 'node-fetch';

@Resolver('Google')
export class GoogleResolver {
  @Query(() => String)
  async google(): Promise<string> {
    return (await fetch('https://google.com', { method: 'GET' })).text();
  }
}
