import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from "@nestjs/common";
import { map } from "rxjs/operators";

// 自定义拦截器，将所有返回的数据都包裹一层data
@Injectable()
export class TransformInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler) {
        return next.handle().pipe(
            map((data) => {
                // 所有返回的数据都被data进行包裹
                return {
                    data,
                };
            }),
        );
    }
}