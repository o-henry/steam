import {
  Column,
  Entity,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import { Order } from 'src/modules/order/model/order.entity';
import { User } from 'src/modules/user/model/user.entity';

@Entity({ name: 'game' })
export class Game extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  gamename: string;

  @Column()
  price: number;

  @Column()
  rate: number;

  @Column()
  url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // @Column({ type: 'bytea' })
  // data: Buffer;

  @OneToMany((_type) => Order, (order) => order.game, { eager: true })
  @Exclude({ toPlainOnly: true })
  orders: Order[];

  @ManyToOne((_type) => User, (user) => user.games, { eager: false })
  @Exclude({ toPlainOnly: true })
  user: User;
}
