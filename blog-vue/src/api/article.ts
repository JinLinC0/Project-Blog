import { http } from "@/plugins/axios";

// 获取所有文章
export function getArticleList(page = 1) {
    return http.request<ArticleModel, ResponsePageResult<ArticleModel>>({
        url: `/api/article?page=${page}`
    })
}