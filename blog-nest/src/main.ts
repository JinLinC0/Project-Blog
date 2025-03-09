import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Validate } from './common/vaildate';
import { TransformInterceptor } from './transform.inteceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 绑定注册的验证管道
  app.useGlobalPipes(new Validate());
  // 声明拦截器
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
