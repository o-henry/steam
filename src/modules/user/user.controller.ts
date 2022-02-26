import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

import { User } from './user.entity';
import { UserService } from './user.service';
import { AuthService } from '@modules/auth/auth.service';
import { CreateUserDto } from './dto/create-user.request.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { GetUser } from './decorator/get-user.decorator';
import { UserResponseDto } from './dto/user.response.dto';
@ApiTags('users')
@Controller({ path: 'users', version: '1' })
export class UserController {
  constructor(
    private user_service: UserService,
    private auth_service: AuthService,
  ) {}

  @Post('signup')
  sign_up(@Body() create_user_dto: CreateUserDto): Promise<void> {
    return this.user_service.sign_up(create_user_dto);
  }

  @Post('login')
  login(@Body() login_user_dto: LoginUserDto): Promise<{ token: string }> {
    return this.auth_service.login(login_user_dto);
  }

  @UseGuards(AuthGuard()) // request with jwt -> guard: check the authorization -> Route Handler
  @Get(':id')
  user_info(@Param('id') id: string): Promise<UserResponseDto> {
    return this.user_service.get_user(id);
  }
}
