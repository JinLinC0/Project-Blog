import { IsNotEmpty, Validate } from 'class-validator';
import { IsNotExistsRule } from '@/common/rules/is-not-exists.rule';
import { IsConfirmed } from '@/common/rules/is-confirm.rule';

export default class RegisterDto {
    @IsNotEmpty({ message: '用户名不能为空' })
    @IsNotExistsRule('user', { message: '用户名已存在' })
    name: string;
    @IsNotEmpty({ message: '密码不能为空' })
    @Validate(IsConfirmed, { message: '确认密码输入错误' })
    password: string;
    @IsNotEmpty({ message: '确认密码不能为空' })
    password_confirm: string;
}