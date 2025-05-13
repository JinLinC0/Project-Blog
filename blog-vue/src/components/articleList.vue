<template>
    <AnimateList tag="div" :duration="2" :delay="0.1">
    <section v-for="(article, index) in pageResult?.data" :key="article.id" :data-index="index">
        <router-link :to="`/article/${article.id}`">
            {{ article.title }}
        </router-link>
        <aside @click="$router.push(`/category/${article.categoryId}`)">
            {{ article.category.title }}
        </aside>
    </section>
    <div class="mt-5 border-t border-gray-100 pt-3">
        <el-pagination @current-change="all" :page-sizes="[20, 40, 80, 100]" :page-size="pageResult?.meta.page_row"
            :total="pageResult?.meta.total" background>
        </el-pagination>
    </div>
    </AnimateList>
</template>

<script setup lang="ts">
import useArticle from '@/composables/useArticle';
import { onMounted } from 'vue';
import AnimateList from './animateList.vue';

const { cid } = defineProps<{
    cid?: any
}>()

const { all, pageResult } = useArticle();

onMounted(async () => {
    await all(1, cid);
});
</script>

<style lang="scss" scoped>
section {
    @apply mt-2 flex justify-between items-center;
    a {
        @apply bg-slate-200 text-gray-600 py-2 px-3 mb-2;
    }
    aside {
        @apply text-xs p-2 text-gray-400 font-bold cursor-pointer hidden md:flex;
    }
}
</style>