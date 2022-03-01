import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { FileModule } from '../fs/fs.module';

import { GameController } from './game.controller';
import { GameRepository } from './game.repository';
import { GameService } from './game.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([GameRepository]),
    GameModule,
    AuthModule,
    FileModule,
  ],
  providers: [GameService],
  controllers: [GameController],
})
export class GameModule {}
