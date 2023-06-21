import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle(process.env.APP_NAME)
    .setDescription(process.env.APP_DESC)
    .setVersion(process.env.APP_PORT)
    .addTag(process.env.APP_TAG)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.APP_PORT);
}
bootstrap();
