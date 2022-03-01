import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class File {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  filename: string;

  @Column({ type: 'bytea' })
  data: Uint8Array;
}
