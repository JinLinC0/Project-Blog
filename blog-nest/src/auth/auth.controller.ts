import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import RegisterDto from './dto/register.dto';
import LoginDto from './dto/login.dto';

@Controller()
export class AuthController {
    constructor(private readonly auth: AuthService) {}

    // 注册
    @Post('register')
    register(@Body() body: RegisterDto) {
        return this.auth.register(body);
    }

    // 登录
    @Post('login')
    login(@Body() body: LoginDto) {
        return this.auth.login(body);
    }
}
