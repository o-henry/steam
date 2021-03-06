import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

import { GameService } from './game.service';
import { Role } from '../user/model/role.enum';
import { Roles } from '../user/decorator/role.decorator';
import { RoleGuard } from '../user/guard/role.guard';
import { User } from '../user/model/user.entity';
import { GetUser } from '../user/decorator/user.decorator';
import { GameResponseDto } from './dto/game.response.dto';
import { UploadGameDto } from './dto/upload-game.request.dto';
import { Game } from './model/game.entity';

@ApiTags('games')
@Controller({ path: 'games', version: '1' })
export class GameController {
  constructor(private game_service: GameService) {}

  @Get()
  get_games(): Promise<GameResponseDto[]> {
    return this.game_service.get_games();
  }

  @Roles(Role.PUBLISHER)
  @UseGuards(AuthGuard(), RoleGuard)
  @Post()
  upload(
    @Body() upload_game_dto: UploadGameDto,
    @GetUser() user: User,
  ): Promise<Game> {
    return this.game_service.upload(upload_game_dto, user);
  }
}
