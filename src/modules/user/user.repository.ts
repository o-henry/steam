import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.request.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async create_user(create_user_dto: CreateUserDto): Promise<void> {
    const { username, password, age, email, phone } = create_user_dto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({
      username,
      password: hashedPassword,
      age,
      email,
      phone,
    });

    try {
      await this.save(user);
    } catch (error) {
      console.log('error', error);
      if (error.code === '23505') {
        throw new ConflictException('Existing username');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
