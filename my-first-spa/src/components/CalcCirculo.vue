<template>
    <form @submit.prevent="resultados">
      <input type="number" v-model="r" placeholder="Raio" />
      <input type="number" v-model="pi" placeholder="Pi" />
      <button type="button" @click="calcTriangulo">Calcular circulo</button>
    </form>
  
    <div v-for="(resultado, index) in resultados" :key="index">
      <p>Resultado: {{ resultado.A }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pi: null,
        r: null,
        resultados: [],
      };
    },
    methods: {
      calcTriangulo() {
        if (this.pi && this.r) {
          const A = (this.r * this.r) * 3.14;
          this.resultados.push({ A });
        } else {
          alert('Por favor, insira altura e base válidas.');
        }
      },
    }
  };
  </script>
  
 
  