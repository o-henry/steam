import { Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import swagger from '@src/api/docs';

import { AppModule } from './app.module';

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
