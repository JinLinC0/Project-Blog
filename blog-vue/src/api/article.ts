import { http } from "@/plugins/axios";

// 获取所有文章
export function getArticleList() {
    return http.request<ArticleModel, ResponsePageResult<ArticleModel>>({
        url: '/api/article'
    })
}