import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from '../auth/auth.service';

import { CreateUserDto } from './dto/create-user.request.dto';
import { userResponseDto } from './dto/user.response.dto';
import { UserService } from './user.service';

@ApiTags('users')
@Controller({ path: 'users', version: '1' })
export class UserController {
  constructor(
    private user_service: UserService,
    private auth_service: AuthService,
  ) {}

  @Post('signup')
  async sign_up(@Body() create_user_dto: CreateUserDto): Promise<void> {
    return this.user_service.sign_up(create_user_dto);
  }

  @Post('login')
  async login(
    @Body() create_user_dto: CreateUserDto,
  ): Promise<{ token: string }> {
    return this.auth_service.login(create_user_dto);
  }

  @Get(':id')
  async user(@Param('id') id: string): Promise<userResponseDto> {
    console.log('id', id);
    return;
  }
}
