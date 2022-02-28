import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'game' })
export class Game extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  price: number;

  @Column()
  rate: number;

  @Column()
  url: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  // fk
  @Column()
  publisher: string;
}
