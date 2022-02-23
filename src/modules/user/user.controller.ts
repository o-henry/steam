import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { create_user_dto } from './dto/create-user.request.dto';
import { User } from './dto/user-response.dto';
import { UserService } from './user.service';

@Controller({ path: 'users', version: '1' })
@ApiTags('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('signup')
  async signup(@Body() create_user_dto: create_user_dto): Promise<void> {
    return this.userService.signup(create_user_dto);
  }

  @Post('login')
  async login(): Promise<{ token: string }> {
    return;
  }

  @Get(':id')
  async user(@Param('id') id: string): Promise<User> {
    console.log('id', id);
    return;
  }
}
