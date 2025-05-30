import { addArticle, deleteArticle, getArticleById, getArticleList, updateArticle } from "@/api/article"
import { ref } from "vue"

// 存放了获取栏目的组合Api
export default () => {
    const pageResult = ref<ResponsePageResult<ArticleModel>>()  // 文章列表数据
    let categoryId: any = null;  // 栏目id
    const article = ref<ArticleModel>()  // 具体的文章数据
    
    // 通过接口获取栏目数据
    const all = async (page = 1, cid?: any) => {
        if (cid) categoryId = cid
        pageResult.value = await getArticleList(page, categoryId)
    }

    const find = async (id: number) => {
        article.value = await getArticleById(id)
    }

    // 添加文章
    const add = async (data: Record<string, any>) => {
        await addArticle(data)
    }

    // 更新文章
    const update = async (data: ArticleModel) => {
        await updateArticle(data)
    }

    // 删除文章
    const del = async (articleId: Number) => {
        await deleteArticle(articleId)
    }
    return { all, pageResult, find, article, add, update, del }
}