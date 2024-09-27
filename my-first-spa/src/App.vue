<template>
  <div>
    <nav>
      <router-link to="/">Hello World</router-link> <br>
      <router-link to="/loop">Loop</router-link> <br>
      <router-link to="/Circulo">Área de circulo</router-link> <br>
      <router-link to="/Triagulo">Área De Triângulo</router-link> <br>
      <router-link to="/SobreNos">Sobre nos</router-link> <br>
      <router-link to="/Home">Home</router-link>
    </nav>
  </div>

  <router-view></router-view>
</template>

<script>

  export default{
    name: 'App',

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
