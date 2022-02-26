import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrmConfig } from './config/typeorm.config';
import { HealthModule } from './modules/health/health.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(OrmConfig), HealthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
