import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Role } from '../enum'
import { RolesGuard } from '../guards/roles.guard'

// 创建一个Auth装饰器，用于验证用户权限，如果没有传入参数，接收的是一个空数组
export function Auth(...roles: Role[]) {
    // 通过SetMetadata方法将roles参数存储到metadata中
    return applyDecorators(SetMetadata('roles', roles), UseGuards(AuthGuard('jwt'), RolesGuard))
}