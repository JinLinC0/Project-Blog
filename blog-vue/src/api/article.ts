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

// 添加文章
export function addArticle(data: any) {
    return http.request({
        url: '/api/article',
        method: 'post',
        data
    })
}

// 根据文章id更新文章
export function updateArticle(data: any) {
    return http.request({
        url: `/api/article/${data.id}`,
        method: 'patch',
        data
    })
}

// 根据文章id删除文章
export function deleteArticle(articleId: Number) {
    return http.request({
        url: `/api/article/${articleId}`,
        method: 'delete'
    })
}