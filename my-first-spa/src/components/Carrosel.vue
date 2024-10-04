<template>
    <div class="carousel">
      <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="carousel-item" v-for="(image, index) in images" :key="index">
          <img :src="image" alt="Imagem do carrossel" />
        </div>
      </div>
      <button @click="prev" class="carousel-control prev">❮</button>
      <button @click="next" class="carousel-control next">❯</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 0,
        images: [
          'https://via.placeholder.com/600x400?text=Imagem+1',
          'https://via.placeholder.com/600x400?text=Imagem+2',
          'https://via.placeholder.com/600x400?text=Imagem+3'
        ]
      };
    },
    methods: {
      next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      prev() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      }
    }
  };
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    overflow: hidden;
    width: 600px; /* largura do carrossel */
    height: 400px; /* altura do carrossel */
  }
  
  .carousel-inner {
    display: flex;
    transition: transform 0.5s ease;
  }
  
  .carousel-item {
    min-width: 100%;
    height: 100%;
  }
  
  .carousel img {
    width: 100%;
    height: auto;
  }
  
  .carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.7);
    border: none;
    cursor: pointer;
    padding: 10px;
    z-index: 1000;
  }
  
  .prev {
    left: 10px;
  }
  
  .next {
    right: 10px;
  }
  </style>
  