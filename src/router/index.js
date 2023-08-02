import { createWebHistory, createRouter } from "vue-router";
import Home from '/src/views/Home.vue';
import About from '/src/views/About.vue';
import Contact from '/src/views/Contact.vue';
import Produk from '/src/views/Produk.vue';
import KategoriComponent from '/src/views/KategoriComponent.vue';

// Komponen Kategori
import DetailKategori from '/src/views/DetailKategori.vue';

import Detail from '/src/views/Detail.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
    },
    {
        path: '/produk',
        name: 'produk',
        component: Produk,
    },
    {
        path: '/kategori',
        name: 'kategori',
        component: KategoriComponent,
    },
    {
        path: '/detail/:id_produk',
        name: 'Detail',
        component: Detail,
        props: true
    },
    {
        path: '/detailKategori/:id_kategori',
        name: 'detailKategori',
        component: DetailKategori,
        props: true
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;