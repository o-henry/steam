import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from './model/user.entity';
import { CreateUserDto } from './dto/create-user.request.dto';
import { MysqlError } from '../error/mysql.error';
import { PostgresError } from '../error/postgres.error';

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
      if (
        error.code === PostgresError.UNIQUE_VIOLATION ||
        MysqlError.ER_DUP_ENTRY
      ) {
        throw new ConflictException('Existing username');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
