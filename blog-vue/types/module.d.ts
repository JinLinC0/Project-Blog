/// <reference types="vite/client" />
declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

interface CategoryModel {
    id: number;
    title: string;
}

interface ArticleModel {
    id: number;
    title: string;
    content: string;
    categoryId: number;
    createdAt: string;
    updatedAt: string;
    category: {
        id: number;
        title: string;
    }
}