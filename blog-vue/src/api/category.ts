import { http } from "@/plugins/axios";

// 获取所有栏目
export function getAllCategory() {
    return http.request<CategoryModel[]>({
        url: '/api/category'
    }).then(res => res.data)
}