import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { GameService } from './game.service';
import { GameResponseDto } from './dto/game.response.dto';
import { UploadGameDto } from './dto/upload-game.request.dto';

@ApiTags('games')
@Controller({ path: 'games', version: '1' })
export class GameController {
  constructor(private game_service: GameService) {}

  @Get()
  get_games(): Promise<GameResponseDto[]> {
    return this.game_service.get_games();
  }

  /**
   * only publisher can upload games through fs
   */
  @Post()
  upload(@Body() upload_game_dto: UploadGameDto): Promise<void> {
    return this.game_service.upload(upload_game_dto);
  }
}
