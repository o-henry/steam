import {
  IsNumber,
  IsEmail,
  MaxLength,
  MinLength,
  IsString,
  Matches,
  IsPhoneNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'john', description: 'user id' })
  @IsString()
  readonly id: string;

  @ApiProperty({
    example: '1q2w3e4r',
    description: 'user password',
  })
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'password only accepts english and number',
  })
  readonly password: string;

  @ApiProperty({ example: '20', description: 'user age' })
  @IsNumber()
  readonly age: number;

  @ApiProperty({
    example: 'john@gmail.com',
    description: 'user email address',
  })
  @IsNumber()
  @MaxLength(320)
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: '010-1111-2222', description: 'user phone number' })
  @IsPhoneNumber()
  @MaxLength(13)
  readonly phone: number;
}
