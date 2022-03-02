import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from './role.enum';
import { Order } from '../../order/model/order.entity';
import { Game } from 'src/modules/game/model/game.entity';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /* username is service's user id */
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  age: number;

  @Column({ length: 60 })
  email: string;

  @Column()
  phone: string;

  @OneToMany((_type) => Order, (order) => order.user, { eager: true })
  orders: Order[];

  @OneToMany((_type) => Game, (game) => game.user, { eager: true })
  games: Game[];

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role: Role;
}
