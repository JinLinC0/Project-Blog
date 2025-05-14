<template>
    <el-card shadow="always" :body-style="{ padding: '20px' }" class="mt-3" v-if="article">
        <el-select v-model="article.categoryId" value-key="" placeholder="请选择栏目" class="mb-2">
            <el-option v-for="category in categories" :key="category.id" :label="category.title"
                :value="category.id"></el-option>
        </el-select>
        <template #header>编辑文章</template>
        <el-input v-model="article.title" placeholder="请输入标题" clearable class="mb-2" />
        <wangEditor v-model="article.content" :height="300" class="mb-2" />
        <el-button type="primary" size="default" class="mt-2" @click="onSubmit">修改提交</el-button>
    </el-card>
</template>

<script setup lang="ts">
import wangEditor from '@/components/wangEditor/editor.vue';
import useArticle from '@/composables/useArticle';
import useCategory from '@/composables/useCategory';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ElMessage } from 'element-plus'

const { find, article, update } = useArticle();
const { all, categories } = useCategory();

const route = useRoute();
const router = useRouter();

onMounted(async () => {
    await find(Number(route.params.id));
});

// 提交文章
const onSubmit = async () => {
    try {
        await update(article.value!);   // !是ts中的强制类型语法，说明这个值一定不是undefined
        ElMessage({
            message: '更新成功',
            type: 'success',
        })
        setTimeout(() => {
            router.push('/');
        }, 1000)
    } catch (error) {
        ElMessage.error('更新失败')
    }
}

onMounted(async () => {
    await all();
});
</script>

<style scoped></style>