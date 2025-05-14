import { article } from '@prisma/client' 
import { Transform } from 'class-transformer'
import dayjs from 'dayjs'  // 使用dayjs进行日期的格式处理

export class Article {
    @Transform(({ value }) => dayjs(value).format('YYYY-MM-DD'))
    createAt: string   // 对创建时间进行格式化
    
    @Transform(({ value }) => dayjs(value).format('YYYY-MM-DD'))
    updateAt: string   // 对创建时间进行格式化
    
    // 构造函数传递返回的数据
    constructor(options: Partial<article> | null) {  // 将数据都变成可选
        // 将处理后的数据压入到当前对象中，后续返回给前端
        Object.assign(this, options)
    }    
}