<template>
    <form @submit.prevent="resultados">
      <input type="number" v-model="h" placeholder="Altura" />
      <input type="number" v-model="b" placeholder="Base" />
      <button type="button" @click="calcTriangulo">Calcular triangulo</button>
    </form>
  
    <div v-for="(resultado, index) in resultados" :key="index">
      <p>Resultado: {{ resultado.A }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        h: null,
        b: null,
        resultados: [],
      };
    },
    methods: {
      calcTriangulo() {
        if (this.h && this.b) {
          const A = (this.h * this.b) / 2;
          this.resultados.push({ A });
        } else {
          alert('Por favor, insira altura e base válidas.');
        }
      },
    }
  };
  </script>
  
 
  