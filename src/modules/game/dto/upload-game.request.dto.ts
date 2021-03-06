import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

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
    example: 5,
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

  // @ApiProperty({
  //   description: 'game data',
  // })
  // readonly data: Buffer;

  @ApiProperty({
    example: 'nintendo',
    description: 'game maker',
  })
  @IsString()
  readonly publisher: string;
}
