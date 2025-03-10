import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from "@nestjs/common";
import { map } from "rxjs/operators";

// 自定义拦截器，将所有返回的数据都包裹一层data
@Injectable()
export class TransformInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler) {
        return next.handle().pipe(
            map((data) => {
                // 文章的分页数据信息不要被data包裹
                return data?.meta ? data : { data };
            }),
        );
    }
}