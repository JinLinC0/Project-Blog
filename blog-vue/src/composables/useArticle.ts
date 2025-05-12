import { getArticleList } from "@/api/article"
import { ref } from "vue"

// 存放了获取栏目的组合Api
export default () => {
    const pageResult = ref<ResponsePageResult<ArticleModel>>()
    // 通过接口获取栏目数据
    const all = async () => {
        pageResult.value = await getArticleList()
    }
    return { all, pageResult }
}