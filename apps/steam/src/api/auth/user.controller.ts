import { Controller, Get, HttpStatus, Post, Version } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller({ path: 'users' })
@ApiTags('user api')
export class UserController {
  constructor() {}

  @Version('1')
  @Post()
  @ApiOperation({ description: 'create a user' })
  @ApiResponse({ status: HttpStatus.OK })
  async create() {}

  // @Version('1')
  // @Get()
  // @ApiOperation({ description: ''})
}
