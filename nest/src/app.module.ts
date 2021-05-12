import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloResolver } from './resolvers/hello.resolver';
import { GoogleResolver } from './resolvers/google.resolver';
import { UserResolver } from './resolvers/user.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, HelloResolver, GoogleResolver, UserResolver],
})
export class AppModule {}
