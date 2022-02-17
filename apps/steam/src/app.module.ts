import { Module } from '@nestjs/common';

import { UserController } from '@api/auth/user.controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
