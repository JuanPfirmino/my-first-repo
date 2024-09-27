import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import LoopComponent from "./components/LoopComponent.vue";
import CalcCirculo from "./components/CalcCirculo.vue";
import CalculoTriangulo from "./components/CalculoTriangulo.vue";
import HomeComponent from "./components/HomeComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";


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
        path: '/Circulo',
        name: 'Calculo da Área de um Circulo',
        component: CalcCirculo
    },

    {
        path: '/Triangulo',
        name: 'Calculo da Área de um Triângulo',
        component: CalculoTriangulo
    },

    {
        path: '/Home',
        name: 'HomePage',
        component: HomeComponent
    },

    {
        path: '/SobreNos',
        name: 'SobreNos',
        component: AboutComponent
    }

];

const router = createRouter({
    //esse history cria/carregada as paginas e cria nosso historico de navegacao
    history: createWebHistory(),
    routes
})

export default router;