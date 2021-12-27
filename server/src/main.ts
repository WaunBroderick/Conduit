import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // Cookie utilization
  app.use(cookieParser());
  // Cross-origin resource sharing
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Conduit Application')
    .setDescription('The API descriptions for the Conduit Application')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(5000);
}
bootstrap();
