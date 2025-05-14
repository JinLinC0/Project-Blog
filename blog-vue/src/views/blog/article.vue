<template>
    <main>
        <h1>
            {{ article?.title }}
            <div>
                <el-button type="primary" size="small" @click="$router.push(`/update/${article?.id}`)">编辑文章</el-button>
                <el-button type="danger" size="small" @click="deleteArticleByID()">删除文章</el-button>
            </div>
        </h1>
        <time>发表时间：{{ article?.createdAt }} &nbsp;&nbsp;&nbsp;&nbsp; 更新时间：{{ article?.updatedAt }}</time>
        <p>
            {{ article?.content }}
        </p>
    </main>
</template>

<script setup>
import useArticle from '@/composables/useArticle';
import { useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { ElMessage } from 'element-plus'

const route = useRoute();
const router = useRouter();
const { find, article, del } = useArticle();

onMounted(async () => {
    await find(Number(route.params.id));
});

const deleteArticleByID = async () => {
    try {
        await del(route.params.id);
        ElMessage({
            message: '删除成功',
            type: 'success',
        })
        setTimeout(() => {
            router.push('/');
        }, 1000)
    } catch (error) {
        ElMessage.error('删除失败')
    }
}
</script>

<style lang="scss" scoped>
main {
    h1 {
        @apply mb-4 border-b border-gray-500 pb-3 mt-8 text-2xl text-gray-600 flex justify-between items-center;
    }

    time {
        @apply text-xs font-bold text-slate-600 mb-5 block;
    }

    p {
        @apply text-gray-500;
    }
}
</style>