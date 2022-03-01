import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GameResponseDto } from './dto/game.response.dto';
import { UploadGameDto } from './dto/upload-game.request.dto';
import { GameRepository } from './game.repository';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(GameRepository) private game_repository: GameRepository,
  ) {}

  async upload(upload_game_dto: UploadGameDto): Promise<void> {
    // return this.game_repository.create_game(upload_game_dto);
  }

  async get_games(): Promise<GameResponseDto[]> {
    const games = await this.game_repository.find();
    if (!games) throw new NotFoundException('Game not found');
    return games;
  }
}
