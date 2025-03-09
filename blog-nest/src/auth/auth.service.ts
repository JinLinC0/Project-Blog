import { BadRequestException, Injectable } from '@nestjs/common';
import RegisterDto from './dto/register.dto';
import LoginDto from './dto/login.dto';
import { PrismaService } from '../prisma/prisma.service';
import { hash, verify } from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwt: JwtService) {}

    // 注册服务
    async register(dto: RegisterDto) {
        const user = await this.prisma.user.create({
            data: {
                name: dto.name,
                password: await hash(dto.password),
            }
        })
        return this.token(user)
    }

    // 生成token   User为prisma中定义的User类型
    private async token({ name, id }) {
        // 使用jwt服务生成签名
        return {
            token: await this.jwt.signAsync({ 
                // 将要存储的内容放入
                name,
                sub: id   // 后续就可以根据这个token值得到这个id，通过这个id查找到用户
            })
        }
    }

    // 登录服务
    async login(dto : LoginDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                name: dto.name
            }
        })

        if(! await verify(user!.password, dto.password)) {
            throw new BadRequestException('密码输入错误');
        }

        return this.token(user!)
    }
}
