import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.request.dto';
import { UserResponseDto } from './dto/user.response.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository) private user_repository: UserRepository,
  ) {}

  async sign_up(create_user_dto: CreateUserDto): Promise<void> {
    return this.user_repository.create_user(create_user_dto);
  }

  async get_user(id: string): Promise<UserResponseDto> {
    const user = await this.user_repository.findOne({
      where: { username: id },
    });
    if (!user) throw new NotFoundException(`User with ID "${id}" not found`);

    return {
      username: user.username,
      age: user.age,
      email: user.email,
      phone: user.phone,
    };
  }
}
