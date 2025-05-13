<template>
    <main>
        <h1>{{ article?.title }}</h1>
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

    p {
        @apply text-gray-500;
    }
}
</style>