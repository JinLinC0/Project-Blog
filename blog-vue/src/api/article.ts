import { http } from "@/plugins/axios";

// 获取所有文章列表
export function getArticleList(page = 1, cid?: any) {
    const url = `/api/article?page=${page}&` +  (cid ? `category=${cid}` : '')
    return http.request<ArticleModel, ResponsePageResult<ArticleModel>>({
        url
    })
}

// 根据id获取文章
export function getArticleById(id: number) {
    return http.request<ArticleModel>({
        url: `/api/article/${id}`
    }).then(res => res.data)
}