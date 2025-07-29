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
    <section id="formation">
      <FormationView />
    </section>
    <section id="alternance">
      <AlternanceView />
    </section>
    <section id="projects">
      <ProjectsView />
    </section>
    <section id="iut">
      <IutView />
    </section>
    <section id="contact">
      <ContactView />
    </section>
  </main>
  <footer>
    <TheFooter />
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TheNav from '@/components/TheNav.vue'
import TheFooter from '@/components/TheFooter.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue'
import FormationView from '@/views/FormationView.vue'
import IutView from '@/views/IutView.vue'
import AlternanceView from '@/views/AlternanceView.vue'

</script>