import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

import { CreateUserDto } from './dto/create-user.request.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { userResponseDto } from './dto/user.response.dto';
import { UserService } from './user.service';
import { AuthService } from '@modules/auth/auth.service';
@ApiTags('users')
@Controller({ path: 'users', version: '1' })
@UseGuards(AuthGuard()) // request with jwt -> guard: check the authorization -> Route Handler
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
    @Body() login_user_dto: LoginUserDto,
  ): Promise<{ token: string }> {
    return this.auth_service.login(login_user_dto);
  }

  @Get(':id')
  async user(@Param('id') id: string): Promise<userResponseDto> {
    console.log('id', id);
    return;
  }
}
