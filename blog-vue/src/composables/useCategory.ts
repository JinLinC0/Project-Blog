import { getAllCategory } from "@/api/category"
import { ref } from "vue"

// 存放了获取栏目的组合Api
export default () => {
    const categories = ref<CategoryModel[]>()
    // 通过接口获取栏目数据
    const all = async () => {
        categories.value = await getAllCategory()
    }
    return { all, categories }
}