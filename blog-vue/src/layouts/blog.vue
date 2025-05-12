<template>
    <main class="container">
        <div class="log cursor-pointer" @click="getArticleList(1, {})">
            <img src="/images/blog.svg" class="w-[100px]">
        </div>
        <nav>
            <section>
                <div v-for="category of categories" :key="category.id" @click="getArticleList(1, { category: category.id })">
                    {{ category.title }}
                </div>
            </section>
            <section>
                <el-button type="primary" size="default">文章发表</el-button>
            </section>
        </nav>
        <router-view />
    </main>
</template>

<script setup>
import useCategory from '@/composables/useCategory';
import useArticle from '@/composables/useArticle';
import router from '@/router';

const { all, categories } = useCategory();
all()

const { all:getArticleList } = useArticle();
</script>

<style lang="scss" scoped>
main.container {
    @apply bg-white shadow-md mt-5 m-auto md:w-[1000px] p-5 rounded-2xl;

    nav {
        @apply flex justify-between items-center;
        section {
            @apply flex gap-2 items-center;
            div {
                @apply bg-slate-200 text-gray-500 py-2 cursor-pointer hover:shadow-lg duration-300;
            }
        }
    }
}
</style>