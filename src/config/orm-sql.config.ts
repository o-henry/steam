import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function SqlOrmConfig(): TypeOrmModuleOptions {
  return {
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: 3306,
    username: process.env.DATABASE_SQL_USERNAME,
    password: process.env.DATABASE_SQL_PASSWORD,
    database: 'steam',
    autoLoadEntities: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: Boolean(process.env.DATABASE_SYNCHRONIZE),
  };
}
