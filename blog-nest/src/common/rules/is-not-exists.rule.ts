import { PrismaClient } from "@prisma/client";
import { registerDecorator, ValidationArguments, ValidationOptions } from "class-validator";

// 该规则供用户注册使用，当用户名存在的时候，提示用户名以存在
// 装饰器执行的函数，函数可以进行参数的设置，从外界中传入参数
export function IsNotExistsRule(
	// table表示定义具体操作数据中的哪张表
    table: string,
    validationOptions?: ValidationOptions,
) { 
    return function (object: Record<string, any>, propertyName: string) {
        registerDecorator({
            name: "IsNotExistsRule",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [table],
            options: validationOptions,
            validator: {
                async validate(value: string, args: ValidationArguments) {
                    const prisma = new PrismaClient();
                    const user = await prisma[table].findFirst({
                        where: {
                            // propertyName变量的属性名是name
                            [propertyName]: args.value,
                        },
                    });
                    // 返回假表示验证失败
                    return !Boolean(user);
                },
            },
        })
    }
}