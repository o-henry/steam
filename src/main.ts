import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import * as path from 'path';

import { AppModule } from './app.module';
import swagger from '@src/docs';

dotenv.config({
  path: path.resolve(
    process.env.NODE_ENV === 'production'
      ? 'env.prod'
      : process.env.NODE_ENV === 'stage'
      ? '.env.stage'
      : '.env.dev',
  ),
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  app.enableVersioning({
    type: VersioningType.URI,
  });

  /* api docs */
  swagger(app);

  const port = process.env.PORT || 3333;
  await app.listen(port);

  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
