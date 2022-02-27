import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './role.enum';

@Entity()
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

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role: Role;
}