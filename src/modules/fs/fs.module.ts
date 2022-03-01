import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { File } from './model/fs.entity';
import { FileSystemService } from './fs.service';

@Module({
  imports: [TypeOrmModule.forFeature([File])],
  providers: [FileSystemService],
  exports: [FileSystemService],
  controllers: [],
})
export class FileModule {}
