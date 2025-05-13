<template>
    <main>
        <article-list :cid="route.params.cid" :key="+route.params.cid"/>
    </main>
</template>

<script setup lang="ts">
import ArticleList from '@/components/articleList.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style lang="scss" scoped>
main {
    @apply pt-8;
}
</style>
