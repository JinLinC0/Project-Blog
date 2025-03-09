import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

// 该规则用于用户注册时，密码和确认密码的比对
@ValidatorConstraint()
export class IsConfirmed implements ValidatorConstraintInterface {
    // 进行密码比对
    async validate(value: string, args: ValidationArguments) {
        // 返回假表示验证失败
        return value === args.object[args.property + '_confirm'];
    }
    // 默认消息：比对失败的提示消息
    defaultMessage(args: ValidationArguments) {
        return '比对失败';
    }
}