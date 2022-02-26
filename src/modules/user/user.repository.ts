import {
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.request.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async create_user(create_user_dto: CreateUserDto): Promise<void> {
    const { password, ...payload } = create_user_dto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({
      ...payload,
      password: hashedPassword,
    });

    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Existing username');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  // !fix do not return the password and id
  async find_user(id: string): Promise<User> {
    const found = await this.findOne({ where: { username: id } });
    if (!found) throw new NotFoundException(`User with ID "${id}" not found`);
    return found;
  }
}
