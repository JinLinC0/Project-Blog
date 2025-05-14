import { RouteRecordRaw } from 'vue-router';

export default {
    path: '/',
    component: () => import('@/layouts/blog.vue'),
    children: [
        {
            name: 'home',
            path: '',
            component: () => import('@/views/blog/home.vue'),
        },
        {
            name: 'article',
            path: 'article/:id',
            component: () => import('@/views/blog/article.vue'),
        },
        {
            name: 'category',
            path: 'category/:cid',
            component: () => import('@/views/blog/category.vue'),
        },
        {
            name: 'create',
            path: 'create',
            component: () => import('@/views/blog/create.vue'),
        },
        {
            name: 'update',
            path: 'update/:id',
            component: () => import('@/views/blog/update.vue'),
        }
    ]
} as RouteRecordRaw