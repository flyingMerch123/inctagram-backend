import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';

async function bootstrap() {
  const app: INestApplication =
    await NestFactory.create<INestApplication>(AppModule);

  app.setGlobalPrefix('api');

  await app.listen(3000);
}
bootstrap();
