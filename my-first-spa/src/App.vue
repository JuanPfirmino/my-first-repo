<template>
  <NavPage></NavPage>
  <ContentPage></ContentPage>
  <FooterPage></FooterPage>
  <LoopComponent></LoopComponent>
  <ObjectComponent></ObjectComponent>
  <CalculoTriangulo></CalculoTriangulo>
  <CalcCirculo></CalcCirculo>
</template>

<script>
  import NavPage from './components/default/NavPage.vue';
  import ContentPage from './components/default/ContentPage.vue';
  import FooterPage from './components/default/FooterPage.vue';
  import LoopComponent from './components/LoopComponent.vue';
  import ObjectComponent from './components/ObjectComponent.vue';
  import CalculoTriangulo from './components/CalculoTriangulo.vue';
  import CalcCirculo from './components/CalcCirculo.vue';

  export default{
    name: 'App',
    components:{
      NavPage, ContentPage, FooterPage, LoopComponent, ObjectComponent, CalculoTriangulo, CalcCirculo
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
