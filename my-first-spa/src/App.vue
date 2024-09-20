<template>
  <NavPage></NavPage>
  <ContentPage></ContentPage>
  <LoopComponent></LoopComponent>
  <FooterPage></FooterPage>
<<<<<<< HEAD
  <ObjetoComponent></ObjetoComponent>
=======
  <LoopComponent></LoopComponent>
>>>>>>> f169ffdfbfe629af5c9a9fabf4b960c8b7d8f089
</template>

<script>
  import NavPage from './components/default/NavPage.vue';
  import ContentPage from './components/default/ContentPage.vue';
  import FooterPage from './components/default/FooterPage.vue';
<<<<<<< HEAD
  import LoopComponent from './components/default/LoopComponent.vue';
  import ObjetoComponent from './components/default/ObjetoComponent.vue';
=======
  import LoopComponent from './components/LoopComponent.vue';
>>>>>>> f169ffdfbfe629af5c9a9fabf4b960c8b7d8f089

  export default{
    name: 'App',
    components:{
<<<<<<< HEAD
      NavPage, ContentPage, FooterPage, LoopComponent,ObjetoComponent
=======
      NavPage, ContentPage, FooterPage, LoopComponent
>>>>>>> f169ffdfbfe629af5c9a9fabf4b960c8b7d8f089
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
