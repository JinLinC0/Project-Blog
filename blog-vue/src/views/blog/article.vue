<template>
    <main>
        <h1>
            {{ article?.title }}
            <div>
                <el-button type="primary" size="small" @click="$router.push(`/update/${article?.id}`)">编辑文章</el-button>
                <el-button type="danger" size="small" @click="delDialogClose()">删除文章</el-button>
            </div>
        </h1>
        <time>发表时间：{{ article?.createdAt }} &nbsp;&nbsp;&nbsp;&nbsp; 更新时间：{{ article?.updatedAt }}</time>
        <p>
            {{ article?.content }}
        </p>
    </main>

    <el-dialog v-model="delDialogShow" title="警告" width="300" :before-close="handleClose">
        <span>确定删除文章？</span>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="delDialogShow = false">取消</el-button>
                <el-button type="danger" @click="deleteArticleByID">
                    确定
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup>
import useArticle from '@/composables/useArticle';
import { useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { ElMessage } from 'element-plus';
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();
const { find, article, del } = useArticle();

onMounted(async () => {
    await find(Number(route.params.id));
});

const delDialogShow = ref(false);

// 删除文章弹窗
const delDialogClose = () => {
    delDialogShow.value = true;
}

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