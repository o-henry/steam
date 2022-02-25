import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from '@modules/user/dto/create-user.request.dto';
import { UserRepository } from '@modules/user/user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private user_repository: UserRepository,
    private jwt_service: JwtService,
  ) {}

  async login(create_user_dto: CreateUserDto): Promise<{ token: string }> {
    const { username, password } = create_user_dto;
    const user = await this.user_repository.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { username };
      const token: string = await this.jwt_service.sign(payload);
      return { token };
    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }
}
