import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GameController } from './game.controller';
import { GameRepository } from './game.repository';
import { GameService } from './game.service';

@Module({
  imports: [GameModule, TypeOrmModule.forFeature([GameRepository])],
  providers: [GameService],
  controllers: [GameController],
})
export class GameModule {}
