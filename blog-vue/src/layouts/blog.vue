<template>
    <main class="container">
        <div class="log cursor-pointer" @click="$router.push('/')">
            <img src="/images/blog.svg" class="w-[100px]">
        </div>
        <nav>
            <section>
                <div v-for="category of categories" :key="category.id" 
                    :class="{ active: +$route.params.cid == category.id }"
                    @click="$router.push(`/category/${category.id}`)">
                    {{ category.title }}
                </div>
            </section>
            <section>
                <el-button type="primary" size="default">文章发表</el-button>
                <el-button type="success" size="default" @click="router.push('/')">回到首页</el-button>
            </section>
        </nav>
        <router-view />
    </main>
</template>

<script setup>
import useCategory from '@/composables/useCategory';
import useArticle from '@/composables/useArticle';
import router from '@/router';
import { onMounted } from 'vue';

const { all, categories } = useCategory();

onMounted(async () => {
    await all();
});

const { all:getArticleList } = useArticle();
</script>

<style lang="scss" scoped>
main.container {
    @apply bg-gray-50 md:shadow-md md:mt-5 m-auto md:w-[1200px] p-5 md:rounded-2xl;

    nav {
        @apply flex md:flex-row flex-col md:justify-between md:items-center;
        section {
            @apply flex gap-2 items-center flex-wrap;
            div {
                @apply bg-slate-200 text-gray-500 py-2 cursor-pointer hover:shadow-lg duration-300;
                &.active {
                    @apply bg-fuchsia-950 text-white;
                }
            }
            &:nth-of-type(2) {
                @apply flex justify-between mt-3 md:mt-0 ml-0;
                button {
                    @apply flex-1;
                }
            }
        }
    }
}
</style>