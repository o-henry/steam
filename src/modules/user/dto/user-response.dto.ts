import { ApiProperty } from '@nestjs/swagger';

export class UserResponse {
  constructor() {}

  @ApiProperty({
    example: 'TomH',
    description: 'user nickname',
  })
  id: string;

  @ApiProperty({
    example: '30',
    description: 'user age',
  })
  age: number;

  @ApiProperty({
    example: 'alphabet@gmail.com',
    description: 'user email address',
  })
  email: string;

  @ApiProperty({
    example: '010-0000-0000',
    description: 'user phone number',
  })
  phone: string;
}
