<template>
    <main>
        <section>
            <router-link to="/" v-for="article of pageResult?.data" :key="article.id">
                {{ article.title }}
            </router-link>
        </section>
    </main>
</template>

<script setup lang="ts">
import useArticle from '@/composables/useArticle';

const { all, pageResult } = useArticle();
all();
</script>

<style lang="scss" scoped>
main {
    section {
        @apply mt-5;
        a {
            @apply bg-slate-200 text-gray-600 py-2 px-3 block mb-3;
        }
    }
}
</style>
