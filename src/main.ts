import { Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import * as path from 'path';

import { AppModule } from './app.module';
import swagger from '@src/docs';

dotenv.config({
  path: path.resolve(
    process.env.NODE_ENV === 'production'
      ? '.production.env'
      : process.env.NODE_ENV === 'stage'
      ? '.stage.env'
      : '.development.env',
  ),
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
