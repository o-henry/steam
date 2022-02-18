import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Version,
  VERSION_NEUTRAL,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

//   @Controller('auths')
//   @ApiTags('AUTH')
//   export class AuthController {
//     constructor() {}

//     @Version(VERSION_NEUTRAL)
//     @Post('register')
//     @ApiOperation({ description: 'create a user' })
//     @ApiResponse({
//       status: HttpStatus.OK,
//       description: 'successfully registered',
//     })
//     @ApiResponse({ status: HttpStatus.CONFLICT })
//     @ApiResponse({ status: HttpStatus.BAD_REQUEST })
//     async create(@Body() createUserDto: CreateUserDto) {
//       return;
//     }
//   }
