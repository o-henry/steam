import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { PgOrmConfig } from './config/orm-pg.config';
import { SqlOrmConfig } from './config/orm-sql.config';
import { GameModule } from './modules/game/game.module';
import { UserModule } from './modules/user/user.module';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'prod'
          ? 'env.prod'
          : process.env.NODE_ENV === 'stage'
          ? '.env.stage'
          : '.env.dev',
    }),
    TypeOrmModule.forRoot(SqlOrmConfig()),
    // TypeOrmModule.forRoot(PgOrmConfig),
    UserModule,
    GameModule,
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
