import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Game } from 'src/modules/game/model/game.entity';

@Entity({ name: 'publisher' })
export class Publisher extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column({ length: 60 })
  email: string;

  @OneToMany((_type) => Game, (game) => game.gamename, { eager: true })
  games: Game[];
}
