<template>
  <NavPage></NavPage>
  <ContentPage></ContentPage>
  <LoopComponent></LoopComponent>
  <FooterPage></FooterPage>
  <ObjetoComponent></ObjetoComponent>
</template>

<script>
  import NavPage from './components/default/NavPage.vue';
  import ContentPage from './components/default/ContentPage.vue';
  import FooterPage from './components/default/FooterPage.vue';
  import LoopComponent from './components/default/LoopComponent.vue';
  import ObjetoComponent from './components/default/ObjetoComponent.vue';

  export default{
    name: 'App',
    components:{
      NavPage, ContentPage, FooterPage, LoopComponent,ObjetoComponent
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
