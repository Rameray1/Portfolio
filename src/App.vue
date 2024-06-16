<template>
  <header>
    <TheNav />
  </header>
  <main>
    <section id="home">
      <HomeView />
    </section>
    <section id="about">
      <AboutView />
    </section>
    <section id="skills">
      <SkillsView />
    </section>
    <section id="projects">
      <ProjectsView />
    </section>
    <section id="contact">
      <ContactView />
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import SkillsView from '@/views/SkillsView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue'
</script>

<style>
a,
a:visited {
  color: #2c3e50;
}
main {
  margin: 0 auto;
  max-width: 960px;
  padding: 20px;
}
section {
  padding: 60px 0;
}
</style>
