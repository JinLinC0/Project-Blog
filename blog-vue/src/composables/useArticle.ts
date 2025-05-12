import { getArticleList } from "@/api/article"
import { ref } from "vue"

const pageResult = ref<ResponsePageResult<ArticleModel>>()
let params = {}

// 存放了获取栏目的组合Api
export default () => {
    // 通过接口获取栏目数据
    const all = async (page = 1, args?: Record<string, any>) => {
        if(args) params = args  // 如果有参数，则将参数赋值给params，用于当前状态的记录
        pageResult.value = await getArticleList(page, params)
    }
    return { all, pageResult }
}