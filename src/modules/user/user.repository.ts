import { EntityRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from './dto/create-user.request.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async create_user(create_user_dto: CreateUserDto): Promise<void> {
    const { username, password } = create_user_dto;
  }
}
