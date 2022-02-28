import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GameResponseDto } from './dto/game.response.dto';
import { GameRepository } from './game.repository';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(GameRepository) private game_repository: GameRepository,
  ) {}

  async get_games(): Promise<GameResponseDto[]> {
    const games = await this.game_repository.find();
    if (!games) throw new NotFoundException('Game not found');
    return games;
  }
}
