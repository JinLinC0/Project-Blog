<template>
    <el-card shadow="always" :body-style="{ padding: '20px' }" class="mt-3">
        <el-select v-model="article.categoryId" value-key="" placeholder="请选择栏目" class="mb-2">
            <el-option v-for="category in categories" :key="category.id" :label="category.title"
                :value="category.id"></el-option>
        </el-select>
        <template #header>发表文章</template>
        <el-input v-model="article.title" placeholder="请输入标题" clearable class="mb-2" />
        <wangEditor v-model="article.content" :height="300" class="mb-2" />
        <el-button type="primary" size="default" class="mt-2" @click="onSubmit">文章提交</el-button>
    </el-card>
</template>

<script setup lang="ts">
import wangEditor from '@/components/wangEditor/editor.vue';
import useArticle from '@/composables/useArticle';
import useCategory from '@/composables/useCategory';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const { add } = useArticle();
const { all, categories } = useCategory();

const router = useRouter();

// 提交文章
const onSubmit = async () => {
    try {
        await add(article.value);
        router.push('/');
    } catch (error) {
        
    }
}

onMounted(async () => {
    await all();
});

const article = ref({
    title: '',
    content: '',
    categoryId: null
})

</script>

<style scoped></style>