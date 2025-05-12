import { http } from "@/plugins/axios";

// 获取所有文章
export function getArticleList(page = 1, args = {}) {
    const url = `/api/article?page=${page}&` +  Object.entries(args).map(([key, value]) => key + '=' + value).join('&')
    return http.request<ArticleModel, ResponsePageResult<ArticleModel>>({
        url
    })
}