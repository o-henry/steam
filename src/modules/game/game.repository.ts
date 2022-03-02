import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';

import { Game } from './model/game.entity';
import { User } from '../user/model/user.entity';
import { UploadGameDto } from './dto/upload-game.request.dto';

@EntityRepository(Game)
export class GameRepository extends Repository<Game> {
  async create_game(upload_game_dto: UploadGameDto, user: User): Promise<void> {
    const { ...payload } = upload_game_dto;
    const game = this.create({
      ...payload,
      user,
    });

    try {
      await this.save(game);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
