import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';
import { string } from 'fp-ts';

export class UploadGameDto {
  @ApiProperty({
    example: 'pokemon',
    description: 'game name',
  })
  @IsString()
  @IsNotEmpty()
  readonly gamename: string;

  @ApiProperty({
    example: 35000,
    description: 'game price',
  })
  @IsNumber()
  readonly price: number;

  @ApiProperty({
    example: 4.5,
    description: 'game rate',
  })
  @IsNumber()
  readonly rate: number;

  @ApiProperty({
    example: 'www.youtube.com',
    description: 'game video url',
  })
  @IsString()
  @IsUrl()
  readonly url: string;

  @ApiProperty({
    example: 'nintendo',
    description: 'game maker',
  })
  @IsString()
  readonly publisher: string;
}
