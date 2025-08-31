import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { RequestMethod } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      credentials: true,
      origin: 'http://localhost:3030',
    },
  });
  app.setGlobalPrefix('api', {
    exclude: [{ method: RequestMethod.GET, path: '/health' }],
  });

  const configService = app.get(ConfigService);
  const PORT = configService.get<string>('port');

  const config = new DocumentBuilder()
    .setTitle('Furniro API')
    .addBearerAuth()
    .addServer(`http://localhost:${PORT}`, 'Localhost')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(PORT);
}

void bootstrap();
