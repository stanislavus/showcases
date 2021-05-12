import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from 'grpc';

@Controller()
export class HelloController {
  @GrpcMethod('HelloService', 'SayHello')
  sayHello(data: any, metadata: Metadata, call: ServerUnaryCall<any>): any {
    return { message: `Hello, ${call.request.name || 'user'}` };
  }
}
