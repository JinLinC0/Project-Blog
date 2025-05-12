import { getArticleList } from "@/api/article"
import { ref } from "vue"

// 存放了获取栏目的组合Api
export default () => {
    const pageResult = ref<ResponsePageResult<ArticleModel>>()
    // 通过接口获取栏目数据
    const all = async (page = 1) => {
        pageResult.value = await getArticleList(page)
    }
    return { all, pageResult }
}