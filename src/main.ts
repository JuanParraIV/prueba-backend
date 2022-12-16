import { NestFactory } from '@nestjs/core';
import { ProblemasModule } from './modules/problemas.module';

async function bootstrap() {
  const app = await NestFactory.create(ProblemasModule);
  await app.listen(5000);
}
bootstrap();
