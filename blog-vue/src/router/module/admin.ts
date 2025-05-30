import { RouteRecordRaw } from 'vue-router';

export default {
    name: 'admin',
    path: '/admin',
    redirect: '/admin/home',  // 输入/admin后，默认跳转到/admin/home
    component: () => import('@/layouts/admin.vue'),
    meta: { auth: true, menu: { title: '工作台', icon: 'HomeFilled' } },
    children: [
        {
            name: 'admin.home',
            path: 'home',
            component: () => import('@/views/admin/home.vue'),
            meta: { menu: { title: '回到首页' } },
        }
    ]
} as RouteRecordRaw