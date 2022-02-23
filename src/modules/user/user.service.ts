import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { create_user_dto } from './dto/create-user.request.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async signup(create_user_dto: create_user_dto): Promise<void> {
    return this.userRepository.createUser(create_user_dto);
  }
}
