import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GameModule } from './modules/game/game.module';
import { UserModule } from './modules/user/user.module';
import { HealthModule } from './modules/health/health.module';
import { OrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    UserModule,
    GameModule,
    TypeOrmModule.forRoot(OrmConfig),
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
