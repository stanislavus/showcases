import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

async function bootstapGRPC() {
  await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'hello',
      protoPath: join(__dirname, 'src/grpc/contracts/hello.proto'),
      url: 'localhost:30043',
    },
  });
}
bootstapGRPC();
