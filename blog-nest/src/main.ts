import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Validate } from './common/vaildate';
import { TransformInterceptor } from './transform.inteceptor';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 绑定注册的验证管道
  app.useGlobalPipes(new Validate());
  // 声明拦截器
  app.useGlobalInterceptors(new TransformInterceptor());
  // 设置接口前缀
  app.setGlobalPrefix('api');
  // 定义静态的访问地址
  app.useStaticAssets('uploads', { prefix: '/uploads' });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
