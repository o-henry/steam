/**
 * https://docs.nestjs.com/openapi/introduction
 **/

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export default function swagger(app): void {
  const options = new DocumentBuilder()
    .setTitle('STEAM API')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}
