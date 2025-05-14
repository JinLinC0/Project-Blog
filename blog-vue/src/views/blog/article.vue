<template>
    <main>
        <h1>{{ article?.title }}</h1>
        <time>发表时间：{{ article?.createdAt }} &nbsp;&nbsp;&nbsp;&nbsp; 更新时间：{{ article?.updatedAt }}</time>
        <p>
            {{ article?.content }}
        </p>
    </main>
</template>

<script setup>
import useArticle from '@/composables/useArticle';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

const route = useRoute();
const { find, article } = useArticle();

onMounted(async () => {
    await find(Number(route.params.id));
});
</script>

<style lang="scss" scoped>
main {
    h1 {
        @apply mb-4 border-b border-gray-500 pb-3 mt-8 text-2xl text-gray-600;
    }

    time {
        @apply text-xs font-bold text-slate-600 mb-5 block;
    }
    
    p {
        @apply text-gray-500;
    }
}
</style>