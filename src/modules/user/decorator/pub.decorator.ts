import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Publisher } from '../model/publisher.entity';

export const GetPublisher = createParamDecorator(
  (_data, ctx: ExecutionContext): Publisher => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
