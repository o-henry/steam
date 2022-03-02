import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/modules/user/model/user.entity';

export class GameResponseDto {
  @ApiProperty({
    example: 'pokemon',
    description: 'game name',
  })
  readonly gamename: string;

  @ApiProperty({
    example: 35000,
    description: 'game price',
  })
  readonly price: number;

  @ApiProperty({
    example: 4.5,
    description: 'game rate',
  })
  readonly rate: number;

  @ApiProperty({
    example: 'www.youtube.com',
    description: 'game video url',
  })
  readonly url: string;

  @ApiProperty({
    example: 'nintendo',
    description: 'game maker',
  })
  readonly user: User;

  @ApiProperty({
    example: '2022-02-22',
    description: 'uplodate date',
  })
  readonly created_at: Date;

  @ApiProperty({
    example: '2022-02-28',
    description: 'upldate date',
  })
  readonly updated_at: Date;
}
