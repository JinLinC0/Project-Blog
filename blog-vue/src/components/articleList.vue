<template>
    <AnimateList tag="div" :duration="2" :delay="0.1">
        <section v-for="(article, index) in pageResult?.data" :key="article.id" :data-index="index">
            <div class="md:h-[150px] h-[200px]">
                <div class="mt-2 flex justify-between">
                    <div @click="$router.push(`/article/${article.id}`)" class="cursor-pointer py-2 px-3 mb-2 w-full">
                        {{ article.title }}
                    </div>
                    <el-button class="w-1/10 flex-shrink-0" color="#626aef" plain
                        @click="$router.push(`/category/${article.categoryId}`)">
                        {{ article.category.title }}
                    </el-button>
                </div>
                <div class="text-gray-500 text-sm py-2 px-3">
                    {{ article.content.length > 100 ? article.content.substring(0, 100) + '...' : article.content }}
                </div>
                <el-divider />
            </div>
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

<style lang="scss" scoped></style>