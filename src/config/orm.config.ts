import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function PgOrmConfig(): TypeOrmModuleOptions {
  return {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: 'steam',
    autoLoadEntities: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: Boolean(process.env.DATABASE_SYNCHRONIZE), // do not use production -- db is always initialized.
  };
}
