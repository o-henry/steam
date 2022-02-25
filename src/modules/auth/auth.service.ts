import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

import { UserRepository } from '@modules/user/user.repository';
import { LoginUserDto } from '@modules/user/dto/login-user.dto';
import { Payload } from './interface/payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private user_repository: UserRepository,
    private jwt_service: JwtService,
  ) {}

  async login(login_user_dto: LoginUserDto): Promise<{ token: string }> {
    const { username, password } = login_user_dto;
    const user = await this.user_repository.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: Payload = { username };
      const token: string = await this.jwt_service.sign(payload);
      return { token };
    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }
}
