import {
  Entity,
  BaseEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import { Game } from 'src/modules/game/model/game.entity';
import { User } from 'src/modules/user/model/user.entity';

@Entity({ name: 'order' })
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne((_type) => User, (user) => user.orders, { eager: false })
  @Exclude({ toPlainOnly: true })
  user: User;

  @ManyToOne((_type) => Game, (game) => game.orders, { eager: false })
  @Exclude({ toPlainOnly: true })
  game: Game;

  @CreateDateColumn()
  order_date: Date;
}
