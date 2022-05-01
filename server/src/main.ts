import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: 'http://localhost:3000',
      credentials: true,
      allowedHeaders: 'Content-Type, Authorization',
    },
  });

  app.use(cookieParser());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Conduit Application')
    .setDescription('The API descriptions for the Conduit Application')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(5000);
}
bootstrap();
