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
    ]
} as RouteRecordRaw