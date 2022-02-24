import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const OrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: 'steam-service',
  autoLoadEntities: true,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: Boolean(process.env.DATABASE_SYNCHRONIZE), // do not use production -- db is always initialized.
};
