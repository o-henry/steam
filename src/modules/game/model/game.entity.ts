import { File } from '@src/modules/fs/model/fs.entity';
import {
  Column,
  Entity,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';

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

  @JoinColumn({ name: 'file_id' })
  @OneToOne(() => File, { nullable: true })
  file?: File;

  @Column({ nullable: true })
  file_id: number;

  // fk
  @Column()
  publisher: string;
}
