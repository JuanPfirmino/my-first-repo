<!-- src/components/AppHeader.vue -->
<template>
  <header>
    <h1>Meu Site</h1>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/sobre">Sobre</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
/* estilos permanecem os mesmos */
</style>
