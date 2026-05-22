import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Mini-Trello API')
    .setDescription('Backend API documentation for Mini-Trello')
    .setVersion('1.0')
    .addTag('Auth')
    .addTag('Boards')
    .addTag('Columns')
    .addTag('Tasks')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
  Logger.log('Ready on http://localhost:3000/');
}
bootstrap();
