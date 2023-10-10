import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const logger: Logger = new Logger('bootstrap');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  const config = app.get<ConfigService>(ConfigService);

  const PORT = config.getOrThrow('PORT', 30000);

  await app.listen(PORT);
  logger.log(`Server is running  on port: ${PORT}`);
}
bootstrap();
