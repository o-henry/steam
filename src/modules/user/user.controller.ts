import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.request.dto';
import { UserResponse } from './dto/user-response.dto';

@Controller({ path: 'users', version: '1' })
@ApiTags('users')
export class UserController {
  constructor() {}

  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto): Promise<void> {
    return;
  }

  @Post('login')
  login(): Promise<{ token: string }> {
    return;
  }

  @Get(':id')
  userInfo(): Promise<UserResponse> {
    return;
  }
}
