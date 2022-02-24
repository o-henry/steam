import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.request.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private user_repository: UserRepository,
  ) {}

  async sign_up(create_user_dto: CreateUserDto): Promise<void> {
    return this.user_repository.create_user(create_user_dto);
  }
}
