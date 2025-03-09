import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()   // 定义为全局的模块
@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule {}
