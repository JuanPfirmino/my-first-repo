<!-- src/App.vue -->
<template>
  <div id="app">
    <AppHeader />
    <main>
      <h2>Página Inicial</h2>
      <p>Bem-vindo ao meu site!</p>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
  padding: 20px;
}
</style>
