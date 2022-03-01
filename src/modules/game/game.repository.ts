import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { UploadGameDto } from './dto/upload-game.request.dto';
import { Game } from './model/game.entity';

@EntityRepository(Game)
export class GameRepository extends Repository<Game> {
  async create_game(upload_game_dto: UploadGameDto): Promise<void> {
    const game = await this.create(upload_game_dto);

    try {
      await this.save(game);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
