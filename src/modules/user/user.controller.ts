import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from './dto/create-user.request.dto';
import { UserResponseDto } from './dto/user.response.dto';
import { AuthService } from '../auth/auth.service';
import { Role } from './model/role.enum';
import { Roles } from './decorator/role.decorator';
import { RoleGuard } from './guard/role.guard';

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

  @UseGuards(AuthGuard()) // request with jwt -> guard: check the authorization -> access
  @Get(':id')
  get_user(@Param('id') id: string): Promise<UserResponseDto> {
    return this.user_service.get_user(id);
  }

  /**
   * user - publisher, admin, user
   * publisher can get user who buy the game.
   * admin can get user who have signed up for steam service.
   * user can get only his information.
   */

  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard(), RoleGuard)
  @Get()
  get_users(): Promise<UserResponseDto[]> {
    return this.user_service.get_users();
  }
}
