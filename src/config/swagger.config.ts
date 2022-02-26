/**
 * https://docs.nestjs.com/openapi/introduction
 **/

import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export default function swagger(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('스팀')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}
