import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'TomH',
    description: 'user nickname',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(20)
  readonly id: string;

  @ApiProperty({
    example: '1q2w3e4r!Q4X',
    description: 'user password',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password is too weak',
  })
  readonly password: string;

  @ApiProperty({
    example: '30',
    description: 'user age',
  })
  @IsNumber()
  @Matches(/^[1-9][0-9]?$|^100$/)
  readonly age: number;

  @ApiProperty({
    example: 'alphabet@gmail.com',
    description: 'user email address',
  })
  @MaxLength(320)
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    example: '010-0000-0000',
    description: 'user phone number',
  })
  @IsPhoneNumber()
  readonly phone: string;
}
