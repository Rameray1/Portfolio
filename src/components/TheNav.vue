<script setup>
import { ref, onMounted } from 'vue'
import { useDestinationService } from '@/services/DestinationService.js'

const destinations = ref(null)
const destinationService = useDestinationService()

onMounted(() => {
  destinationService
    .getDestinations()
    .then(response => {
      destinations.value = response.data
    })
    .catch(error => {
      console.log(error.message)
    })
})
</script>

<template>
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
    <!-- Ajouté une vérification pour destinations avant de boucler -->
    <div v-if="destinations">
      <a
        v-for="dest in destinations"
        :key="dest.id"
        :href="`#destination-${dest.id}`"
      >
        {{ dest.name }}
      </a>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 30px;
  background: #2c3e50;
  color: white;
  display: flex;
  gap: 20px; /* Utilisation de gap pour espacer les éléments */
  align-items: center;
  border-bottom: 5px solid #4e6c71;
  z-index: 2;
}
nav a {
  color: white;
  opacity: 0.7;
  text-decoration: none;
  font-weight: bold;
}
nav a.active,
nav a:hover {
  opacity: 1;
}
</style>
