import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { user } from '@prisma/client'
import { Observable } from 'rxjs'
import { Role } from '../enum'

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const user = context.switchToHttp().getRequest()?.user as user

        const roles = this.reflector.getAllAndOverride<Role[]>('roles', [context.getHandler(), context.getClass()])
        return roles.length ? roles.some((r) => user.role == r) : true
    }
}