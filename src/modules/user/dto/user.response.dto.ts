import { ApiProperty } from '@nestjs/swagger';
export class UserResponseDto {
  constructor() {}

  @ApiProperty({
    example: 'TomH',
    description: 'user id',
  })
  readonly username: string;

  @ApiProperty({
    example: '30',
    description: 'user age',
  })
  readonly age: number;

  @ApiProperty({
    example: 'alphabet@gmail.com',
    description: 'user email address',
  })
  readonly email: string;

  @ApiProperty({
    example: '010-0000-0000',
    description: 'user phone number',
  })
  readonly phone: string;
}
