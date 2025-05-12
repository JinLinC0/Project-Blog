<template>
    <main>
        <section v-for="article of pageResult?.data" :key="article.id">
            <router-link to="/">
                {{ article.title }}
            </router-link>
            <aside>
                {{ article.category.title }}
            </aside>
        </section>
        <div class="mt-5 border-t border-gray-100 pt-3">
            <el-pagination @current-change="all" :page-sizes="[20, 40, 80, 100]" :page-size="pageResult?.meta.page_row"
                :total="pageResult?.meta.total" background>
            </el-pagination>
        </div>
    </main>
</template>

<script setup lang="ts">
import useArticle from '@/composables/useArticle';

const { all, pageResult } = useArticle();
all();
</script>

<style lang="scss" scoped>
main {
    @apply pt-8;
    section {
        @apply mt-2 flex justify-between items-center;
        a {
            @apply bg-slate-200 text-gray-600 py-2 px-3 mb-2;
        }
        aside {
            @apply text-xs p-2 text-gray-400 font-bold cursor-pointer;
        }
    }
}
</style>
