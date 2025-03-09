import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    // 注册jwt模块
    JwtModule.registerAsync({
      // 引入配置模块和服务
      imports: [ConfigModule],
      inject: [ConfigService],
      // 编写一个工厂函数，将服务实例引入，后续在工厂函数内部就可以使用configService来获取配置文件中的配置项
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get('TOKEN_SECRET'), // 读取并设置token的密钥
          signOptions: { expiresIn: '7d' }  // 设置token过期时间:7天
        }
      }
    })
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
