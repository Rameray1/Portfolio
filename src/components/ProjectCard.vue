<template>
  <div class="project-card">
    <h2 class="project-title">{{ title }}</h2>
    <p class="project-description">{{ description }}</p>
    <div class="technologies">
      <span v-for="tech in technologies" :key="tech" class="tech-square">{{ tech }}</span>
    </div>
    <button @click="showImage = !showImage" class="view-image-button">
      {{ showImage ? 'Masquer' : 'Voir' }} l'image
    </button>
    <img v-if="showImage" :src="imageSrc" :alt="title" class="project-image" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: String,
  description: String,
  imageSrc: String,
  technologies: Array
});

const showImage = ref(false);
</script>
