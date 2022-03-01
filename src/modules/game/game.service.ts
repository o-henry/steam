import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { GameRepository } from './game.repository';
import { GameResponseDto } from './dto/game.response.dto';
import { UploadGameDto } from './dto/upload-game.request.dto';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(GameRepository)
    private game_repository: GameRepository,
  ) {}

  async upload(upload_game_dto: UploadGameDto): Promise<void> {}

  async get_games(): Promise<GameResponseDto[]> {
    const games = await this.game_repository.find();
    if (!games) throw new NotFoundException('Game not found');
    return games;
  }
}
