import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { GameRepository } from './game.repository';
import { GameResponseDto } from './dto/game.response.dto';
import { UploadGameDto } from './dto/upload-game.request.dto';
import { Publisher } from '../user/model/publisher.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(GameRepository)
    private game_repository: GameRepository,
  ) {}

  async upload(upload_game_dto: UploadGameDto, pub: Publisher): Promise<void> {
    return this.game_repository.create_game(upload_game_dto, pub);
  }

  async get_games(): Promise<GameResponseDto[]> {
    const games = await this.game_repository.find();
    if (!games) throw new NotFoundException('Game not found');
    return games;
  }
}
