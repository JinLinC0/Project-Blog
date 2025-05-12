// 没有分页数据时的返回结构
interface ResponseResult <T>{
    data: T  // 泛型，表示返回的数据类型是不确定的（类型是可变的）
}

// 针对分页数据的接口（有分页数据是的返回结构）
interface ResponsePageResult<T>{
    data: T[]
    meta: {
        current_page: number,
        page_row: string,
        total: number,
        total_pages: number
    }
}