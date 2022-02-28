import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { GameResponseDto } from './dto/game.response.dto';
import { GameService } from './game.service';

@ApiTags('games')
@Controller({ path: 'games', version: '1' })
export class GameController {
  constructor(private game_service: GameService) {}

  @Get()
  get_games(): Promise<GameResponseDto[]> {
    return this.game_service.get_games();
  }
}
