import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import LoopComponent from "./components/LoopComponent.vue";
import FetchNaruto from "./components/fetchNaruto.vue";
import NarutoDetail from "./components/narutoDetail.vue";


const routes = [
    {
        path: '/',
        name: 'Hello',
        component: HelloWorld
    },

    {
        path: '/loop',
        name: 'Loop',
        component: LoopComponent
    },

    {
        path:'/naruto',
        name: 'Naruto',
        component: FetchNaruto,
    },

    {
        path: '/naruto/:id',
        name: 'detalhes',
        component: NarutoDetail,
        props: true
    }
   
];

const router = createRouter({
    //esse history cria/carregada as paginas e cria nosso historico de navegacao
    history: createWebHistory(),
    routes
})

export default router;