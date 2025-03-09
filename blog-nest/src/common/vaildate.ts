import { HttpException, HttpStatus, ValidationPipe } from "@nestjs/common";
import { ValidationError } from "class-validator";

export class Validate extends ValidationPipe {
    protected flattenValidationErrors(
        ValidationErrors: ValidationError[],
    ): string[] {
        // 对错误的验证消息进行处理
        const messages = {};
        ValidationErrors.forEach((error) => {
            messages[error.property] = Object.values(error.constraints!)[0];
        })

        throw new HttpException(
            {
                code: 422,
                messages
            },
            HttpStatus.UNPROCESSABLE_ENTITY,
        )
        
    }
}